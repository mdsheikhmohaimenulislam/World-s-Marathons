import React, { useEffect, useState } from 'react';
import { GoClock } from 'react-icons/go';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineDirectionsRun } from 'react-icons/md';
import { Link, useNavigate, useParams } from 'react-router';

const NewMarathonDetails = () => {
  const { id } = useParams();
  const [marathon, setMarathon] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    if (!id) return;

    const fetchMarathon = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/marathon/${id}`
        );

        if (!res.ok) {
          navigate("/not-found");
          return;
        }

        const data = await res.json();
        setMarathon(data);
        document.title = "Marathon Details";
      } catch (error) {
        console.error("Error fetching marathon:", error);
        navigate("/not-found");
      } finally {
        setLoading(false);
      }
    };

    fetchMarathon();
  }, [id, navigate]);

  if (loading)
    return <span className="loading ml-100 loading-ring loading-xl"></span>;


  const {
    photo,
    name,
    Description,
    Location,
    care,

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

    return (
    <div>
      <div className="card w-11/12 mx-auto bg-base-100 shadow-sm mt-20 mb-40">
        <figure>
          <img src={photo} alt="marathon photo" />
        </figure>
        <div className="card-body md:mx-auto">
          <h2 className=" card-title">{name}</h2>
          <p>
           {Description}
          </p>
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
        <Link to="/">
          <button className="btn w-full text-blue-600 border-blue-500">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
    );
};

export default NewMarathonDetails;