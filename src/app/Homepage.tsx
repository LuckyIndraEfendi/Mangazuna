import NavLink from "@/components/navlink/NavLink";
import Image from "next/image";
import Carousel from "@/components/swiper/Carousel";
import Welcome from "./Welcome";
import Navbar from "@/components/Navbar";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="w-[90%] sm:w-95% m-auto">
        <section id="carousel" className="sm:px-10 px-3 mt-12 sm:mt-20 ">
          <div className="sm:grid sm:grid-cols-4 gap-10">
            <div className="info sm:col-span-3 py-3 sm:mt-5">
              <div className="title">
                <h1 className="text-white font-noto-sans text-2xl sm:text-4xl ">
                  Ore no Ie ga Maryoku Spot Datta Ken: Sundeiru dake de Sekai
                  Saikyou
                </h1>
                <p className="mt-5 text-white font-medium font-open-sans w-full text-sm sm:text-base sm:w-[80%]">
                  Hidup riang di rumah adalah cara pintas terbesar — rumah saya
                  adalah Tempat Daya Ajaib terbesar di dunia. Itulah yang
                  terjadi, baik rumah saya dan saya dipanggil ke dunia lain oleh
                  beberapa orang yang membidiknya. Namun, saya telah tinggal di
                  tempat ini selama bertahun-tahun dan tubuh saya, tampaknya,
                  terlalu meluap dengan sihir. Karena keadaan yang tak terduga
                  oleh orang-orang yang memanggilku, mereka dengan cepat
                  melarikan diri. Meskipun begitu, masih ada beberapa orang yang
                  tidak sopan yang mengingini sihir yang bocor keluar dari
                  rumahku. Saya tidak akan menyerahkan rumah saya kepada
                  orang-orang itu! Saya akan menggunakan kekuatan saya sesuka
                  saya!
                </p>

                <NavLink href="/manga/ore-no-ie-ga-maryoku-spot-datta-ken-sundeiru-dake-de-sekai-saikyou">
                  <button className="text-white px-4 py-2 text-sm  rounded-sm ring-1 ring-[#FF7F57] mt-8 flex items-center gap-3 font-montserrat font-medium sm:text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>

                    <span className="dark:text-white text-zinc-950">
                      Read Now
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="sm:col-span-1 hidden sm:block">
              <div className="images ">
                <Image
                  src="https://i0.wp.com/www.maid.my.id/wp-content/uploads/2018/07/e1d0db35-b6fb-4a5f-bf6b-127cd8758324.jpg"
                  alt="test"
                  width={150}
                  height={150}
                  referrerPolicy="no-referrer"
                  className="w-full rounded-lg rotate-3 h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="welcome" className="sm:mt-10 mt-6">
          <div className="title">
            <Welcome />
          </div>
        </section>

        <section id="popular" className="sm:mt-10 mt-6">
          <div className="flex justify-between">
            <div className="title">
              <h1 className="text-lg font-noto-sans sm:text-2xl text-white">
                Project Updated
              </h1>
            </div>
          </div>

          <div id="carousel" className="sm:mt-8 mt-5">
            <Carousel apiPath="/api/mangazuna/projectupdated" />
          </div>
        </section>

        <section id="popular" className="sm:mt-10 mt-6">
          <div className="flex justify-between">
            <div className="title">
              <h1 className="text-lg font-noto-sans sm:text-2xl text-white">
                Latest Updated
              </h1>
            </div>

            <div className="">
              <NavLink
                href="/latestupdated"
                className="text-white font-karla text-base sm:text-lg flex items-center gap-3 hover:gap-4 duration-200 hover:text-yellow-300"
              >
                <span>View More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </NavLink>
            </div>
          </div>

          <div id="carousel" className="sm:mt-8 mt-5">
            <Carousel apiPath="/api/mangazuna/lastupdated?page=2" />
          </div>
        </section>

        <section id="trending" className="sm:mt-10 mt-6">
          <div className="flex justify-between ">
            <div className="title">
              <h1 className="text-lg font-noto-sans sm:text-2xl flex items-center gap-3 text-white">
                <span>Trending Manhua</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-orange-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
              </h1>
            </div>
            <div className="">
              <NavLink
                href="/manhua"
                className="text-white font-karla text-base sm:text-lg flex items-center gap-3 hover:gap-4 duration-200 hover:text-yellow-300"
              >
                <span>View More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </NavLink>
            </div>
          </div>

          <div id="carousel" className="sm:mt-8 mt-5">
            <Carousel apiPath="/api/mangazuna/advsearch?type=Manhua" />
          </div>
        </section>

        <section id="manhwa-popular" className="sm:mt-10 mt-6 mb-36">
          <div className="flex justify-between">
            <div className="title">
              <h1 className="text-lg font-noto-sans sm:text-2xl text-white">
                Manhwa Popular
              </h1>
            </div>
            <div className="">
              <NavLink
                href="/manhwa"
                className="text-white font-karla text-base sm:text-lg flex items-center gap-3 hover:gap-4 duration-200 hover:text-yellow-300"
              >
                <span>View More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </NavLink>
            </div>
          </div>

          <div id="carousel" className="sm:mt-8 mt-5">
            <Carousel apiPath="/api/mangazuna/advsearch?type=Manhwa" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
