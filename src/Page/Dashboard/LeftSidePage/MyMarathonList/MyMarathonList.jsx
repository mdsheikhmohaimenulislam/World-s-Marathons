import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthContext/AuthContext";

const MyMarathonList = () => {
  const { user } = use(AuthContext);
  const [marathons, setMarathons] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/marathon")
      .then((res) => res.json())
      .then((data) => {
        const filterMarathons = data.filter(
          (marathon) => marathon.email === user.email
        );
        setMarathons(filterMarathons)
      });
  }, [user]);

  console.log(marathons);

  return (
    <div>
      <div className="flex justify-center"></div>
      <section>
        <div className="overflow-x-auto">
          <table className={`table mb-20 bg-base-300`}>
            {/* head */}
            <thead>
              <tr>
                <th>photo</th>
                <th>Name</th>
              </tr>
            </thead>
            {/* body */}
            <tbody></tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyMarathonList;
