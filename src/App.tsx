import ParticleBackground from "./components/particleBackground";
import { ThemeContextProvider } from "./contexts/themeContext";
import { MarkdownRenderer } from "./components/markdownRenderer";
import { CircularPhotoDisplay } from "./threeFiber/reusable/circularPhotoDisplay";
import { Projects } from "./components/projects";

function App() {
  return (
    <ThemeContextProvider>
      <ParticleBackground />
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0'>
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
          <main className='pt-24 lg:w-1/2lg:py-24'>
            {/* Right side */}
            <Projects />
          </main>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
