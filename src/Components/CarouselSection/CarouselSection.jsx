import React from "react";

const CarouselSection = () => {
  return (
    <div className="carousel w-full rounded-lg">
      {/* Slide 1 */}
      <div
        id="slide1"
        style={{
          backgroundImage: `url(./1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="carousel-item  relative w-full"
      >
        {/* <img
          src="/1.png"
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
        /> */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>

          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <h1 className="text-center mt-60 ml-10 md:mt-80 md:ml-30 md:text-4xl lg:mt-100 lg:ml-80 lg:text-5xl text-white font-bold text-xl">
          FUNDRAISING MARATHON
        </h1>
      </div>

      {/* Slide 2 */}
      <div
        id="slide2"
        style={{
          backgroundImage: `url(./2.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="carousel-item relative w-full"
      >
        {/* <img
          src="/2.png"
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
        /> */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <h1 className="text-center mt-60 ml-10 md:mt-80 md:ml-30 md:text-4xl lg:mt-100 lg:ml-80 lg:text-5xl text-white font-bold text-xl">
          YOUR RUNNING <span className="text-blue-400">EQUIPMENT</span>
        </h1>
      </div>

      {/* Slide 3 */}
      <div
        id="slide3"
        style={{
          backgroundImage: `url(./3.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="carousel-item relative w-full"
      >
        {/* <img
          src="/3.png"
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
        /> */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <h1 className="text-center mt-60 ml-10 md:mt-80 md:ml-30 md:text-4xl lg:mt-100 lg:ml-80 lg:text-5xl text-white font-bold text-xl">
          <span className="text-blue-400">CONQUER</span> THE MILES
        </h1>
      </div>

      {/* Slide 4 */}
      <div
        id="slide4"
        style={{
          backgroundImage: `url(./4.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="carousel-item relative w-full"
      >
        {/* <img
          src="/4.png"
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
        /> */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
                <h1 className="text-center mt-60 ml-10 md:mt-80 md:ml-30 md:text-4xl lg:mt-100 lg:ml-80 lg:text-5xl text-white font-bold text-xl">
         TOGETHER TOWARD PROGRESS
        </h1>
      </div>
    </div>
  );
};

export default CarouselSection;
