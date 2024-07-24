interface SmoothScrollLinkProps {
  to: string;
  children: React.ReactNode;
}

export const SmoothScrollLink = ({ to, children }: SmoothScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(to);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      window.history.pushState(
        {},
        "",
        `${window.location.href.split("#")[0]}${to}`
      );
    }
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};
