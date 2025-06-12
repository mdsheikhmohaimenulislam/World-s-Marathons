import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthContext/AuthContext";
import ApplyTableBody from "./ApplyTableBody";

const MyApplyList = () => {
  const { user } = use(AuthContext);
  const [applyUser, setApplyUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const filterMarathons = data.filter(
          (applyUsers) => applyUsers.email === user.email
        );
        setApplyUser(filterMarathons);
      });
    document.title = "My Marathon List";
  }, [user]);

  return (
    <>
      <div className="flex justify-center"></div>
      <section>
        <div className="overflow-x-auto overflow-scroll">
          <table className={`table mb-20 bg-base-300`}>
            {/* head */}
            <thead>
              <tr>
                <th>Display Name</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Marathon Start Date</th>
                <th>Additional Info</th>
                <th>Actions</th>
              </tr>
            </thead>
            {/* body */}
            <tbody>
              {applyUser.map((userData,index) => (
                <ApplyTableBody key={index} userData={userData} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default MyApplyList;
