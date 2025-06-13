import React from "react";

const events = [
  {
    day: "23",
    month: "JUN",
    title: "RUN CHALLENGE",
    description: "TRAIL RUNNING JOURNEY",
    imageUrl: "https://i.ibb.co/cXNvx4YH/1.png",
  },
  {
    day: "28",
    month: "JUN",
    title: "MARATHON PREP",
    description: "HALF-MARATHON TRAINING",
    imageUrl: "https://i.ibb.co/tpcvBFvn/2.png",
  },
  {
    day: "05",
    month: "JUL",
    title: "SPRINT SERIES",
    description: "URBAN SPEED CHALLENGE",
    imageUrl: "https://i.ibb.co/7tw7MwVK/3.png",
  },
  {
    day: "12",
    month: "JUL",
    title: "MOUNTAIN RUN",
    description: "HIGH ALTITUDE ADVENTURE",
    imageUrl: "https://i.ibb.co/Nd97ZwXc/4.png",
  },
  {
    day: "19",
    month: "JUL",
    title: "NIGHT TRAIL",
    description: "MOONLIGHT RUNNING EXPEDITION",
    imageUrl: "https://i.ibb.co/bMZfQn8q/5.png",
  },
  {
    day: "26",
    month: "JUL",
    title: "COASTAL DASH",
    description: "BEACH & CLIFFS CHALLENGE",
    imageUrl: "https://i.ibb.co/fY1NmTw3/6.png",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="text-gray-500 text-sm font-medium uppercase tracking-widest">
          UPCOMING EVENTS FOR
        </div>
        <div className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          RUNNERS AND ATHLETES.
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg h-80"
            style={{
              backgroundImage: `url(${event.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0  bg-opacity-40"></div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-white p-6">
              {/* Date Badge */}
              <div className="flex flex-col lg:block -ml-160 gap-20 hidden ">
                <div className="bg-white  p-10 bg-opacity-70 rounded-lg w-16 h-16 flex flex-col items-center justify-center mb-4">
                  <div className="text-2xl text-gray-600 font-semibold">
                    {event.month}
                  </div>
                  <div className="text-4xl  text-black font-bold">
                    {event.day}
                  </div>
                </div>

                {/* Title */}
                <div className=" ">
                  <h3 className="text-2xl font-bold  mb-2">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-center mb-4">{event.description}</p>
                </div>
              </div>

              {/* Button */}
              <button className="mt-2 hidden lg:block ml-180 cursor-pointer justify-end bg-blue-400 hover:bg-blue-800 text-black px-5 py-2 rounded-full font-semibold hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
