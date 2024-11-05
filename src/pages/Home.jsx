import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import cloud from "/images/homepage/clouds.png";
import cloud1 from "/images/homepage/cloud1.png";
import cloud2 from "/images/homepage/cloud2.png";
import cloud3 from "/images/homepage/cloud3.png";
import cloud4 from "/images/homepage/cloud4.png";
import mountain from "/images/homepage/mountain.png";
import fog from "/images/homepage/fog.png";
import Subtitle from "../components/Subtitle/Subtitle";
import { Fab } from "react-tiny-fab";

const Home = () => {
  return (
    <div>
      <Parallax
        pages={4}
        className="bg-gradient-to-b from-sky-800 to-sky-100 text-white"
      >
        <ParallaxLayer offset={0} speed={-0.25} className="z-0">
          <img src={cloud} className="opacity-30" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={-0.1} className="z-10 min-w-full">
          {/* <ParallaxLayer offset={1} speed={-0.95} className="z-10 min-w-full"> */}
          <img
            src={mountain}
            className="absolute bottom-0 min-w-full scale-100 "
          />
        </ParallaxLayer>
        <ParallaxLayer className="z-10 min-w-full">
          <Fab
            
            alwaysShowTitle={true}
          >

          </Fab>
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={-0.6} className="z-10 align-middle">
          <h1 className="text-5xl font-bold text-center font-wicked">
            Welcome, fellow developer
          </h1>
        </ParallaxLayer>

        {/* Fog Layer */}
        <ParallaxLayer offset={0.9} className="z-10 opacity-90">
          <img src={fog} alt="fog" className="min-w-full" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} className="z-10 opacity-90">
          <img src={fog} alt="fog" className="min-w-full" />
        </ParallaxLayer>

        {/* Slide-right clouds */}
        <ParallaxLayer
          offset={0}
          factor={1}
          speed={-0.4}
          horizontal
          className="z-30 min-w-full speed speed-fast"
        >
          <img
            src={cloud1}
            width={250}
            className="absolute top-12 right-1/4 "
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={-0.5}
          horizontal
          className="z-30 min-w-full speed speed-fast"
        >
          <img src={cloud3} width={450} className="absolute top-72 left-2/4 " />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={-0.5}
          horizontal
          className="z-30 min-w-full speed speed-slow"
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
          className="z-30 min-w-full speed speed-slow"
        >
          <img src={cloud2} width={250} className="absolute top-5 left-1/4" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1}
          horizontal
          className="z-30 min-w-full speed speed-medium"
        >
          <img src={cloud4} width={250} className="absolute top-32 left-24" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.5}
          horizontal
          className="z-30 min-w-full speed speed-fast"
        >
          <img src={cloud1} width={250} className="absolute top-64 left-1/4" />
        </ParallaxLayer>

        {/* Smooth transition background color */}
        <ParallaxLayer
          offset={1}
          factor={2}
          speed={-0.1}
          className="bg-gradient-to-t from-sky-300 "
        ></ParallaxLayer>

        <ParallaxLayer
          offset={2}
          factor={1}
          speed={0.3}
          className="bg-gradient-to-t from-sky-800 z-40"
        >
          <div className="text-center text-3xl font-wicked">
            <h1 className="text-6xl px-52 pt-14 pb-5">
              Samuel Immanuel Herlinton Sibuea
            </h1>
            <p className="tracking-wider">Software Engineer</p>
          </div>
          <div className="flex flex-row w-3/4 py-16 m-auto gap-x-14 text-justify font-poppins">
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
                className="text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br py-2 px-3 my-3 shadow-lg rounded-lg"
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
      </Parallax>
    </div>
  );
};

export default Home;
