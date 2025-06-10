import React from "react";
import { useLoaderData, useParams } from "react-router";
import Error2 from "../Error/Error2";
import RegistrationForm from "./RegistrationForm";

const RegistrationPage = () => {
  const data = useLoaderData();
  const { id } = useParams();

  if (!id) {
    return <div>No ID provided.</div>;
  }

  // Filter the marathon with matching _id
  const filteredData = data.filter((item) => item._id === id);

  if (filteredData.length === 0) {
    return <Error2 />;
  }



  return (
    <div>
        {
            filteredData.map(marathon => <RegistrationForm key={marathon._id} marathon={marathon}/>)
        }
    </div>
  );
};

export default RegistrationPage;
