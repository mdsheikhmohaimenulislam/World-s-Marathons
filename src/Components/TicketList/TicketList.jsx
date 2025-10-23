import React, { use } from "react";
import ticketData from "/public/ticketData.json";
import { ThemeContext } from "../../Theme/ThemeContext";

const TicketList = () => {
  const { theme } = use(ThemeContext);

  // ${theme === "dark"? "bg-gray-600" : "bg-base-300"}
  return (
    <div className="mt-20">
      <p
        className={`${
          theme === "dark"
            ? "text-center mb-2 text-[12px] text-white"
            : "text-center mb-2 text-[12px] text-base-350"
        }`}
      >
        Tickets
      </p>
      <h2
        className={` ${
          theme === "dark"
            ? " text-xl md:text-3xl font-bold mb-5 text-center text-white"
            : " text-xl md:text-3xl font-bold mb-5 text-center text-black"
        }`}
      >
        Buy Your{" "}
        <span
          className={`bg-blue-300 ${
            theme === "dark" ? " bg-blue-300 text-black" : "bg-base-300"
          }`}
        >
          Early Bird
        </span>{" "}
        Ticket Now!
      </h2>
      <p
        className={`${
          theme === "dark"
            ? "text-white text-center gap-10 mx-auto mb-10"
            : "text-gray-500 text-center gap-10 mx-auto mb-10"
        }`}
      >
        Take advantage of our early bird pricing and save on your marathon
        ticket! Enjoy the benefits of registering early while guaranteeing your
        participation.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {ticketData.map((ticket, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-bold mb-2">{ticket.distance}</h3>
            <p className="text-gray-600 mb-2">{ticket.race_type}</p>
            <hr className="text-gray-300 mb-2" />

            <table className="min-w-full">
              <thead>
                <tr className="text-center mx-auto">
                  <th className="text-sm  text-gray-700">Early Bird</th>
                  <th className="text-sm font-medium text-gray-700">Normal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-2 pb-5 text-[25px] font-bold text-gray-900">
                    ${ticket.price.early_bird}
                  </td>
                  <td className="pt-2 pb-5  text-gray-500 text-[20px] line-through">
                    <s>${ticket.price.normal}</s>
                  </td>
                </tr>
              </tbody>
            </table>
            <a
              href="https://www.worldmarathonmajors.com/"
              className="bg-blue-300 cursor-pointer text-black font-semibold px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition"
            >
              Get Tickets
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;
