import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Certificate({ image, title }) {
  return (
    <div
      class={`relative max-w-sm rounded-lg overflow-hidden cursor-pointer hover:opacity-65 md:my-0 my-5`}
    >
      <Zoom>
        <img
          class="w-full h-auto object-cover shadow-xl"
          src={image}
          alt={title}
        />
      </Zoom>
    </div>
  );
}

export default Certificate;
