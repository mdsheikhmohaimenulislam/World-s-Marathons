import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import ApplyTable from "./ApplyTable";
import UserGetAllUserApi from "../../../../Api/UserGetAllUserApi";

const MyApplyList = () => {
  const { user } = useContext(AuthContext); // Fix here
  const [applyUser, setApplyUser] = useState([]);
  const [search, setSearch] = useState("");
  const { getAllUser2 } = UserGetAllUserApi();

  //   ,{
  //     headers: {
  //     Authorization: `Bearer ${user?.accessToken}`,
  //   },
  // }
  // `${import.meta.env.VITE_API_URL}/users?email=${user.email}`

//   useEffect(() => {
//   const url = search
//     ? `${import.meta.env.VITE_API_URL}/users?searchParams=${search}`
//     : getAllUser2?.(user?.email);

//   if (!url) {
//     console.warn("Invalid fetch URL:", url);
//     return;
//   }

//   fetch(url)
//     .then((res) => {
//       if (!res.ok) throw new Error("Failed to fetch users");
//       return res.json();
//     })
//     .then((data) => {
//       const filtered = data.filter((item) => item.email === user.email);
//       setApplyUser(filtered);
//     })
//     .catch((error) => {
//       console.error("Fetch error:", error);
//       setApplyUser([]);
//     });

//   document.title = "My Apply List";
// }, [user, search]);




useEffect(() => {
  if (!user?.email) return;

  const fetchUsers = async () => {
    try {
      const data = await getAllUser2(user.email, search);
      const filtered = data.filter((item) => item.email === user.email);
      setApplyUser(filtered);
    } catch (error) {
      console.error("Axios error:", error);
      setApplyUser([]);
    }
  };

  fetchUsers();
}, [user, search]);



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
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/users/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.accessToken}`, // Add auth header here too!
          },
        })
          .then((res) => {
            if (!res.ok) throw new Error("Failed to delete");
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your marathon has been deleted.",
                icon: "success",
              });
              // Remove deleted user from state
              setApplyUser((prev) => prev.filter((u) => u._id !== id));
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: err.message,
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <>
      <div className="flex justify-center "></div>
      <section>
        <div className="flex justify-center">
          <div className="input mb-10">
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
              value={search}
              placeholder="Search"
            />
          </div>
        </div>
        <div className="overflow-x-auto overflow-scroll mb-30">
          <table className={`table bg-base-300`}>
            <thead>
              <tr>
                <th>Marathon Title</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Marathon Start Date</th>
                <th>Additional Info</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applyUser.map((userData) => (
                <ApplyTable
                  key={userData._id}
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
