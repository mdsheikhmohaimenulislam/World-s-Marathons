import React from "react";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAccountCircle, MdOutlineDirectionsRun } from "react-icons/md";
import { Link } from "react-router";
import Countdown from "../../Countdown/Countdown";

const SingleMarathonDetails = ({ marathon, filteredUsers }) => {
  const {
    photo,
    name,
    Description,
    Location,
    care,
    _id,
    createdAt,
    StartRegistrationDate,
    EndRegistrationDate,
    MarathonStartDate,
  } = marathon || {};

  // Date conversion for display
  const StartRegistrationDateConvert = new Date(
    StartRegistrationDate
  ).toLocaleDateString();
  const EndRegistrationDateConvert = new Date(
    EndRegistrationDate
  ).toLocaleDateString();
  const MarathonStartDateConvert = new Date(
    MarathonStartDate
  ).toLocaleDateString();

  //   Convert Hours
  const HoursDate = (start) => {
    const newHours = new Date(start);
    newHours.setHours(0, 0, 0, 0);
    return newHours;
  };

  // HoursDate current date
  const now = new Date();
  // now.setHours(0,0,0,0)

  // Registration logic
  const isRegistrationOpen =
    StartRegistrationDate &&
    EndRegistrationDate &&
    HoursDate(now) >= HoursDate(StartRegistrationDate) &&
    HoursDate(now) <= HoursDate(EndRegistrationDate);

  const handleRegisterClick = () => {
    // alert("yes");
  };

  return (
    <div>
      <div className="card w-11/12 mx-auto bg-base-100 shadow-sm mt-20 mb-40">
        <figure>
          <img src={photo} alt="marathon photo" />
        </figure>
        <div className="card-body md:mx-auto">
          <h2 className=" card-title">{name}</h2>
          <p>{Description}</p>
        </div>
        <div className="md:flex space-y-2 gap-8 md:p-5 pl-5 md:mx-auto">
          <div className="space-y-2">
            <p className=" flex text-base text-gray-600">
              StartRegistration:
              <GoClock className="mt-1 ml-2 mr-1 text-black font-bold" />
              <span className="text-black font-bold">
                {StartRegistrationDateConvert}
              </span>
            </p>
            <p className="flex text-base text-gray-600">
              EndRegistration:
              <GoClock className="mt-1 ml-2 mr-1 text-black font-bold" />
              <span className="text-black font-bold">
                {EndRegistrationDateConvert}
              </span>
            </p>
            <p className="flex text-base text-gray-600">
              createdAt:
              <GoClock className="mt-1 ml-2 mr-1 text-black font-bold" />
              <span className="text-black font-bold">{createdAt}</span>
            </p>
            <p className="flex text-base text-gray-600">
              Total Registration Count:
              <MdOutlineAccountCircle className="mt-1 ml-2 mr-1 text-black font-bold" />
              <span className="text-black font-bold">
                {filteredUsers.length}
              </span>
            </p>
          </div>
          <div className="space-y-2">
            <p className="flex  text-base text-gray-600">
              MarathonStartDate:
              <GoClock className="mt-1 ml-2 mr-1 text-black font-bold" />
              <span className="text-black font-bold">
                {MarathonStartDateConvert}
              </span>
            </p>
            <p className="flex text-base text-gray-600">
              Location:
              <IoLocationOutline className="mt-1 ml-2 text-black font-bold" />
              <span className="text-black font-bold">{Location}</span>
            </p>
            <p className="flex text-base text-gray-600">
              Location:
              <MdOutlineDirectionsRun className="mt-1 ml-2 text-black font-bold" />
              <span className="text-black font-bold">{care}m</span>
            </p>
          </div>
        </div>
        <div className="mb-5 -mt-10">
          <Countdown EndRegistrationDate={EndRegistrationDate} />
        </div>
        <div className="card-body">
          <div className="card-actions justify-end">
            <>
              <Link
                to={`/registration/${_id}`}
                className={`btn ${
                  isRegistrationOpen
                    ? "bg-blue-400"
                    : "bg-gray-400 cursor-not-allowed "
                } text-white`}
                onClick={handleRegisterClick}
                disabled={!isRegistrationOpen}
              >
                Register
              </Link>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMarathonDetails;
