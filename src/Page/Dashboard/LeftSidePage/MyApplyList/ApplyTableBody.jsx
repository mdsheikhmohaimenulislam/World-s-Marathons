import React, { use } from "react";
import { AuthContext } from "../../../../Context/AuthContext/AuthContext";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const ApplyTableBody = ({ userData }) => {

    const {user } = use(AuthContext)
  const {
    displayName,
    firstName,
    lastName,
    email,
    ContactNumber,
    MarathonStartDateConvert,
    AdditionalInfo,
  } = userData || {};

  console.log(userData);

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
                            //   onSubmit={}
                              className="container overflow-hidden flex flex-col mx-auto space-y-12"
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
                                    // defaultValue={}
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
                                    // defaultValue={name}
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
                                    // defaultValue={StartRegistrationDateConvert}
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
                                    // defaultValue={EndRegistrationDateConvert}
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
                                    // defaultValue={MarathonStartDateConvert}
                                    className="input"
                                    placeholder="Marathon Start Date"
                                  />
                                </fieldset>
        
                               
                                {/* 7 */}
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                                  <legend className="fieldset-legend">Location</legend>
                                  <input
                                    type="text"
                                    name="Location"
                                    className="input"
                                    // defaultValue={Location}
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
                                    // defaultValue={Description}
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
                              </div>
                              <button
                                type="submit"
                                className="w-full btn text-2xl p-8 mb-20"
                              >
                                Update Marathon
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
                    //   onClick={() => remove(_id)}
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

export default ApplyTableBody;
