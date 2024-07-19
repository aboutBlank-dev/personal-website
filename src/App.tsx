import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import DarkModeToggle from "./components/darkmodeToggle";
import ParticleBackground from "./components/particleBackground";
import { ThemeContextProvider } from "./contexts/themeContext";
import ThreeCanvas from "./threeFiber/threeCanvas";
import { CoinWithImage } from "./threeFiber/coinWithImage";
import { RotateOnClick } from "./threeFiber/reusable/rotateOnClick";
import { LookAtMouse } from "./threeFiber/reusable/lookAtMouse";

function App() {
  const [particlesInit, setParticlesInit] = useState(false);

  //Load particles.js. This should only run once per lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setParticlesInit(true);
    });
  }, []);

  return (
    <ThemeContextProvider>
      {particlesInit && <ParticleBackground />}

      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
            {/* Left Side */}
            <div className='h-64'>
              <DarkModeToggle />
              <ThreeCanvas>
                <RotateOnClick rotationTime={0.4}>
                  <LookAtMouse>
                    <CoinWithImage imageUrl='src\assets\Photo_Jose.JPG' />
                  </LookAtMouse>
                </RotateOnClick>
              </ThreeCanvas>
            </div>
            <ul className='ml-1 mt-8 flex items-center'></ul>
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
