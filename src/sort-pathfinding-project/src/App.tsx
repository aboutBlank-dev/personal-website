import "./App.css";
import "./pages/Pages.css";
import "./ResizePanels.css";
import Sorting from "./pages/Sorting";
import Pathfinding from "./pages/Pathfinding";
import { Route } from "react-router-dom";
import { SortingContextProvider } from "./contexts/sortingContext";
import { PathfindingContextProvider } from "./contexts/pathfindingContext";

function SortingPathfindingRoutes() {
  const SortingPage = () => {
    return (
      <SortingContextProvider>
        <Sorting />
      </SortingContextProvider>
    );
  };

  const PathfindingPage = () => {
    return (
      <PathfindingContextProvider>
        <Pathfinding />
      </PathfindingContextProvider>
    );
  };

  return (
    <>
      <Route path='/sorting-visualizer' element={<SortingPage />} />
      <Route path='/pathfinding-visualizer' element={<PathfindingPage />} />
    </>
  );
}
export default SortingPathfindingRoutes;
