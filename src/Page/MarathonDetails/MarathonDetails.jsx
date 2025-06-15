import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import SingleMarathonDetails from "./SingleMarathonDetails";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { getAllUser, getMarathonById } from "../../Api/MarathonApi";

const MarathonDetails = () => {
  const { id } = useParams();
  const [marathon, setMarathon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRegistration, setUserRegistration] = useState([]);
  const { user } = useContext(AuthContext); //  Correct hook: useContext
  const navigate = useNavigate();



console.log(userRegistration);
  
  useEffect(() => {
    if (!id) return;

    // Fetch all users
    getAllUser(user.accessToken,user.email)
      .then((data) => {
        console.log(data);
        setUserRegistration(data);
      });

    // Use the helper function properly
    getMarathonById(id)
      .then((data) => {
        setMarathon(data);
        document.title = "Marathon Details";
      })
      .catch((error) => {
        console.error("Error fetching marathon:", error);
        navigate("/not-found");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, navigate]);

  // Filter registered users by current user's email
  const filteredUsers = userRegistration.filter(
    (u) => u.email === user?.email
  );

  console.log(filteredUsers);

  if (loading)
    return (
      <span className="loading ml-100 loading-ring loading-xl"></span>
    );

  return (
    <div>
      {marathon && (
        <SingleMarathonDetails
          marathon={marathon}
          filteredUsers={filteredUsers}
        />
      )}
    </div>
  );
};

export default MarathonDetails;
