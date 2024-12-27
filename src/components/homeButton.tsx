/// <reference types="vite-plugin-svgr/client" />

import HomeIcon from "../assets/svg/home_icon.svg?react";
import { useTheme } from "../hooks/useTheme";

export const HomeButton = () => {
  const theme = useTheme();
  return (
    <a href='/' target='_top' className=' flex items-center justify-center'>
      <HomeIcon
        className=' w-8 h-8 block border-none bg-none p-[2px] cursor-pointer'
        fill={theme.currentTheme === "dark" ? "white" : "black"}
      />
    </a>
  );
};
