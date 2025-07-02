import React, { useContext, useEffect, useState } from "react";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDirectionsRun } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { getMarathonById } from "../../Api/MarathonApi";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const NewMarathonDetails = () => {
  const { id } = useParams();
  const [marathon, setMarathon] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!id || !user?.accessToken) return;

    const accessToken = user.accessToken;

    getMarathonById(id, accessToken)
      .then((data) => {
        setMarathon(data);
        document.title = "Marathon Details";
      })
      .catch((error) => {
        console.error("Error:", error);
        navigate("/not-found");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, user]);

  if (loading)
    return <span className="loading ml-100 loading-ring loading-xl"></span>;

  if (!marathon) return null;

  const {
    photo,
    name,
    Description,
    Location,
    care,
    StartRegistrationDate,
    EndRegistrationDate,
    MarathonStartDate,
  } = marathon;

  // Date conversion
  const StartDate = new Date(StartRegistrationDate).toLocaleDateString();
  const EndDate = new Date(EndRegistrationDate).toLocaleDateString();
  const MarathonDate = new Date(MarathonStartDate).toLocaleDateString();

  return (
    <div className="card w-11/12 mx-auto bg-base-100 shadow-sm mt-20 ">
      {/* Back Button */}
      <div className="max-w-6xl pt-6 px-4 flex justify-start">
        <div className="w-full flex justify-start">
          <button
            onClick={() => navigate("/")}
            className="btn text-sm text-white bg-blue-500 flex items-center gap-2"
          >
            <FaArrowLeft /> Back Home
          </button>
        </div>
      </div>
      {/* Details */}
      <div className="max-w-6xl mx-auto my-6 md:my-10">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={photo}
              alt={name}
              className="rounded-xl w-full h-96 object-cover shadow-md"
            />
          </div>

          {/* Marathon Details */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">{name}</h2>

            <p className="flex items-center gap-2">
              <IoLocationOutline className="text-xl" />
              <span className="font-semibold">Location:</span> {Location}
            </p>

            <p className="flex items-center gap-2">
              <MdOutlineDirectionsRun className="text-xl" />
              <span className="font-semibold">Care Level:</span> {care}
            </p>

            <div className="space-y-1">
              <p className="flex items-center gap-2">
                <GoClock className="text-xl" />
                <span className="font-semibold">Registration Start:</span>{" "}
                {StartDate}
              </p>
              <p className="flex items-center gap-2">
                <GoClock className="text-xl" />
                <span className="font-semibold">Registration End:</span>{" "}
                {EndDate}
              </p>
              <p className="flex items-center gap-2">
                <GoClock className="text-xl" />
                <span className="font-semibold">Marathon Date:</span>{" "}
                {MarathonDate}
              </p>
            </div>

            {/* Description */}
            <div className="pt-4 border-t border-gray-300">
              <h3 className="text-xl font-semibold mb-1">Description:</h3>
              <p className="leading-relaxed text-gray-700">{Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMarathonDetails;
