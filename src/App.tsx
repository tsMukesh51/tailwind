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

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTktSubMenuOpen, setMobileTktSubMenuOpen] = useState(false);
  const carouselEle = useRef<HTMLDivElement>(null);
  const scrollHeadlinerCarousel = (isRight: boolean) => {
    if (carouselEle.current && carouselEle.current.hasChildNodes()) {
      if (isRight)
        carouselEle.current.scrollLeft += carouselEle.current.children[0].getBoundingClientRect().width;
      else
        carouselEle.current.scrollLeft -= carouselEle.current.children[0].getBoundingClientRect().width;
    }
  }

  return (
    <>
      <header className="text-pink-100">
        <nav className="sticky top-0 flex bg-gradient-to-r from-rose-500 to-pink-500">
          <div className="flex items-center p-2">
            <img src={logoInvertenIcon} width={50} />
            <div className="font-bold text-2xl">
              tw:<span className="text-sky-900">mf</span>
            </div>
          </div>
          <div className="block md:hidden my-auto ml-auto cursor-pointer pr-4 group">
            <div className={"group peer" + (mobileMenuOpen ? " open" : "")} onClick={() => setMobileMenuOpen((s) => !s)}>
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
              <div className={"group relative h-full cursor-pointer text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out" + (mobileTktSubMenuOpen ? " open" : "")} onClick={() => setMobileTktSubMenuOpen((s) => !s)}>
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
            <div className="navbar-item"><span>Home</span></div>
            <div className="navbar-item"><span>LineUp</span></div>
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
            <div className="navbar-item"><span>Support</span></div>
          </div>
        </nav>
        <div style={{ backgroundImage: `url(${heroImage})` }} className="flex flex-col items-center justify-center h-[calc(100vh-200px)] min-h-[400px] bg-cover bg-center bg-fixed">
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
            <input type="email" placeholder="Email" className="rounded-sm border p-2 font-bold border-white/40 bg-white/30 backdrop-blur-2xl text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500 focus:outline" />
            <button className="cursor-pointer rounded-sm bg-pink-500 font-bold py-2 px-4 hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </header>
      <section className="mx-auto mt-20 max-w-screen-lg">
        <h2 className="">Headliners</h2>
        <p>Experience the sonic delight from these made up artists across 7 days that music fans are calling "one of that many gigs that will happen this year"</p>
        <div className="flex">
          <div className="flex items-center justify-center p-2 cursor-pointer relative -top-8" onClick={() => scrollHeadlinerCarousel(false)}>
            <AngleLeftIcon className="size-16" />
          </div>
          <div>
            <div ref={carouselEle} className="flex flex-1 gap-4 w-full mt-4 pb-5 overflow-x-auto scroll-smooth snap-x">
              <div className="min-w-[80%] md:min-w-[40%]">
                <div style={{ backgroundImage: `url(${band1})` }} className="h-80 w-full snap-center rounded-2xl bg-cover bg-center shadow-md shadow-black/20"></div>
                <h5 className="mt-5">Corduroy Gary</h5>
                <h6>1st July 9PM - Main Stage</h6>
              </div>
              <div className="min-w-[80%] md:min-w-[40%]">
                <div style={{ backgroundImage: `url(${band2})` }} className="h-80 w-full snap-center rounded-2xl bg-cover bg-center shadow-md shadow-black/20"></div>
                <h5 className="mt-5">Corduroy Gary</h5>
                <h6>1st July 9PM - Main Stage</h6>
              </div>
              <div className="min-w-[80%] md:min-w-[40%]">
                <div style={{ backgroundImage: `url(${band3})` }} className="h-80 w-full snap-center rounded-2xl bg-cover bg-center shadow-md shadow-black/20"></div>
                <h5 className="mt-5">Corduroy Gary</h5>
                <h6>1st July 9PM - Main Stage</h6>
              </div>
              <div className="min-w-[80%] md:min-w-[40%]">
                <div style={{ backgroundImage: `url(${band4})` }} className="h-80 w-full snap-center rounded-2xl bg-cover bg-center shadow-md shadow-black/20"></div>
                <h5 className="mt-5">Corduroy Gary</h5>
                <h6>1st July 9PM - Main Stage</h6>
              </div>
              <div className="min-w-[80%] md:min-w-[40%]">
                <div style={{ backgroundImage: `url(${band5})` }} className="h-80 w-full snap-center rounded-2xl bg-cover bg-center shadow-md shadow-black/20"></div>
                <h5 className="mt-5">Corduroy Gary</h5>
                <h6>1st July 9PM - Main Stage</h6>
              </div>
              <div className="min-w-[80%] md:min-w-[40%]">
                <div style={{ backgroundImage: `url(${band6})` }} className="h-80 w-full snap-center rounded-2xl bg-cover bg-center shadow-md shadow-black/20"></div>
                <h5 className="mt-5">Corduroy Gary</h5>
                <h6>1st July 9PM - Main Stage</h6>
              </div>
              <div className="min-w-[80%] md:min-w-[40%]">
                <div style={{ backgroundImage: `url(${band7})` }} className="h-80 w-full snap-center rounded-2xl bg-cover bg-center shadow-md shadow-black/20"></div>
                <h5 className="mt-5">Corduroy Gary</h5>
                <h6>1st July 9PM - Main Stage</h6>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-2 cursor-pointer relative -top-8" onClick={() => scrollHeadlinerCarousel(true)}>
            <AngleRightIcon className="size-16" />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
