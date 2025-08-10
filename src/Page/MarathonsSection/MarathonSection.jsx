import React, { use, useEffect, useState } from "react";
import SingleMarathonCard from "./SingleMarathonCard";

import { getNewMarathon } from "../../Api/MarathonApi";
import { ThemeContext } from "../../Theme/ThemeContext";

const MarathonSection = () => {
  const [marathons, setMarathons] = useState([]);
  const {theme}=use(ThemeContext)

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

// ${theme === "dark"? "bg-gray-600" : "bg-base-300"}

  return (
    <div>
      <div className="mt-20">
        <h1 className={`${theme === "dark"? "text-3xl md:text-4xl font-bold text-white text-center mb-10 " : "text-3xl md:text-4xl font-bold text-black text-center mb-10"}`}>
          Marathon Section
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {marathons.map((marathon, index) => (
            <SingleMarathonCard key={index} marathon={marathon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarathonSection;
