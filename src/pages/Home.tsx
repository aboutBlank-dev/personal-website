import { About } from "../components/about";
import { Experience } from "../components/experience";
import { NavBar } from "../components/navbar";
import ParticleBackground from "../components/particleBackground";
import { Projects } from "../components/projects";
import { Socials } from "../components/socials";
import { ThemeContextProvider } from "../contexts/themeContext";
import { CircularPhotoDisplay } from "../threeFiber/reusable/circularPhotoDisplay";
import JoseImage from "../assets/Photo_Jose.png";

export const Home = () => {
  return (
    <ThemeContextProvider>
      <ParticleBackground />
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
            {/* Left Side */}
            <div>
              <div className='h-60 w-60'>
                <CircularPhotoDisplay photoUrl={JoseImage} />
              </div>
              <h1 className='text-4xl font-bold text-slate-200'>José Colaco</h1>
              <h2 className='text-lg mt-3'> Junior Developer </h2>
              <p className='mt-3'> I Try to do things... I don't know... </p>
              <NavBar />
            </div>
            <Socials />
          </header>
          <main className='pt-16 lg:w-1/2 lg:py-24'>
            {/* Right side */}
            <About />
            <Experience />
            <Projects />
            {/* Contact me ? */}
          </main>
        </div>
      </div>
    </ThemeContextProvider>
  );
};
