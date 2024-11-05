import React from "react";
import plant from "/images/plant.gif";

function Loader() {
  return (
    <div className=" bg-gradient-to-br bg-sky-600">
      <div className="h-screen flex flex-col items-center justify-center">
        <img src={plant} alt="preload" width={60} />
        <p className="font-wicked text-white tracking-wider py-2">Loading ...</p>
      </div>
    </div>
  );
}

export default Loader;
