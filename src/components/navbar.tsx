import { useEffect, useState } from "react";
import { Link, scrollSpy } from "react-scroll";
import "../styles/navbar.css";
import { Scroll } from "@react-three/drei";

function scrollDuration(distanceInPx: number) {
  const duration = (distanceInPx / 2) * 1.5;
  return duration < 500 ? 500 : duration;
}

export const NavBar = () => {
  useEffect(() => {
    // scroll to hash
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (!element) return;

        element.scrollIntoView({ behavior: "smooth" });
        scrollSpy.update();
      }, 100);
    }
  }, [window.location.hash]);

  return (
    <nav className='nav hidden lg:block'>
      <ul className='mt-16 w-full'>
        <li>
          <ScrollLink to='about' text='About' />
        </li>
        <li>
          <ScrollLink to='experience' text='Experience' />
        </li>
        <li>
          <ScrollLink to='projects' text='Projects' />
        </li>
      </ul>
    </nav>
  );
};

const ScrollLink = ({ to, text }: { to: string; text: string }) => {
  return (
    <Link
      to={to}
      smooth={true}
      spy={true}
      hashSpy={true}
      duration={scrollDuration}
      className='cursor-pointer select-none'
    >
      <div className='flex items-center group'>
        <span className='mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200' />
        <span>{text}</span>
      </div>
    </Link>
  );
};
