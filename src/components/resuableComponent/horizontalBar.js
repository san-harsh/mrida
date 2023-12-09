import React from "react";

const HorizontalBar = (props) => {
  return (
    <div className="flex items-center mt-40 sm:mt-42 ml-4 sm:ml-10">
      <div className="h-[3px] w-20 hidden sm:block bg-red-500 flex-1 mr-3"></div>
      <p className="text-4xl text-red-500">{props.text}</p>
    </div>
  );
};

export default HorizontalBar;
