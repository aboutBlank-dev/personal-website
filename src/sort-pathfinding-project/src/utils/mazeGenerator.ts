import {
  MazeGenerationStep,
  MazeGenerationStepAction,
} from "../types/mazeGenerationStep";
import {
  GridNode,
  GridNodeType,
  PathfindingGrid,
} from "../types/pathfindingGrid";

export class MazeUtils {
  /**
   * Generates a maze using the recursive backtracking algorithm.
   * https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_backtracker
   *
   * @returns mazeGrid: modified grid with a maze (added wall nodes and possibly moved start and end nodes)
   * @returns mazeGenerationSteps: the steps taken to generate the maze
   */
  static generateMaze(
    inputGrid: PathfindingGrid
  ): [PathfindingGrid, MazeGenerationStep[]] {
    const newGrid = new Array(inputGrid.height).fill(null).map((_, row) => {
      return new Array(inputGrid.width).fill(null).map((_, col) => {
        return {
          x: row,
          y: col,
          nodeType: GridNodeType.WALL,
        };
      });
    });

    const mazeGenerationSteps: MazeGenerationStep[] = []; //Used for Visualizing the maze generation

    //Add an empty step to start (so that index 0 shows an empty grid)
    const allCoords = new Array(inputGrid.width * inputGrid.height)
      .fill(null)
      .map((_, i) => {
        return {
          x: Math.floor(i / inputGrid.width),
          y: i % inputGrid.width,
        };
      });

    mazeGenerationSteps.push({
      coords: allCoords,
      action: MazeGenerationStepAction.REMOVE_WALL,
    });

    const stack: GridNode[] = [];
    const visited: Set<GridNode> = new Set();
    const start = newGrid[1][1];

    start.nodeType = GridNodeType.EMPTY;
    stack.push(start);
    visited.add(start);

    const initialWallsAdded = [];
    for (let x = 0; x < newGrid.length; x++) {
      for (let y = 0; y < newGrid[0].length; y++) {
        if (x % 2 === 0 || y % 2 === 0) {
          newGrid[x][y].nodeType = GridNodeType.WALL;
          initialWallsAdded.push({ x, y });
        } else {
          newGrid[x][y].nodeType = GridNodeType.EMPTY;
        }
      }
    }

    mazeGenerationSteps.push({
      coords: initialWallsAdded,
      action: MazeGenerationStepAction.ADD_WALL,
    });

    while (stack.length > 0) {
      const curr = stack.pop()!;

      const neighbors = getNeighbors(curr, newGrid);
      const unvisitedneighbors = neighbors.filter(
        (cell) => visited.has(cell) === false
      );

      if (unvisitedneighbors.length > 0) {
        curr.nodeType = GridNodeType.EMPTY;
        stack.push(curr);
        visited.add(curr);

        mazeGenerationSteps.push({
          coords: [{ x: curr.x, y: curr.y }],
          action: MazeGenerationStepAction.REMOVE_WALL,
        });

        const chosenNeighbor =
          unvisitedneighbors[
            Math.floor(Math.random() * unvisitedneighbors.length)
          ];

        // get the cell between the current cell and the chosen neighbor
        const wallX = (curr.x + chosenNeighbor.x) / 2;
        const wallY = (curr.y + chosenNeighbor.y) / 2;

        newGrid[wallX][wallY].nodeType = GridNodeType.EMPTY;
        mazeGenerationSteps.push({
          coords: [{ x: wallX, y: wallY }],
          action: MazeGenerationStepAction.REMOVE_WALL,
        });

        stack.push(chosenNeighbor);
        visited.add(chosenNeighbor);
      }
    }

    //Find an empty cell for the start node (As close to top left corner as possible).
    let startPosition = { x: -1, y: -1 };
    loop: for (let x = 0; x < newGrid.length; x++) {
      for (let y = 0; y < newGrid[x].length; y++) {
        if (newGrid[x][y].nodeType === GridNodeType.EMPTY) {
          newGrid[x][y].nodeType = GridNodeType.START;
          startPosition = { x, y };
          break loop;
        }
      }
    }

    //Find an empty cell for the end node( As close to bottom right corner as possible).
    let endPosition = { x: -1, y: -1 };
    loop: for (let x = newGrid.length - 1; x >= 0; x--) {
      for (let y = newGrid[x].length - 1; y >= 0; y--) {
        if (newGrid[x][y].nodeType === GridNodeType.EMPTY) {
          newGrid[x][y].nodeType = GridNodeType.END;
          endPosition = { x, y };
          break loop;
        }
      }
    }

    //Add the "moving"of the start and end nodes to the mazeGenerationSteps
    mazeGenerationSteps.push({
      coords: [startPosition],
      action: MazeGenerationStepAction.ADD_START,
    });

    mazeGenerationSteps.push({
      coords: [endPosition],
      action: MazeGenerationStepAction.ADD_END,
    });

    const newPathfindingGrid = {
      width: inputGrid.width,
      height: inputGrid.height,
      startNode: startPosition,
      endNode: endPosition,
      grid: newGrid,
    };
    return [newPathfindingGrid, mazeGenerationSteps];
  }
}

/**
 * For maze generation, we want to get neighbors that are *2* cells away, since the walls are 1 cell thick
 */
function getNeighbors(cell: GridNode, grid: GridNode[][]): GridNode[] {
  const neighbors: GridNode[] = [];

  const dirs = [
    [0, 2], //up
    [2, 0], //right
    [0, -2], //down
    [-2, 0], //left
  ];

  for (const dir of dirs) {
    const [dx, dy] = dir;
    const x = cell.x + dx;
    const y = cell.y + dy;

    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) continue;

    neighbors.push(grid[x][y]);
  }

  return neighbors;
}
