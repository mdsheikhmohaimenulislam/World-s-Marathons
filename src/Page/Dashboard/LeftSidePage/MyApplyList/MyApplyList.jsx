import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthContext/AuthContext";

import Swal from "sweetalert2";
import ApplyTable from "./ApplyTable";


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
    document.title = "My Apply List";
  }, [user]);

  // Deleted section
  const handleDeleted = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result);
      // Start Deleted the marathon

      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your marathon has been deleted.",
                icon: "success",
              });
            }
            // filter section
              const remainingMarathon = applyUser.filter(
                (filterMarathon) => filterMarathon._id !== id
              );
              setApplyUser(remainingMarathon);
          });
      }
    });
  };

  return (
    <>
      <div className="flex justify-center"></div>
      <section>
        <div className="overflow-x-auto overflow-scroll">
          <table className={`table mb-20 bg-base-300`}>
            {/* head */}
            <thead>
              <tr>
                <th>Marathon Name</th>
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
              {applyUser.map((userData, index) => (
                <ApplyTable
                  key={index}
                  handleDeleted={handleDeleted}
                  userData={userData}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default MyApplyList;
