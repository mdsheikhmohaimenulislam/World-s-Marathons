import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import Error2 from "../Error/Error2";
import RegistrationForm from "./RegistrationForm";
import { getAllMarathons } from "../../Api/MarathonApi";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const RegistrationPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext); //  Correct hook

//   console.log("All Marathons:", data);
// console.log("Looking for ID:", id);

  useEffect(() => {
    if (!user?.accessToken) return;

    getAllMarathons(user.accessToken)
      .then((marathons) => {
        setData(marathons);
      })
      .catch((error) => {
        console.error("Error fetching marathons:", error);
      });
  }, [user?.accessToken]);

  if (!id) {
    return <div>No ID provided.</div>;
  }

  if (!data || data.length === 0) {
    return <div>Loading...</div>; // Or a spinner
  }

  const filteredData = data.filter((item) => item._id === id);

  if (filteredData.length === 0) {
    return <Error2 />;
  }

  return (
    <div>
      {filteredData.map((marathon) => (
        <RegistrationForm key={marathon._id} marathon={marathon} />
      ))}
    </div>
  );
};

export default RegistrationPage;
