import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="bg-base-100 py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image Block */}
        <div className="relative flex items-center justify-center">
          {/* Rotated Text */}
          <div className="absolute left-0 top-4 z-10 hidden lg:block">
            <div className="flex flex-col items-center space-y-[-20px]">
              <span className="text-6xl font-extrabold text-blue-400 rotate-[-90deg]">
                RUNNING
              </span>
              <span className="text-6xl font-extrabold text-gray-300 rotate-[-90deg]">
                RUNNING
              </span>
              <span className="text-6xl font-extrabold text-black rotate-[-90deg]">
                RUNNING
              </span>
            </div>
          </div>

          {/* Main Image */}
          <img
            src="https://i.ibb.co/TdDqfWr/different-people-participating-cross-country.jpg"
            alt="Main"
            className="rounded-lg w-full max-w-md shadow-xl z-20"
          />

          {/* Small Corner Image */}
          <div className="absolute bottom-[-30px] left-[-30px] hidden lg:block w-40 z-10">
            <img
              src="https://i.ibb.co/Y7ggQFKH/istockphoto-1442636177-612x612.jpg"
              alt="Side"
              className="rounded"
            />
            <p className="text-sm text-center mt-1 text-gray-500">
              Explore events, register fast, run with passion.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm text-gray-500 font-semibold mb-2">
            Welcome To World's Marathons
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We Are The Best Running Club in Town
          </h1>
          <div className="w-16 h-1 bg-blue-500 mb-6"></div>
          <p className="text-gray-500 mb-6">
            Join the best running experience in town—World's Marathons brings
            runners together with thrilling routes, expert support, and
            unforgettable moments.
          </p>
          <Link
            to="https://www.worldmarathonmajors.com/"
            className="inline-block bg-blue-400 text-white px-6 py-3 rounded font-semibold  transition"
          >
            ABOUT US
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
