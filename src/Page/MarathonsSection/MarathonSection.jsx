import React, { useEffect, useState, useContext } from "react";
import SingleMarathonCard from "./SingleMarathonCard";
import { AuthContext } from "../../Context/AuthContext/AuthContext"; // adjust path if needed
import { getNewMarathon } from "../../Api/MarathonApi";

const MarathonSection = () => {
  const [marathons, setMarathons] = useState([]);
  const { user } = useContext(AuthContext); // Get token from context

  useEffect(() => {
    const accessToken = user?.accessToken;
    if (!accessToken) return;
    getNewMarathon(accessToken)
      .then((data) => {
        setMarathons(data);
      })
      .catch((error) => {
        console.error("Error fetching marathons:", error);
      });

    document.title = "Home";
  }, [user?.accessToken]);

  return (
    <div>
      <div className="mt-20 mb-20">
        <h1 className="text-5xl text-center mb-20 font-extrabold underline">
          Marathon Section
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {marathons.map((marathon, index) => (
            <SingleMarathonCard key={index} marathon={marathon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarathonSection;
