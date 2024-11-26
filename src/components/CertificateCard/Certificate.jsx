import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Certificate({ image, title }) {
  return (
    <div
      class={`max-w-sm rounded-lg overflow-hidden hover:scale-105`}
    >
      <Zoom>
        <img
          class="w-full h-auto object-cover shadow-lg"
          src={image}
          alt={title}
          loading="lazy"
        />
      </Zoom>
    </div>
  );
}

export default Certificate
