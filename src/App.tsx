import { useRef, useState } from "react";
import logoInvertenIcon from "./assets/logo-inverted.png";
import heroImage from "./assets/hero.jpg";
import LogoImage from "./assets/logo.png";
import band1 from "./assets/band1.jpg";
import band2 from "./assets/band2.jpg";
import band3 from "./assets/band3.jpg";
import band4 from "./assets/band4.jpg";
import band5 from "./assets/band5.jpg";
import band6 from "./assets/band6.jpg";
import band7 from "./assets/band7.jpg";
import AngleLeftIcon from "./assets/angle-left.tsx";
import AngleRightIcon from "./assets/angle-right.tsx";
import SunIcon from "./assets/sun.tsx";
import MoonIcon from "./assets/moon.tsx";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTktSubMenuOpen, setMobileTktSubMenuOpen] = useState(false);
  const carouselEle = useRef<HTMLDivElement>(null);
  const initTheme = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
  const darkMode = useRef(initTheme);

  const setTheme = (isDark: boolean) => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  setTheme(darkMode.current);
  const toggleDarkMode = () => {
    darkMode.current = !darkMode.current;
    setTheme(darkMode.current);
  };

  const scrollHeadlinerCarousel = (isRight: boolean) => {
    if (carouselEle.current && carouselEle.current.hasChildNodes()) {
      if (isRight)
        carouselEle.current.scrollLeft +=
          carouselEle.current.children[0].getBoundingClientRect().width;
      else
        carouselEle.current.scrollLeft -=
          carouselEle.current.children[0].getBoundingClientRect().width;
    }
  };

  return (
    <main className="text-zinc-900 bg-white dark:text-zinc-200 dark:bg-zinc-900">
      <header className="text-pink-100">
        <div
          onClick={toggleDarkMode}
          className="fixed z-20 top-24 right-0 p-2 text-3xl inline-block w-12 rounded-l-lg cursor-pointer bg-zinc-900 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-900"
        >
          <SunIcon className="size-8 hidden dark:block" />
          <MoonIcon className="size-8 block dark:hidden" />
        </div>
        <nav className="sticky top-0 flex z-10 bg-gradient-to-r from-rose-500 to-pink-500">
          <div className="flex items-center p-2">
            <img src={logoInvertenIcon} width={50} />
            <div className="font-bold text-2xl">
              tw:<span className="text-sky-900">mf</span>
            </div>
          </div>
          <div className="block md:hidden my-auto ml-auto cursor-pointer pr-4 group">
            <div
              className={"group peer" + (mobileMenuOpen ? " open" : "")}
              onClick={() => setMobileMenuOpen((s) => !s)}
            >
              <div className="bg-zinc-200 rounded-full w-8 h-1 my-1 group-open:rotate-45 group-open:translate-y-2 transition-all"></div>
              <div className="bg-zinc-200 rounded-full w-8 h-1 my-1 group-open:opacity-0 transition-all"></div>
              <div className="bg-zinc-200 rounded-full w-8 h-1 my-1 group-open:-rotate-45 group-open:-translate-y-2 transition-all"></div>
            </div>
            <div className="hidden peer-open:block absolute left-0 top-[62px] w-full bg-gradient-to-r from-rose-500 to-pink-500">
              <div className="relative flex h-full justify-center items-center p-4 font-bold cursor-pointer text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
                <span>Home</span>
              </div>
              <div className="relative flex h-full justify-center items-center p-4 font-bold cursor-pointer text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
                <span>Lineup</span>
              </div>
              <div
                className={
                  "group relative h-full cursor-pointer text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out" +
                  (mobileTktSubMenuOpen ? " open" : "")
                }
                onClick={() => setMobileTktSubMenuOpen((s) => !s)}
              >
                <div className="p-4 text-center font-bold">Tickets</div>
                <div className="hidden group-open:block">
                  <div className="relative text-center p-4 text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                    <span>Single Day Ticket</span>
                  </div>
                  <div className="relative text-center p-4 text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                    <span>7 Day Ticket</span>
                  </div>
                </div>
              </div>
              <div className="relative flex h-full justify-center items-center p-4 font-bold cursor-pointer text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
                <span>Support</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-1 items-center justify-end">
            <div className="navbar-item">
              <span>Home</span>
            </div>
            <div className="navbar-item">
              <span>LineUp</span>
            </div>
            <div className="navbar-item group">
              <span>Tickets</span>
              <div className="absolute hidden top-full right-0 whitespace-nowrap bg-pink-500 rounded-b-2xl group-hover:block">
                <div className="p-4 font-bold cursor-pointer text-pink-200 hover:bg-white/50 hover:text-zinc-200 transition-colors ease-in-out">
                  <span>Single Day Ticket</span>
                </div>
                <div className="p-4 font-bold cursor-pointer text-pink-200 hover:bg-white/50 hover:text-zinc-200 transition-colors ease-in-out">
                  <span>7 Day Ticket</span>
                </div>
              </div>
            </div>
            <div className="navbar-item">
              <span>Support</span>
            </div>
          </div>
        </nav>
        <div
          style={{ backgroundImage: `url(${heroImage})` }}
          className="flex flex-col items-center justify-center h-[calc(100vh-200px)] min-h-[400px] bg-cover bg-center bg-fixed"
        >
          <div className="text-center rounded-xl py-2 px-4 bg-white/30 backdrop-blur-md">
            <div className="relative">
              <img src={LogoImage} width={175} />
              <div className="flex items-center justify-center mt-[-70px] mb-5">
                <div className="flex w-14 h-14 items-center justify-center gap-1 bg-pink-500 rounded-full">
                  <div className="w-1 h-2 bg-pink-300 rounded-full animate-wavey"></div>
                  <div className="w-1 h-3 bg-pink-200 rounded-full animate-wavey animation-delay-400"></div>
                  <div className="w-1 h-4 bg-pink-100 rounded-full animate-wavey animation-delay-200"></div>
                  <div className="w-1 h-3 bg-pink-200 rounded-full animate-wavey animation-delay-400"></div>
                  <div className="w-1 h-2 bg-pink-300 rounded-full animate-wavey animation-delay-100"></div>
                </div>
              </div>
            </div>
            <div className="text-5xl font-bold">
              tw:<span className="text-sky-900">mf</span>
            </div>
          </div>
          <div className="font-bold text-sm mt-3">
            Keep me updated with news and promotions
          </div>
          <form className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="rounded-sm border p-2 font-bold border-white/40 bg-white/30 backdrop-blur-2xl text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500 focus:outline"
            />
            <button className="cursor-pointer rounded-sm bg-pink-500 font-bold py-2 px-4 hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </header>
      <section className="mx-auto mt-20 container">
        <h2 className="">
          <span className="text-transparent bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text">
            Headliners
          </span>
        </h2>
        <p>
          Experience the sonic delight from these made up artists across 7 days
          that music fans are calling "one of that many gigs that will happen
          this year"
        </p>
        <div className="flex">
          <div
            className="hidden md:flex items-center justify-center p-2 cursor-pointer relative -top-8"
            onClick={() => scrollHeadlinerCarousel(false)}
          >
            <AngleLeftIcon className="size-16" />
          </div>
          <div className="w-full">
            <div
              ref={carouselEle}
              className="flex flex-1 gap-4 w-full mt-4 pb-5 overflow-x-auto scroll-smooth snap-x"
            >
              <div className="min-w-[80%] md:min-w-[40%]">
                <div
                  style={{ backgroundImage: `url(${band1})` }}
                  className="h-80 w-full snap-center rounded-2xl bg-cover bg-center shadow-md shadow-black/20"
                ></div>
                <h5 className="mt-5">Corduroy Gary</h5>
                <h6>1st July 9PM - Main Stage</h6>
              </div>
              <div className="min-w-[80%] md:min-w-[40%]">
                <div
                  style={{ backgroundImage: `url(${band2})` }}
                  className="h-80 w-full snap-center rounded-2xl bg-cover bg-center shadow-md shadow-black/20"
                ></div>
                <h5 className="mt-5">Corduroy Gary</h5>
                <h6>1st July 9PM - Main Stage</h6>
              </div>
              <div className="min-w-[80%] md:min-w-[40%]">
                <div
                  style={{ backgroundImage: `url(${band3})` }}
                  className="h-80 w-full snap-center rounded-2xl bg-cover bg-center shadow-md shadow-black/20"
                ></div>
                <h5 className="mt-5">Corduroy Gary</h5>
                <h6>1st July 9PM - Main Stage</h6>
              </div>
              <div className="min-w-[80%] md:min-w-[40%]">
                <div
                  style={{ backgroundImage: `url(${band4})` }}
                  className="h-80 w-full snap-center rounded-2xl bg-cover bg-center shadow-md shadow-black/20"
                ></div>
                <h5 className="mt-5">Corduroy Gary</h5>
                <h6>1st July 9PM - Main Stage</h6>
              </div>
              <div className="min-w-[80%] md:min-w-[40%]">
                <div
                  style={{ backgroundImage: `url(${band5})` }}
                  className="h-80 w-full snap-center rounded-2xl bg-cover bg-center shadow-md shadow-black/20"
                ></div>
                <h5 className="mt-5">Corduroy Gary</h5>
                <h6>1st July 9PM - Main Stage</h6>
              </div>
              <div className="min-w-[80%] md:min-w-[40%]">
                <div
                  style={{ backgroundImage: `url(${band6})` }}
                  className="h-80 w-full snap-center rounded-2xl bg-cover bg-center shadow-md shadow-black/20"
                ></div>
                <h5 className="mt-5">Corduroy Gary</h5>
                <h6>1st July 9PM - Main Stage</h6>
              </div>
              <div className="min-w-[80%] md:min-w-[40%]">
                <div
                  style={{ backgroundImage: `url(${band7})` }}
                  className="h-80 w-full snap-center rounded-2xl bg-cover bg-center shadow-md shadow-black/20"
                ></div>
                <h5 className="mt-5">Corduroy Gary</h5>
                <h6>1st July 9PM - Main Stage</h6>
              </div>
            </div>
          </div>
          <div
            className="hidden md:flex items-center justify-center p-2 cursor-pointer relative -top-8"
            onClick={() => scrollHeadlinerCarousel(true)}
          >
            <AngleRightIcon className="size-16" />
          </div>
        </div>
      </section>
      <section className="mx-auto mt-20 max-w-screen-lg">
        <h2>LineUp</h2>
        <p>
          Follow the timetable and stage to ensure you don't miss your favourite
          performance
        </p>
        <div className="relative mt-5 bg-zinc-800 text-zinc-200 py-4 px-2 rounded-lg">
          <div className="absolute top-0 left-1/2 w-4 h-full -ml-[8px] rounded-full bg-gradient-to-b  from-teal-900 via-cyan-900 to-sky-900">
            <div className="sticky top-1/3">
              <div className="relative w-4 h-4">
                <div className="absolute w-4 h-4 bg-pink-500 rounded-full animate-ping opacity-75"></div>
                <div className=" w-4 h-4 rounded-full bg-rose-500"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-2 rounded-lg my-4">1st July</div>
            <div></div>
            <div className="text-right">
              <div className="font-bold">Jackie Chatson</div>
              <div className="text-zinc-400">6pm - Sage Stage</div>
            </div>
            <div></div>
            <div></div>
            <div className="">
              <div className="font-bold">Jackie Chatson</div>
              <div className="text-zinc-400">6pm - Sage Stage</div>
            </div>
            <div className="bg-zinc-900 p-2 rounded-lg my-4">1st July</div>
            <div></div>
            <div className="text-right">
              <div className="font-bold">Jackie Chatson</div>
              <div className="text-zinc-400">6pm - Sage Stage</div>
            </div>
            <div></div>
            <div></div>
            <div className="">
              <div className="font-bold">Jackie Chatson</div>
              <div className="text-zinc-400">6pm - Sage Stage</div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-20 @container">
        <h2>Tickets</h2>
        <table className="mt-5 table w-full border border-zinc-500 border-collapse">
          <thead>
            <td className="text-lg font-bold p-3">Ticket</td>
            <td className="text-lg font-bold p-3">Price</td>
            <td className="w-[150px] @max-xl:hidden">Act</td>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-500 py-2 px-3">
                Single Day Ticket
              </td>
              <td className="border border-zinc-500 py-2 px-3">$60</td>
              <td className="border border-zinc-500 py-2 px-3 @max-xl:hidden">
                <button className="p-2 bg-pink-500 cursor-pointer text-zinc-200 rounded-md">
                  Buy Now
                </button>
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-500 py-2 px-3">7 Day Ticket</td>
              <td className="border border-zinc-500 py-2 px-3">$200</td>
              <td className="border border-zinc-500 py-2 px-3 @max-xl:hidden">
                <button className="p-2 bg-pink-500 cursor-pointer text-zinc-200 rounded-md">
                  Buy Now
                </button>
              </td>
            </tr>
          </tbody>
          <caption className="caption-bottom">
            Once they're Gone, they're gone!
          </caption>
        </table>
      </section>
    </main>
  );
}

export default App;
