/* eslint-disable react/prop-types */

const LandingPageBanner = () => {
  return (
    <>
      <div className="h-96 w-full flex items-end justify-center bg-black relative">
        <div className="h-fit w-[95%] flex flex-col items-center justify-center bg-red-600 absolute bottom-0 mb-[-120px]">
          <div className=" p-5">
            <p>
              Mrida exists to fulfill the education dream and career aspirations
              of tribal children from remote rural areas in India. Our
              intervention programs are now facilitating change in rural
              education. With a 21st-century focus on contextual learning and
              skill building in sports, robotics, and programming, Mrida’s work
              is transforming the lives of tribal children one program at a
              time. Get to know more about Mrida.
            </p>
          </div>
          <div className="pb-5  flex items-start justify-start">
            <button
              onClick={console.log("Donate Btn Clicked")}
              className="  flex justify-start bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm "
            >
              ABOUT MRIDA
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageBanner;
