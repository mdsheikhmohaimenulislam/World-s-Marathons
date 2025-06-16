import React, { useEffect, useState} from "react";
import SingleMarathonCard from "./SingleMarathonCard";

import { getNewMarathon } from "../../Api/MarathonApi";

const MarathonSection = () => {
  const [marathons, setMarathons] = useState([]);


  useEffect(() => {
    // const accessToken = user?.accessToken;
    // if (!accessToken) return;
    getNewMarathon()
      .then((data) => {
        setMarathons(data);
      })
      .catch((error) => {
        console.error("Error fetching marathons:", error);
      });

    document.title = "Home";
  }, []);

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
