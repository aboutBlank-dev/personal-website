type Props = {
  isTopOfPage?: boolean;
  setSelectedPage?: (page: string) => void;
};

function NavBar({}: Props) {
  return (
    <nav>
      <div className='bg-slate-500 fixed top-0 w-full'> Test </div>
    </nav>
  );
}

export default NavBar;
