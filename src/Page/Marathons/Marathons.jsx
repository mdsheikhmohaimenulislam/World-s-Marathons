import React, { useEffect, useState } from "react";
import MarathonCard from "./MarathonCard";

const Marathons = () => {
  const [marathons, setMarathons] = useState([]);



  useEffect(() => {
    fetch("http://localhost:5000/marathon")
      .then((res) => res.json())
      .then((data) => {
        setMarathons(data);
      });
    document.title = "Marathons";
  }, []);
  console.log(marathons);

  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 mt-20">
            {
                marathons.map(marathon => <MarathonCard key={marathon._id} marathon={marathon}/>)
            }
        </div>
    </div>
  );
};

export default Marathons;
