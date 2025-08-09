import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="flex space-x-2">
          <span className="w-2 h-2 bg-[#afafaf] rounded-full animate-bounce [animation-delay:0ms]"></span>
          <span className="w-2 h-2 bg-[#afafaf] rounded-full animate-bounce [animation-delay:200ms]"></span>
          <span className="w-2 h-2 bg-[#afafaf] rounded-full animate-bounce [animation-delay:400ms]"></span>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
