import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthContext/AuthContext";
import TableBody from "./TableBody";
import Swal from "sweetalert2";

const MyMarathonList = () => {
  const { user } = use(AuthContext);
  const [marathons, setMarathons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/marathon")
      .then((res) => res.json())
      .then((data) => {
        const filterMarathons = data.filter(
          (marathon) => marathon.email === user.email
        );
        setMarathons(filterMarathons);
      });
    document.title = "My Marathon List";
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
        fetch(`http://localhost:5000/marathon/${id}`, {
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
            const remainingMarathon = marathons.filter(
              (filterMarathon) => filterMarathon._id !== id
            );
            setMarathons(remainingMarathon);
          });
      }
    });
  };


  return (
    <>
      <div className="flex justify-center"></div>
      <section>
        <div className="overflow-x-auto">
          <table className={`table mb-20 bg-base-300`}>
            {/* head */}
            <thead>
              <tr>
                <th>photo</th>
                <th >Name</th>
                <th>Location</th>
                <th>Modify Sections</th>
              </tr>
            </thead>
            {/* body */}
            <tbody>
              {marathons.map((marathon, index) => (
                <TableBody key={index} marathon={marathon} handleDeleted={handleDeleted}/>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default MyMarathonList;
