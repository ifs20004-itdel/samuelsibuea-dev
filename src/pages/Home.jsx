import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import cloud from "/homepage/clouds.png";
import cloud1 from "/homepage/cloud1.png";
import cloud2 from "/homepage/cloud2.png";
import cloud3 from "/homepage/cloud3.png";
import cloud4 from "/homepage/cloud4.png";
import mountain from "/homepage/mountain.png";
import fog from "/homepage/fog.png";

const Home = () => {
  return (
    <div>
      <Parallax
        pages={3}
        className="bg-gradient-to-b from-sky-800 to-sky-100 text-white"
      >
        <ParallaxLayer offset={0} speed={-0.25} className="z-0">
          <img src={cloud} className="opacity-30" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={-0.1} className="z-10 min-w-full">
          <img
            src={mountain}
            className="absolute bottom-0 min-w-full scale-110 "
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.4} speed={-0.6} className="z-10 align-middle">
          <h1 className="text-5xl font-bold text-center font-wicked">
            Welcome, fellow developer{" "}
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
          <img src={cloud4} width={150} className="absolute top-52 left-3/4 " />
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
          className="bg-gradient-to-t from-sky-800"
        >
          <div className="text-center font-bold text-3xl">
            <h1 className="text-7xl px-52 py-14 font-poppins">
              Samuel Immanuel Herlinton Sibuea
            </h1>
            <p>Software Engineer</p>
            <p className="font-wicked p-10">Content are under maintenance !</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
