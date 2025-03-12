import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import NavigationBarItem from "../components/NavigationBarItem/NavigationBarItem.jsx";
import cloud from "/images/homepage/clouds.png";
import cloud1 from "/images/homepage/cloud1.png";
import cloud2 from "/images/homepage/cloud2.png";
import cloud3 from "/images/homepage/cloud3.png";
import cloud4 from "/images/homepage/cloud4.png";
import mountain from "/images/homepage/mountain.png";
import fog from "/images/homepage/fog.png";
import Subtitle from "../components/Subtitle/Subtitle";
import certificateList from "../data/certificateList";
import certificateEventList from "../data/certificateEventList";
import achievementList from "../data/achievementList";
import projectList from "../data/projectList.jsx";
import expLogoList from "../data/experiencesLogoList.jsx";
import * as constant from "../constant/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import Footer from "../components/Footer/Footer.jsx";
import { FaAngleDoubleDown } from "react-icons/fa";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { IoLogoDiscord } from "react-icons/io5";

const Home = () => {
  const color = [
    "bg-blue-500",
    "bg-green-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-amber-500",
  ];
  return (
    <div>
      {/* Mobile Display */}
      <div className="block md:hidden bg-gradient-to-b from-sky-800 to-sky-100 text-white h-screen relative">
        <div className="absolute inset-0 z-10">
          <img
            src={mountain}
            alt="Mountain"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src={cloud}
            alt="Cloud"
            className="w-full h-1/2 object-cover opacity-70"
          />
        </div>
        <div className="absolute top-40 z-20 w-full">
          <img src={fog} alt="Fog Layer 1" className="w-full opacity-50" />
        </div>
        <div className="absolute bottom-0 z-20 w-full">
          <img src={fog} alt="Fog Layer 2" className="w-full" />
        </div>
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center font-poppins">
          <h1 className="text-3xl font-bold text-center font-wicked py-2">
            Welcome, fellow developer
          </h1>
          <h2 className="text-xl font-semibold mt-2 ">
            Samuel Immanuel Herlinton Sibuea
          </h2>
          <a
            href="./about"
            className="text-base m-5 py-2 px-4 bg-sky-700 rounded-xl shadow-2xl font-semibold"
          >
            About Me
          </a>
          <p className="w-3/4 text-white bg-sky-900 shadow-xl text-center rounded-lg p-3">
            Check out my latest progression in this exciting tech journey!
          </p>
          <FaAngleDoubleDown className="m-5 animate-bounce" size={30} />
          <div className="grid grid-cols-2 gap-5 text-center font-bold">
            <a
              className="bg-gradient-to-tr from-sky-600 to-sky-900 p-2 rounded-lg shadow-2xl"
              href="./achievement"
            >
              Achievement
            </a>
            <a
              className="bg-gradient-to-tr from-sky-600 to-sky-900 p-2 rounded-lg shadow-2xl"
              href="./experience"
            >
              Experience
            </a>
            <a
              className="bg-gradient-to-tr from-sky-600 to-sky-900 p-2 rounded-lg shadow-2xl"
              href="./projects"
            >
              Projects
            </a>
            <a
              className="bg-gradient-to-tr from-sky-600 to-sky-900 p-2 rounded-lg shadow-2xl"
              onClick={() => window.open("pdf/CV_latest.pdf","_blank")}
            >
              Resume
            </a>
          </div>
          <div className="absolute bottom-10 z-30">
            <ul className="flex flex-row list-none gap-x-5">
              <li>
                <a href="https://www.instagram.com/samuelsibuea_1">
                  <IoLogoInstagram size={30} color="black" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/samuel-sibuea">
                  <IoLogoLinkedin size={30} color="black" />
                </a>
              </li>
              <li>
                <a href="https://github.com/ifs20004-itdel">
                  <IoLogoGithub size={30} color="black" />
                </a>
              </li>
              <li>
                <a href="https://discordapp.com/users/703608800296304691">
                  <IoLogoDiscord size={30} color="black" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop Display */}
      <Parallax
        pages={4.5}
        className="hidden md:block bg-gradient-to-b from-sky-800 to-sky-100 text-white"
      >
        {/* Background mountain and cloud */}
        <ParallaxLayer offset={0} speed={-0.4} className="z-0 overflow-hidden">
          <img src={cloud} className="opacity-30" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={-0.2} className="z-10">
          <img
            src={mountain}
            className="absolute bottom-0 min-w-full scale-100"
          />
        </ParallaxLayer>

        {/* Page 3-5 bg*/}
        <ParallaxLayer
          offset={2}
          factor={3}
          speed={0}
          className="bg-gradient-to-t from-blue-700 z-0"
        />

        {/* Welcome Dev message */}
        <ParallaxLayer offset={0.3} speed={-0.3} className="z-10 align-middle">
          <h1 className="text-5xl font-bold text-center font-wicked">
            Welcome, fellow developer
          </h1>
        </ParallaxLayer>

        {/* Fog Layer */}
        <ParallaxLayer offset={0.8} speed={-0.1} className="z-10 opacity-90">
          <img src={fog} alt="fog" className="flex min-w-full" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={-0.1} className="z-10 opacity-90">
          <img src={fog} alt="fog" className="flex min-w-full" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={-0.1} className="z-10 opacity-90">
          <img src={fog} alt="fog" className="min-w-full" />
        </ParallaxLayer>

        {/* Slide-right clouds */}
        <ParallaxLayer
          offset={0}
          factor={1}
          speed={-0.4}
          horizontal
          className="z-20 min-w-full speed speed-fast"
        >
          <img src={cloud1} className="absolute top-12  w-[250px] right-1/4 " />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={-0.5}
          horizontal
          className="flex z-20 min-w-full speed speed-fast"
        >
          <img src={cloud3} width={450} className="absolute top-72 left-2/4 " />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={-0.5}
          horizontal
          className="flex z-20 min-w-full speed speed-slow"
        >
          <img src={cloud4} width={150} className="absolute top-64 right-36 " />
        </ParallaxLayer>

        {/* 
          Slide-left clouds
        */}
        <ParallaxLayer
          offset={0}
          speed={0.4}
          horizontal
          className="flex z-20 min-w-full speed speed-slow"
        >
          <img src={cloud2} width={250} className="absolute top-5 left-1/4" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1}
          horizontal
          className="z-20 min-w-full speed speed-medium"
        >
          <img src={cloud4} className="absolute top-32 left-24 w-[250px]" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.5}
          horizontal
          className="z-20 min-w-full speed speed-fast"
        >
          <img src={cloud1} className="absolute top-64 w-[250px] left-1/4" />
        </ParallaxLayer>

        {/* Content page 3 */}
        <ParallaxLayer offset={2} speed={0.5} className="z-20">
          <div className="text-center text-3xl font-wicked">
            <h1 className="text-6xl px-52 pt-14 pb-5">
              Samuel Immanuel Herlinton Sibuea
            </h1>
            <p className="tracking-wider">Software Engineer</p>
          </div>
          <div className="flex flex-row w-3/4 pt-16 pb-6 m-auto gap-x-14 text-justify font-poppins">
            <div className="w-1/2">
              <p>
                I'm a Software Engineer with a strong passion for competition, a
                keen sense of problem-solving, and a commitment to continuous
                learning. I specialize in Backend and Cloud Engineering and have
                a growing interest in Android Development, along with some
                foundational knowledge in Technopreneurship.
              </p>
              <a
                type="button"
                href="./about"
                className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br py-2 px-3 my-3 shadow-lg rounded-lg"
              >
                About me
              </a>
            </div>
            <div className="w-1/2">
              <div className="pb-5">
                <Subtitle title="Skills" />
                <div className="font-bold text-sm flex px-2 pt-3">
                  <div className="tag">JAVA</div>
                  <div className="tag">GOLANG</div>
                  <div className="tag">KOTLIN</div>
                  <div className="tag">REACT JS</div>
                  <div className="tag">SPRING BOOT</div>
                  <div className="tag">My SQL</div>
                </div>
                <div className="font-bold text-sm flex px-2 py-3">
                  <div className="tag">REDIS</div>
                  <div className="tag">MONGODB</div>
                  <div className="tag">KOTLIN</div>
                  <div className="tag">ANDROID</div>
                </div>
              </div>
              <div>
                <Subtitle title="Tools" />
                <div className="font-bold text-sm flex px-2 py-3">
                  <div className="tag">VS CODE</div>
                  <div className="tag">GIT</div>
                  <div className="tag">IntelliJ IDEA</div>
                  <div className="tag">POSTMAN</div>
                  <div className="tag">DOCKER</div>
                  <div className="tag">JIRA</div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Content page 4 */}
        <ParallaxLayer offset={2.9} speed={0.3} factor={1} className="z-20">
          <div className="flex flex-row gap-x-2 w-11/12 mx-auto rounded-3xl z-20 font-poppins">
            <div className=" w-2/4 p-12 bg-gradient-to-r from-sky-900 via-sky-800 to-sky-700 shadow-2xl rounded-3xl">
              <h1 className="font-wicked text-5xl py-3">Discover More</h1>
              <p>
                Check out my latest progression in this exciting tech journey!
                Explore my portfolio to see my projects that showcase my
                expertise in cutting-edge frameworks. Your thoughts and feedback
                are always welcome!
              </p>
              <div className="flex flex-row text-center py-10">
                <div className="w-1/4 m-auto">
                  <NavigationBarItem
                    title="Experience"
                    image="/images/homepage/experience.png"
                    toLink="./experience"
                  />
                </div>
                <div className="w-1/4 m-auto ">
                  <NavigationBarItem
                    title="Achievement"
                    image="/images/homepage/achievement.png"
                    toLink="./achievement"
                  />
                </div>
                <div className="w-1/4 m-auto ">
                  <NavigationBarItem
                    title="Project"
                    image="/images/homepage/projects.png"
                    toLink="./projects"
                  />
                </div>
              </div>
            </div>
            <div className="w-2/4 m-auto">
              <Swiper
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                draggable={true}
                grabCursor={true}
                slidesPerView={1}
                loop={true}
                modules={[Navigation, Pagination]}
                className="bg-sky-100 h-[450px] my-2 rounded-xl py-3 text-2xl tracking-wider "
              >
                <SwiperSlide>
                  <div className="content-center">
                    <h2 className="font-wicked text-center text-black py-5">
                      Achievement
                    </h2>
                    <div className="grid grid-cols-2 grid-rows-2 w-5/6 m-auto gap-y-2">
                      <div>
                        <Swiper
                          pagination={{ clickable: true }}
                          effect={"creative"}
                          creativeEffect={{
                            prev: {
                              shadow: false,
                              translate: [0, 0, -400],
                            },
                            next: {
                              translate: ["100%", 0, 0],
                            },
                          }}
                          modules={[EffectCreative, Pagination]}
                          loop={true}
                        >
                          {certificateList.map((item, idx) =>
                            idx < 5 ? (
                              <SwiperSlide key={idx}>
                                <img
                                  loading="lazy"
                                  src={item.image}
                                  alt={item.title}
                                  className="h-full m-auto object-fill"
                                  width={220}
                                />
                              </SwiperSlide>
                            ) : null
                          )}
                        </Swiper>
                      </div>
                      <div>
                        <Swiper
                          pagination={{ clickable: true }}
                          effect={"creative"}
                          creativeEffect={{
                            prev: {
                              shadow: false,
                              translate: [0, 0, -400],
                            },
                            next: {
                              translate: ["100%", 0, 0],
                            },
                          }}
                          modules={[EffectCreative, Pagination]}
                          loop={true}
                        >
                          {certificateEventList.map((item, idx) => (
                            <SwiperSlide key={idx}>
                              <img
                                loading="lazy"
                                src={item.image}
                                alt={item.title}
                                className="h-full m-auto object-fill"
                                width={220}
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                      <div>
                        <Swiper
                          pagination={{ clickable: true }}
                          effect={"creative"}
                          creativeEffect={{
                            prev: {
                              shadow: false,
                              translate: [0, 0, -400],
                            },
                            next: {
                              translate: ["100%", 0, 0],
                            },
                          }}
                          modules={[EffectCreative, Pagination]}
                          loop={true}
                        >
                          {achievementList
                            .filter((item) => item.type === constant.ICPC)
                            .map((item, idx) => (
                              <SwiperSlide key={idx}>
                                <img
                                  loading="lazy"
                                  src={item.image}
                                  alt={item.title}
                                  className="h-full m-auto object-fill"
                                  width={220}
                                />
                              </SwiperSlide>
                            ))}
                        </Swiper>
                      </div>
                      <div>
                        <Swiper
                          pagination={{ clickable: true }}
                          effect={"creative"}
                          creativeEffect={{
                            prev: {
                              shadow: false,
                              translate: [0, 0, -400],
                            },
                            next: {
                              translate: ["100%", 0, 0],
                            },
                          }}
                          modules={[EffectCreative, Pagination]}
                          loop={true}
                        >
                          {achievementList
                            .filter((item) => item.type === constant.IT)
                            .map((item, idx) => (
                              <SwiperSlide key={idx}>
                                <img
                                  loading="lazy"
                                  src={item.image}
                                  alt={item.title}
                                  className="h-full m-auto object-fill"
                                  width={220}
                                />
                              </SwiperSlide>
                            ))}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="content-center">
                    <h2 className="font-wicked text-center text-black py-5">
                      Project
                    </h2>
                    <div>
                      <Swiper
                        slidesPerView={1}
                        loop={true}
                        spaceBetween={20}
                        className="w-3/4"
                        autoplay={{
                          delay: 3500,
                          disableOnInteraction: false,
                        }}
                        pagination={{
                          clickable:true,
                        }}
                        modules={[Autoplay, Pagination]}
                      >
                        {projectList.map((item, i) => (
                          <SwiperSlide
                            key={i}
                            className={`text-white ${color[i]}  rounded-3xl shadow-md p-5 min-h-[300px]`}
                          >
                            <div className="flex flex-col gap-y-5">
                              <h2 className="font-wicked text-sm text-center">
                                {item.title}
                              </h2>
                             
                              <div className="flex items-center justify-center">
                                <img
                                  loading="lazy"
                                  src={item.image}
                                  alt={item.title}
                                  width={220}
                                />
      
                              </div>
                              <p className=" text-xs font-normal text-justify w-3/4 m-auto">
                                  {item.description}
                              </p>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="content-center w-5/6 m-auto ">
                    <h2 className="font-wicked text-center text-black py-5">
                      Experience
                    </h2>
                    <div className="grid grid-cols-3 gap-5 items-center py-5 px-10">
                      {expLogoList.map((items, i) => (
                        <img
                          loading="lazy"
                          key={i}
                          src={items.url}
                          width={items.width}
                          className="hover:scale-125"
                        />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.5}>
          <img
            src="/images/homepage/footer.png"
            alt=""
            className="w-full opacity-75"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.5}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
