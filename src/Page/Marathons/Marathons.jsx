import React, { useEffect, useState } from "react";
import MarathonCard from "./MarathonCard";
import { getAllMarathons } from "../../Api/MarathonApi";

const Marathons = () => {
  const [marathons, setMarathons] = useState([]);

  useEffect(() => {
    getAllMarathons()
      .then((data) => {
        setMarathons(data);
      })
      .catch((err) => {
        console.error("Error fetching marathons:", err.message);
      });

    document.title = "Marathons";
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 mt-20">
        {marathons.map((marathon) => (
          <MarathonCard key={marathon._id} marathon={marathon} />
        ))}
      </div>
    </div>
  );
};

export default Marathons;
