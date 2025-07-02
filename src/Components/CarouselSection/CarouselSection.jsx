import { useRef, useState } from "react";

const images = [
  {
    url: "/1.webp",
    title: "FUNDRAISING MARATHON",
  },
  {
    url: "/2.jpg",
    title: " YOUR RUNNING EQUIPMENT",
  },
  {
    url: "/3.jpg",
    title: "CONQUER THE MILES",
  },
  {
    url: "/4.jpg",
    title: "TOGETHER TOWARD PROGRESS",
  },
  {
    url: "/5.jpg",
    title: "Forward Together Marathon",
  },
];

const CarouselSection = () => {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Button click: page redirect (DOM full reload)
  const handleButtonClick = () => {
    window.location.href = "/allMarathons";
  };

  return (
    <div
      ref={carouselRef}
      className="relative w-full h-screen bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${images[current].url})` }}
    >
      {/* Button on top */}
      <div className="absolute hidden lg:block top-100 mt-10 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={handleButtonClick}
          className="btn bg-blue-500 text-white px-6 py-2 rounded-full  transition"
        >
          Go to My Marathons
        </button>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg mb-4">
          {images[current].title}
        </h1>
      </div>

      {/* Arrows */}
      <div className="absolute inset-0 flex justify-between items-center px-6">
        <button
          onClick={handlePrev}
          className="btn btn-circle hover:bg-green-600 bg-black/50 text-white border-none"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="btn btn-circle bg-black/50 text-white hover:bg-black/70 border-none"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default CarouselSection;
