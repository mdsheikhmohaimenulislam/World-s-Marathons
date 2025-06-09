import React from "react";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";

const MarathonCard = ({ marathon }) => {
  const { photo, name, Location, _id, StartRegistrationDate, EndRegistrationDate } =
    marathon || {};

  //   date convert
  const StartRegistrationDateConvert = new Date(
    StartRegistrationDate
  ).toLocaleDateString();
  const EndRegistrationDateConvert = new Date(
    EndRegistrationDate
  ).toLocaleDateString();

  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img src={photo} alt="marathonPhoto" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="flex text-base text-gray-600">
            Location:
            <IoLocationOutline className="mt-1 ml-2 text-black font-bold" />
            <span className="text-black font-bold">{Location}</span>
          </p>
          <div className="space-y-2">
            <p className="flex text-base text-gray-600">
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
          </div>
          <div className="card-actions justify-end">
            <Link to={`/marathonDetails/${_id}`}>
             <button className="btn bg-blue-400 text-white mt-5">
              See Details
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonCard;
