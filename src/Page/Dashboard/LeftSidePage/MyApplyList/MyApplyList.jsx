import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthContext/AuthContext";

import Swal from "sweetalert2";
import ApplyTable from "./ApplyTable";

const MyApplyList = () => {
  const { user } = use(AuthContext);
  const [applyUser, setApplyUser] = useState([]);
  const [search, setSearch] = useState("");


useEffect(() => {
  const url = search
    ? `http://localhost:5000/users?searchParams=${search}`
    : `http://localhost:5000/users`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const filtered = data.filter((item) => item.email === user.email);
      setApplyUser(filtered);
    });

  document.title = "My Apply List";
}, [user, search]);

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
      <div className="flex justify-center "></div>
      <section>
        <div className="flex justify-center">
          <div className="input  mb-10">
            <svg
              className="h-[1em] opacity-50 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </div>
        </div>
        <div className="overflow-x-auto overflow-scroll mb-30">
          <table className={`table bg-base-300`}>
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
