import React, { use,  useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../../Context/AuthContext/AuthContext";
import animation from "/public/Animation.json";
import { Bounce, toast } from "react-toastify";
// import { Bounce, toast } from "react-toastify";

const TableBody = ({ marathon, handleDeleted, handleUpdateMarathon}) => {
  const [runningDistance, setRunningDistance] = useState("");
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const {
    name,
    photo,
    Location,
    _id,
    Description,
    EndRegistrationDate,
    MarathonStartDate,
    StartRegistrationDate,
  } = marathon || {};

  // Date conversion for display
  const StartRegistrationDateConvert = new Date(
    StartRegistrationDate
  ).toLocaleDateString();
  const EndRegistrationDateConvert = new Date(
    EndRegistrationDate
  ).toLocaleDateString();
  const MarathonStartDateConvert = new Date(
    MarathonStartDate
  ).toLocaleDateString();

  const handleBack = () => {
    navigate(-1);
  };
  if (!marathon || !marathon._id) {
    return (
      <div className="w-2/5 mx-auto ">
        <Lottie animationData={animation} />
        <div className="text-center mt-20  text-5xl">
          <button
            onClick={handleBack}
            className="btn mb-20 bg-green-700 text-white rounded-md"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  const remove = (id) => {
    handleDeleted(id);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateMarathons = Object.fromEntries(formData.entries());

    const allData = {
      ...updateMarathons,

      createdAt: new Date().toLocaleDateString(),
    };
    // console.log("Sent Data:", allData);
    // Send update marathon to the db
    fetch(`${import.meta.env.VITE_API_URL}/marathon/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          toast.success("Marathon Update Successfully", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
         // Update UI here
        handleUpdateMarathon(allData);
            // Optional: close modal
    document.getElementById("my_modal_6").checked = false;

// This reloads the entire page
    window.location.reload();
        }
      });
  };




  const handleSelectCare = (value) => {
    setRunningDistance(value);
  };

  return (
    <>
      <tr className="overflow-scroll">
        <td>
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={photo} alt="photo" />
            </div>
          </div>
        </td>
        <td className="">{name}</td>
        <td>{Location}</td>
        <td>
          <div className="card-actions md:flex justify-around">
            <label htmlFor="my_modal_6" className="btn btn-dash btn-success">
              <CiEdit size={20} />
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                {/* from start */}

                <div>
                  <section className={` overflow-scroll table`}>
                    <form
                      onSubmit={handleUpdate}
                      className="container overflow-hidden flex flex-col mx-auto "
                    >
                      <div className="grid grid-cols-1 gap-6 mx-auto  rounded-md shadow-sm dark:bg-gray-50">
                        {/* 1 */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                          <legend className="fieldset-legend">
                            Marathon Image
                          </legend>
                          <input
                            type="photoURL"
                            name="photo"
                            defaultValue={photo}
                            className="input"
                            placeholder="Marathon Image URL"
                          />
                        </fieldset>
                        {/* 2 */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                          <legend className="fieldset-legend">
                            Marathon Title
                          </legend>
                          <input
                            type="text"
                            defaultValue={name}
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
                            defaultValue={StartRegistrationDateConvert}
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
                            defaultValue={EndRegistrationDateConvert}
                            className="input"
                            placeholder="End Registration Date"
                          />
                        </fieldset>
                        {/* 5 */}

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                          <legend className="fieldset-legend">
                            Marathon Start Date
                          </legend>
                          <input
                            type="date"
                            name="MarathonStartDate"
                            defaultValue={MarathonStartDateConvert}
                            className="input"
                            placeholder="Marathon Start Date"
                          />
                        </fieldset>

                        {/* 6 */}

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                          <legend className="fieldset-legend">
                            Running distance
                          </legend>

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
                                <a onClick={() => handleSelectCare("10k")}>
                                  10k
                                </a>
                              </li>
                              <li>
                                <a onClick={() => handleSelectCare("25k")}>
                                  25k
                                </a>
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
                            defaultValue={Location}
                            placeholder="Location"
                          />
                        </fieldset>

                        {/* 8 */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                          <legend className="fieldset-legend">
                            Description
                          </legend>
                          <input
                            type="text"
                            name="Description"
                            defaultValue={Description}
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
                          <legend className="fieldset-legend">
                            User Email
                          </legend>
                          <input
                            readOnly
                            type="email"
                            name="email"
                            value={user?.email || ""}
                            className="input"
                            placeholder="My awesome page"
                          />
                        </fieldset>
                      <button
                        type="submit"
                        className="btn text-2xl"
                      >
                        Update Marathon
                      </button>
                      </div>
                    </form>
                  </section>
                </div>

                {/* Close button */}
                <div className="modal-action">
                  <label htmlFor="my_modal_6" className="btn">
                    Close!
                  </label>
                </div>
              </div>
            </div>

            <button
              onClick={() => remove(_id)}
              className="btn btn-dash btn-error"
            >
              <MdDelete size={20} />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableBody;
