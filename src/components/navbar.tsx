import { useEffect } from "react";
import { SmoothScrollLink } from "./smoothScrollLink";

export const NavBar = () => {
  useEffect(() => {
    // scroll to hash
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [window.location.hash]);

  return (
    <nav className='nav hidden lg:block'>
      <ul className='mt-16 w-max'>
        <li>
          <SmoothScrollLink to='#about'>About</SmoothScrollLink>
        </li>
        <li>
          <SmoothScrollLink to='#experience'>Experience</SmoothScrollLink>
        </li>
        <li>
          <SmoothScrollLink to='#projects'>Projects</SmoothScrollLink>
        </li>
      </ul>
    </nav>
  );
};
