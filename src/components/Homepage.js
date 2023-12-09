import React from "react";
import HorizontalBar from "./resuableComponent/horizontalBar";

const Homepage = () => {
  return (
    <>
      <div className=" flex flex-row">
        <HorizontalBar text={"OUR WORK"} />
      </div>
      <div className="px-5 sm:px-8">
        <p className="mt-4 font-semibold text-lg text-[#04A9BB]">
          Our grassroots-led intervention programs, help increase education,
          income, and health for tribal communities in remote rural regions. We
          develop and facilitate vocational, career, and skills training to
          middle grade and high school students to build a better future. Our
          programs in football, robotics and programming is helping students
          gain knowledge and proficiency to become professional football
          players, sports coaches, programmers, agriculturists, and
          entrepreneurs.
        </p>
      </div>
    </>
  );
};

export default Homepage;
