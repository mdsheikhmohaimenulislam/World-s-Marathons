import React from "react";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";

const SingleMarathonCard = ({ marathon }) => {
  const { photo, name, Location, _id, StartRegistrationDate } = marathon || {};

  // Date conversion for display
  const StartRegistrationDateConvert = new Date(
    StartRegistrationDate
  ).toLocaleDateString();

  return (
    <div>
      <Tooltip
        anchorSelect="#my-anchor-element"
        content="Go to the Marathon Section"
      />
      <div id="my-anchor-element" className={`card  shadow-sm`}>
        <figure>
          <img src={photo} alt="phot" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="flex text-base text-gray-600">
            Location:
            <IoLocationOutline className="mt-1 ml-2 text-black font-bold" />
            <span className="text-black font-bold">{Location}</span>
          </p>
          <p className=" flex text-base text-gray-600">
            StartRegistration:
            <GoClock className="mt-1 ml-2 mr-1 text-black font-bold" />
            <span className="text-black font-bold">
              {StartRegistrationDateConvert}
            </span>
          </p>

          <div className="text-center btn text-blue-800 border-blue-600">
            <Link to={`/NewMarathon/${_id}`}>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMarathonCard;
