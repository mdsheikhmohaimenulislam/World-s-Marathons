import React from "react";

const trainers = [
 {
    name: "Evan Stone",
    role: "Lead Trainer",
    image: "https://i.ibb.co/B5kWxYD9/63f0d0190015aa2959b086e7e58ec066.jpg",
    nameClass: "text-white bg-blue-600",
  },
  {
    name: "Chloe Blake",
    role: "Performance Coach",
    image: "https://i.ibb.co/YBqWTsJP/677c51d80ba826e13b02f52880a06277.jpg",
    nameClass: "text-black bg-white",
  },
  {
    name: "Noah King",
    role: "Trail Running Expert",
    image: "https://i.ibb.co/5W43CjY1/istockphoto-1485546774-612x612.jpg",
    nameClass: "text-black bg-white",
  },
  {
    name: "Emma Snow",
    role: "Wellness Trainer",
    image: "https://i.ibb.co/TBKdFqXk/360-F-224869519-a-Rae-Lneq-ALf-PNBzg0xx-MZXghtv-BXkf-IA.jpg",
    nameClass: "text-black bg-white",
  },
  {
    name: "Lucas Gray",
    role: "Strength Specialist",
    image: "https://i.ibb.co/YBqWTsJP/677c51d80ba826e13b02f52880a06277.jpg",
    nameClass: "text-white bg-gray-800",
  },
  {
    name: "Ava Brooks",
    role: "Flexibility Coach",
    image: "https://i.ibb.co/wrr3vYhr/images.jpg",
    nameClass: "text-black bg-blue-500 text-white",
  },
];

const TrainerSection = () => {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <p className="text-sm  uppercase text-blue-500 font-bold mb-1">
            <span className="pr-3" >||</span> Marathon Trainers <span className="pl-3" >||</span>
            </p>
            <h2 className="text-2xl sm:text-2xl font-black leading-tight">
              PROFESSIONAL TRAINERS<br />
              FOR <span className="text-blue-500 italic">EVERY RUNNER.</span>
            </h2>
          </div>
          <p className="text-gray-600 md:w-3/6">
            At Marathon, we believe in personalized training for every runner.
            Our expert trainers are here to provide the guidance and motivation
            you need.
          </p>
        </div>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trainers.map((trainer, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden shadow-md group">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute cursor-pointer bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-md text-center">
                <p
                  className={`font-bold uppercase text-sm ${trainer.nameClass}`}
                >
                  {trainer.name}
                </p>
                <p className="text-xs  text-gray-500">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
