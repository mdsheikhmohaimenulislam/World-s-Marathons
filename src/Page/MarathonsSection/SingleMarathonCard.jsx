import React, { use } from "react";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import { ThemeContext } from "../../Theme/ThemeContext";

const SingleMarathonCard = ({ marathon }) => {
  const {theme}=use(ThemeContext)
  const { photo, name, Location, _id, StartRegistrationDate } = marathon || {};


  // Date conversion for display
  const StartRegistrationDateConvert = new Date(
    StartRegistrationDate
  ).toLocaleDateString();
// ${theme === "dark"? "bg-gray-600" : "bg-base-300"}
  return (
    <div className={` ${theme === "dark"? "bg-white rounded-md" : "bg-base-300"}`}>
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

            <IoLocationOutline className="mt-1 ml-2 text-black font-bold" />
            <span className="text-black font-bold">{Location}</span>
          </p>
          <p className=" flex text-base text-gray-600">
            <GoClock className="mt-1 ml-2 mr-1 text-black font-bold" />
            <span className="text-black font-bold">
              {StartRegistrationDateConvert}
            </span>
          </p>

          <div className="text-center btn text-blue-500 border-blue-400">
            <Link to={`/NewMarathon/${_id}`}>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMarathonCard;
