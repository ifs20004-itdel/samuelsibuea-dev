import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import cloud from "/homepage/clouds.png";
import cloud1 from "/homepage/cloud1.png";
import cloud2 from "/homepage/cloud2.png";
import cloud3 from "/homepage/cloud3.png";
import cloud4 from "/homepage/cloud4.png";
import mountain from "/homepage/mountain.png";

const Home = () => {
  return (
    <div>
      <Parallax pages={3} className="bg-gradient-to-b from-sky-800 to-sky-100">
        <ParallaxLayer offset={0} speed={-0.34} className="z-0">
          <img src={cloud} className="opacity-60" />
        </ParallaxLayer>

        {/* Slide-right clouds */}
        <ParallaxLayer
          offset={0}
          factor={1}
          speed={-0.4}
          horizontal
          className="z-30 min-w-full"
        >
          <img src={cloud1} width={300} className="absolute top-12 right-1/4" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-0.5}
          horizontal
          className="z-30 min-w-full"
        >
          <img src={cloud3} width={650} className="absolute top-72 left-2/4" />
        </ParallaxLayer>

        {/* 
          Slide-left clouds
        */}
        <ParallaxLayer
          offset={0}
          speed={0.4}
          horizontal
          className="z-30 min-w-full"
        >
          <img src={cloud2} width={450} className="absolute top-5 left-1/4" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}
          horizontal
          className="z-30 min-w-full"
        >
          <img src={cloud4} width={450} className="absolute top-32 left-24" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          horizontal
          className="z-30 min-w-full"
        >
          <img src={cloud1} width={250} className="absolute top-80 left-1/4" />
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
          <div className="text-center font-poppins text-white font-bold text-3xl">
            <h1 className="text-7xl px-52 py-14">
              Samuel Immanuel Herlinton Sibuea
            </h1>
            <p>Software Engineer</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
