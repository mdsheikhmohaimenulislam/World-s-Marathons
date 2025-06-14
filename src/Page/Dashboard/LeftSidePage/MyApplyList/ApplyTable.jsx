import React, { use } from "react";
import { AuthContext } from "../../../../Context/AuthContext/AuthContext";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

const ApplyTable = ({ userData, handleDeleted }) => {
  const { user } = use(AuthContext);
  const {
    displayName,
    firstName,
    lastName,
    email,
    ContactNumber,
    MarathonStartDateConvert,
    AdditionalInfo,
    _id,
  } = userData || {};

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateApply = Object.fromEntries(formData.entries());
    console.log(updateApply);

    // Send update User Apply to the db
    fetch(`${import.meta.env.VITE_API_URL}/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateApply),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("User Apply Update Successfully", {
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
          // handleUpdateMarathon(allData);
          // Optional: close modal
          document.getElementById("my_modal_6").checked = false;

          // This reloads the entire page
          window.location.reload();
        }
      });
  };

  const remove = (id) => {
    handleDeleted(id);
  };

  const MarathonStartDate = new Date(
    MarathonStartDateConvert
  ).toLocaleDateString();

  console.log(typeof MarathonStartDate);

  return (
    <>
      <tr>
        <td>{displayName}</td>
        <td className="">{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{ContactNumber}</td>
        <td>{MarathonStartDateConvert}</td>
        <td>{AdditionalInfo}</td>
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

                <div className="mb-20">
                  <section className={` overflow-scroll table mb-20  `}>
                    <form
                      onSubmit={handleApply}
                      className="container overflow-hidden flex flex-col mx-auto space-y-12"
                    >
                      <div className="grid grid-cols-1 gap-6 mx-auto  rounded-md shadow-sm dark:bg-gray-50">
                        {/* 1 */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                          <legend className="fieldset-legend">
                            Marathon Title
                          </legend>
                          <input
                            type="text"
                            defaultValue={displayName}
                            name="displayName"
                            className="input"
                            placeholder="Marathon Title"
                            readOnly
                          />
                        </fieldset>
                        {/* 2 */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                          <legend className="fieldset-legend">
                            Marathon Title
                          </legend>
                          <input
                            type="text"
                            defaultValue={firstName}
                            name="firstName"
                            className="input"
                            placeholder="First Name"
                          />
                        </fieldset>
                        {/* 3 */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                          <legend className="fieldset-legend">
                            Marathon Title
                          </legend>
                          <input
                            type="text"
                            defaultValue={lastName}
                            name="lastName"
                            className="input"
                            placeholder="Last Name"
                          />
                        </fieldset>

                        {/* 4 */}

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                          <legend className="fieldset-legend">
                            Marathon Start Date
                          </legend>
                          <input
                            type="text"
                            name="MarathonStartDate"
                            defaultValue={MarathonStartDate}
                            className="input"
                            placeholder="Marathon Start Date"
                            readOnly
                          />
                        </fieldset>

                        {/* 6 */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                          <legend className="fieldset-legend">
                            Contact Number
                          </legend>
                          <input
                            type="text"
                            name="ContactNumber"
                            defaultValue={ContactNumber}
                            className="input"
                            placeholder="Contact Number"
                          />
                        </fieldset>
                        {/* 7 */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                          <legend className="fieldset-legend">
                            Additional Info
                          </legend>
                          <input
                            type="text"
                            name="AdditionalInfo"
                            defaultValue={AdditionalInfo}
                            className="input"
                            placeholder="Additional Info"
                          />
                        </fieldset>

                        {/* 8 */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                          <legend className="fieldset-legend">User Name</legend>
                          <input
                            readOnly
                            type="text"
                            name="userName"
                            value={user?.displayName || ""}
                            className="input"
                            placeholder="My awesome page"
                          />
                        </fieldset>
                        {/* 9 */}
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
                      </div>
                      <button
                        type="submit"
                        className="w-full btn text-2xl p-8 mb-20"
                      >
                        Update Apply
                      </button>
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

export default ApplyTable;
