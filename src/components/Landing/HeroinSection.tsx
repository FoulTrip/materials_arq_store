import React from "react";

function HeroSection() {
  return (
    <section className="min-h-dvh flex flex-wrap custom-max-900:mt-16">
      <div className="basis-96 flex-1 grid place-content-center pl-5 pr-5 md:pt-32">
        <h3 className="text-1xl font-bold text-blue-500 dark:text-white mb-7">
          Logistics & Beyond
        </h3>
        <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-8xl">
          Future State Faster
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Leverage the power of artificial intelligence and achieve stability in
          an ever-changing world
        </p>

        <div className="flex justify-start mt-6">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Compra ahora
          </button>
        </div>
      </div>
      <div className="basis-96 flex-1 grid place-content-center overflow-hidden">
        <video
          className="w-full h-full object-cover scale-150 -z-50"
          src={"/hersection_video.mp4"}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </section>
  );
}

export default HeroSection;
