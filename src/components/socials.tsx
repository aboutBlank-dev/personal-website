/// <reference types="vite-plugin-svgr/client" />

import GithubIcon from "../assets/svg/github_icon.svg?react";
import LinkedInIcon from "../assets/svg/linkedin_icon.svg?react";
import EmailIcon from "../assets/svg/email_icon.svg?react";

export const Socials = () => {
  return (
    <div className='flex flex-col gap-2'>
      <ul className='flex justify-center lg:justify-normal mt-8 gap-4 items-center'>
        <li className=''>
          <a
            href='https://github.com/aboutBlank-dev'
            target='_blank'
            rel='noreferrer'
          >
            <GithubIcon className='w-10 h-10' fill='white' />
          </a>
        </li>
        <li className=''>
          <a
            href='https://www.linkedin.com/in/jose-colaco-dev/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon className='w-10 h-10' fill='white' />
          </a>
        </li>
        <li className=''>
          <a href='mailto:josecolaco1999@gmail.com' target='_top'>
            <EmailIcon className='w-10 h-10' fill='white' />
          </a>
        </li>
      </ul>
      <p className='lg:text-left text-center'>josecolaco1999@gmail.com</p>
    </div>
  );
};
