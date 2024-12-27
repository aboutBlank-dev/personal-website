import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import SortingPathfindingRoutes from "./sort-pathfinding-project/src/App";
import { ThemeContextProvider } from "./contexts/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {SortingPathfindingRoutes()}
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}
export default App;
