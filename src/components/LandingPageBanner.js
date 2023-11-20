/* eslint-disable react/prop-types */

const LandingPageBanner = () => {
  return (
    <>
      <div className="container h-[420px] p-4 bg-red-400">
        Landing Page Image Carousel will come here
      </div>
      <div className="flex justify-center items-center">
        <div className="landingPageBoxShadow w-[360px] font-medium  p-7 bg-red-700 h-fit">
          Mrida exists to fulfill the education dream and career aspirations of
          tribal children from remote rural areas in India. Our intervention
          programs are now facilitating change in rural education. With a 21st
          century focus on contextual learning and skill building in sports,
          robotics, and programming, Mrida’s work is transforming the lives of
          tribal children one program at a time. Get to know more about Mrida.
          <br />
          <button
            onClick={console.log("Donate Btn Clicked")}
            className="  mt-8   bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm"
          >
            ABOUT MRIDA
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPageBanner;
