import { Link } from "react-router";

const blogs = [
  {
    id: 1,
    category: "News",
    title: "Where Runners Meet the World",
    excerpt:
      "Run smarter, farther, and together. World’s Marathons empowers every athlete with expert support, global races, and unmatched marathon experiences.",
    image: "https://i.ibb.co/1tjXmbBW/sport-man-with-runner-street-be-running-exercise.jpg", // Replace with your image
    featured: true,
  },
  {
    id: 2,
    category: "News",
    title: "Your Global Gateway to Marathons",
    excerpt:
      "World’s Marathons connects passionate runners with inspiring events, expert guidance, and a global community—making every race truly extraordinary.",
    image: "https://i.ibb.co/gZb1WQrw/fit-athletic-male-jogger-runs-fast-along-road-does-workout-outdoor-amazing-mountain-landscape-breath.jpg",
    featured: false,
  },
  {
    id: 3,
    category: "Tips & Trick",
    title: "World’s Marathons – Run Beyond Limits",
    excerpt:
      "Join a vibrant running community through World’s Marathons—offering premium events, scenic courses, live countdowns, and smooth registration, all in one.",
    image: "https://i.ibb.co/YBjsT7RT/attractive-male-athlete-wearing-stylish-black-sport-clothing-blue-sneakers-figure-man-athlete-doing.jpg",
    featured: false,
  },
];

const LatestBlog = () => {
  return (
    <section className="mt-20 bg-base-200 p-10">
      <div className="text-center mb-10">
        <h3 className="text-md uppercase font-semibold text-gray-500">Our Blog</h3>
        <h2 className="text-4xl font-bold">
          Latest Blog <span className="text-blue-500">& Articles</span>
        </h2>
        <div className="mt-2 w-16 h-1 bg-blue-400 mx-auto rounded-full"></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-3 gap-6 ">
        {/* Featured blog */}
        <div className="col-span-2 relative rounded overflow-hidden shadow-lg">
          <img
            src={blogs[0 ].image}
            alt={blogs[0].title}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-6">
            <p className="text-sm text-blue-400 mb-1">{blogs[0].category}</p>
            <h3 className="text-lg font-bold mb-2">{blogs[0].title}</h3>
            <p className="text-sm">{blogs[0].excerpt}</p>
            <Link
              to="https://www.worldmarathonmajors.com/"
              className="inline-block mt-4 text-blue-400 hover:underline text-sm"
            >
              READ MORE →
            </Link>
          </div>
        </div>

        {/* Side blogs */}
        <div className="flex flex-col gap-6 mt-20">
          {blogs.slice(1).map((blog) => (
            <div key={blog.id} className="flex gap-4 items-start">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-[120px] h-[100px] object-cover rounded"
              />
              <div className="flex-1">
                <p className="text-xs text-gray-400">{blog.category}</p>
                <h4 className="font-bold text-sm mb-1">{blog.title}</h4>
                <p className="text-xs text-gray-500 line-clamp-2">{blog.excerpt}</p>
                <Link
                  to="https://www.worldmarathonmajors.com/"
                  className="inline-block mt-2 text-sm text-blue-500 hover:text-blue-500  transition"
                >
                  READ MORE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
