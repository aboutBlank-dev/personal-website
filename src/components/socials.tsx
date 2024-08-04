/// <reference types="vite-plugin-svgr/client" />

import GithubIcon from "../assets/svg/github_icon.svg?react";
import LinkedInIcon from "../assets/svg/linkedin_icon.svg?react";
import EmailIcon from "../assets/svg/email_icon.svg?react";
import { Tooltip } from "react-tooltip";
import { useTheme } from "../hooks/useTheme";

export const Socials = () => {
  const theme = useTheme();
  return (
    <div className='flex flex-col gap-2'>
      <ul className='flex justify-center lg:justify-normal mt-8 gap-4 items-center list-none'>
        <li className='group'>
          <a
            href='https://github.com/aboutBlank-dev'
            target='_blank'
            rel='noreferrer'
            className='group-hover:scale-110 transition-transform duration-300'
          >
            <GithubIcon
              className='w-8 h-8 group-hover:scale-125 transition-transform duration-200'
              fill={theme.currentTheme === "dark" ? "white" : "black"}
            />
          </a>
        </li>
        <li className='group'>
          <a
            href='https://www.linkedin.com/in/jose-colaco-dev/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon
              className='w-8 h-8 group-hover:scale-125 transition-transform duration-100'
              fill={theme.currentTheme === "dark" ? "white" : "black"}
            />
          </a>
        </li>
        <li className='group'>
          <a href='mailto:josecolaco1999@gmail.com' target='_top'>
            <EmailIcon
              className='w-8 h-8 group-hover:scale-125 transition-transform duration-100'
              fill={theme.currentTheme === "dark" ? "white" : "black"}
            />
          </a>
        </li>
      </ul>
      <Tooltip id='email-copy-tooltip' offset={-70} noArrow={true} />
      <p
        data-tooltip-id='email-copy-tooltip'
        data-tooltip-content='Copy to clipboard'
        className='lg:text-left text-center cursor-pointer'
        onClick={() =>
          navigator.clipboard.writeText("josecolaco1999@gmail.com")
        }
      >
        josecolaco1999@gmail.com
      </p>
      {}
    </div>
  );
};
