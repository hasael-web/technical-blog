import React from "react";
import { ColorRing } from "react-loader-spinner";

const LoadingSpiner = () => {
  return (
    <div className="bg-black w-full h-screen">
      loading
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
      />
    </div>
  );
};

export default LoadingSpiner;
