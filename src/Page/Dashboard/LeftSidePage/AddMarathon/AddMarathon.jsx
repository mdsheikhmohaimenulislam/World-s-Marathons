import React, { use, useEffect, useState } from "react";

import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../../../../Context/AuthContext/AuthContext";

const AddMarathon = () => {
  const { user } = use(AuthContext);

  const [runningDistance, setRunningDistance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;

    const Description = form.Description.value;
    const care = runningDistance;

    const StartRegistrationDate = form.StartRegistrationDate.value;
    const EndRegistrationDate = form.EndRegistrationDate.value;
    const MarathonStartDate = form.MarathonStartDate.value;
    const Location = form.Location.value;

    const displayName = form.displayName.value;
    const email = form.email.value;

    const allData = {
      photo,
      name,

      Description,
      care,
      StartRegistrationDate,
      EndRegistrationDate,
      MarathonStartDate,
      Location,
      displayName,
      email,
      createdAt: new Date().toLocaleDateString(),
    };
   

    // Send Marathons to the DB.
    fetch("http://localhost:5000/marathon", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Marathon Added Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          //   form.reset()
        }
      });
  };

  useEffect(() => {
    document.title = "Add Marathons";
  }, []);

  const handleSelectCare = (value) => {
    setRunningDistance(value);
  };

  return (
    <>
      <div className="mb-20">
        <section className={` overflow-scroll table mb-20  `}>
          <form
            onSubmit={handleSubmit}
            className="container overflow-hidden flex flex-col mx-auto space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  rounded-md shadow-sm dark:bg-gray-50">
              {/* 1 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Marathon Image</legend>
                <input
                  type="photoURL"
                  name="photo"
                  className="input"
                  placeholder="Marathon Image URL"
                />
              </fieldset>
              {/* 2 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Marathon Title</legend>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Marathon Title"
                />
              </fieldset>
              {/* 3 */}

              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">
                  Start Registration Date
                </legend>
                <input
                  type="date"
                  name="StartRegistrationDate"
                  className="input"
                  placeholder="Start Registration Date"
                />
              </fieldset>
              {/* 4 */}

              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">
                  End Registration Date
                </legend>
                <input
                  type="date"
                  name="EndRegistrationDate"
                  className="input"
                  placeholder="End Registration Date"
                />
              </fieldset>
              {/* 5 */}

              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Marathon Start Date</legend>
                <input
                  type="date"
                  name="MarathonStartDate"
                  className="input"
                  placeholder="Marathon Start Date"
                />
              </fieldset>

              {/* 6 */}

              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Running distance</legend>

                <div className="dropdown dropdown-top">
                  <div tabIndex={0} className="btn m-1">
                    <input
                      type="text"
                      name="RunningDistance"
                      className="input"
                      placeholder="Running distance"
                      value={runningDistance}
                      readOnly
                    />
                  </div>

                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a onClick={() => handleSelectCare("3k")}>3k</a>
                    </li>
                    <li>
                      <a onClick={() => handleSelectCare("10k")}>10k</a>
                    </li>
                    <li>
                      <a onClick={() => handleSelectCare("25k")}>25k</a>
                    </li>
                  </ul>
                </div>
              </fieldset>
              {/* 7 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Location</legend>
                <input
                  type="text"
                  name="Location"
                  className="input"
                  placeholder="Location"
                />
              </fieldset>

              {/* 8 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Description</legend>
                <input
                  type="text"
                  name="Description"
                  className="input"
                  placeholder="Description"
                />
              </fieldset>

              {/* 9 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">User Name</legend>
                <input
                  readOnly
                  type="text"
                  name="displayName"
                  value={user?.displayName || ""}
                  className="input"
                  placeholder="My awesome page"
                />
              </fieldset>
              {/* 10 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">User Email</legend>
                <input
                  readOnly
                  type="email"
                  name="email"
                  value={user?.email || ""}
                  className="input"
                  placeholder="My awesome page"
                />
              </fieldset>
            </div>
            <button type="submit" className="w-full btn text-2xl p-8 mb-20">
              Add Marathons
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddMarathon;
