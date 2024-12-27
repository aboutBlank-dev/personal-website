import { useTheme } from "../hooks/useTheme";
import whiteLogo from "/github-mark-white.png";
import blackLogo from "/github-mark.png";

type GithubButtonProps = {
  projectLink: string;
};

export default function GithubButton({ projectLink }: GithubButtonProps) {
  const theme = useTheme();
  const goToGithubRepo = () => {
    window.open(projectLink);
  };

  return (
    <img
      className='github-logo'
      src={theme.currentTheme == "dark" ? whiteLogo : blackLogo}
      alt='github logo'
      onClick={goToGithubRepo}
    />
  );
}
