import { useEffect, useState } from "react";
import NavBar from "./components/navbar";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(false);
  const [selectedPage, setSelectedPage] = useState(PageType.Home);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      if (isTop) {
        setIsTopOfPage(true);
        setSelectedPage(PageType.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  console.log("Rendering App");
  return (
    <div></div>
    // <NavBar
    //   isTopOfPage={isTopOfPage}
    //   selectedPage={selectedPage}
    //   setSelectedPage={() => null}
    // />
  );
}

export default App;

export enum PageType {
  Home,
}
