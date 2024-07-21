import ParticleBackground from "./components/particleBackground";
import { ThemeContextProvider } from "./contexts/themeContext";
import { CircularPhotoDisplay } from "./components/circularPhotoDisplay";

function App() {
  return (
    <ThemeContextProvider>
      <ParticleBackground />
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
            {/* Left Side */}
            <div>
              <div className='h-64'>
                <CircularPhotoDisplay photoUrl='src/assets/Photo_Jose.JPG' />
              </div>
              <h1 className='text-4xl font-bold text-slate-200'>José Colaco</h1>
              <h2 className='text-lg mt-3'> Junior Developer </h2>
              <p className='mt-3'> I Try to do things... I don't know... </p>
              <nav className='nav hidden lg:block'>
                <ul className='mt-16 w-max'>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </nav>
            </div>
            <ul className='ml-1 mt-8 flex items-center'>
              <li className='mr-4'> Test 1 </li>
              <li className='mr-4'> Test 2 </li>
              <li className='mr-4'> Test 3 </li>
            </ul>
          </header>
          <main className='pt-24 lg:w-1/2 lg:py-24'>
            {/* Right side */}
            <p className='text-4xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              explicabo minima dolore error animi molestiae quam consequuntur
              veniam, vel eum facilis neque vero saepe, placeat ab earum
              excepturi ratione? Voluptas earum doloribus repudiandae hic
              placeat atque! Beatae eos facere, deleniti optio et sit cum ut
              similique tenetur maxime quos, nesciunt sapiente! Accusamus
              praesentium, ducimus laboriosam atque veniam cum enim
              exercitationem suscipit voluptas fuga esse deserunt. Deserunt
              similique molestiae dolore. Reprehenderit suscipit itaque fuga,
              ducimus cupiditate cum cumque quas autem mollitia iusto, deserunt
              voluptates placeat labore pariatur, esse in nisi! Id fugiat amet
              aut ab perspiciatis quis non quaerat? Rem, asperiores.
            </p>
          </main>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
