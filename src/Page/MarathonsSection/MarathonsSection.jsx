import React, { useEffect, useState } from "react";
import SingleMarathonCard from "./SingleMarathonCard";

const MarathonsSection = () => {

      const [marathons, setMarathons] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/new-marathon")
      .then((res) => res.json())
      .then((data) => {
        setMarathons(data);
      });
    document.title = "Home";
  }, []);


  return (
    <div>
      <div className="mt-20 mb-20">
        <h1 className={`text-5xl text-center mb-20 font-extrabold underline `}>
          Marathon Section
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {
                marathons.map((marathon , index) => <SingleMarathonCard key={index} marathon={marathon} />)
            }
        </div>
      </div>
    </div>
  );
};

export default MarathonsSection;
