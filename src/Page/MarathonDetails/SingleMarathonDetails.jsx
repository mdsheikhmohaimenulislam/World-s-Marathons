import React from "react";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import {
  MdOutlineAccountCircle,
  MdOutlineDirectionsRun,
} from "react-icons/md";
import { Link, useNavigate } from "react-router";
import Countdown from "../../Countdown/Countdown";
import { FaArrowLeft } from "react-icons/fa";

const SingleMarathonDetails = ({ marathon, filteredUsers }) => {
    const navigate = useNavigate();
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

  // Format date helper
  const formatDate = (date) =>
    new Date(date).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const StartDate = formatDate(StartRegistrationDate);
  const EndDate = formatDate(EndRegistrationDate);
  const MarathonDate = formatDate(MarathonStartDate);
  const CreatedAt = formatDate(createdAt);

  // Check registration window
  const normalizeDate = (d) => {
    const date = new Date(d);
    date.setHours(0, 0, 0, 0);
    return date;
  };
  const now = new Date();
  const isRegistrationOpen =
    normalizeDate(now) >= normalizeDate(StartRegistrationDate) &&
    normalizeDate(now) <= normalizeDate(EndRegistrationDate);

  return (
    <div className="card w-11/12 mx-auto bg-base-100 shadow-sm mt-20 mb-40">

            {/* Back Button */}
            <div className="max-w-6xl pt-6 px-4 flex justify-start">
              <div className="w-full flex justify-start">
                <button
                  onClick={() => navigate(-1)}
                  className="btn text-sm text-white bg-blue-400 flex items-center gap-2"
                >
                  <FaArrowLeft /> Back Home
                </button>
              </div>
            </div>
      {/* Layout: Image Left, Details Right */}
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* LEFT: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={photo}
            alt={name}
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* RIGHT: Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">{name}</h2>
          <p className="text-gray-700">{Description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
            <div className="space-y-2">
              <p className="flex items-center">
                <GoClock className="mr-2 text-lg" />
                <span className="font-semibold">Start Registration:</span> {StartDate}
              </p>
              <p className="flex items-center">
                <GoClock className="mr-2 text-lg" />
                <span className="font-semibold">End Registration:</span> {EndDate}
              </p>
              <p className="flex items-center">
                <GoClock className="mr-2 text-lg" />
                <span className="font-semibold">Created At:</span> {CreatedAt}
              </p>
              <p className="flex items-center">
                <MdOutlineAccountCircle className="mr-2 text-lg" />
                <span className="font-semibold">Total Registered:</span> {filteredUsers?.length || 0}
              </p>
            </div>

            <div className="space-y-2">
              <p className="flex items-center">
                <GoClock className="mr-2 text-lg" />
                <span className="font-semibold">Marathon Date:</span> {MarathonDate}
              </p>
              <p className="flex items-center">
                <IoLocationOutline className="mr-2 text-lg" />
                <span className="font-semibold">Location:</span> {Location}
              </p>
              <p className="flex items-center">
                <MdOutlineDirectionsRun className="mr-2 text-lg" />
                <span className="font-semibold">Care Level:</span> {care}
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="pt-2">
            <Countdown
              EndRegistrationDate={EndRegistrationDate}
              StartRegistrationDate={StartRegistrationDate}
            />
          </div>

          {/* Register Button */}
          <div className="pt-4">
            <Link
              to={`/registration/${_id}`}
              className={`btn ${
                isRegistrationOpen
                  ? "bg-blue-500"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white`}
              onClick={(e) => {
                if (!isRegistrationOpen) e.preventDefault();
              }}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMarathonDetails;
