import React, { use, useEffect } from "react";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const RegistrationForm = ({ marathon }) => {
  const { name, MarathonStartDate } = marathon || {};
  const {user} = use(AuthContext)
  console.log(typeof MarathonStartDate);

  const MarathonStartDateConvert = new Date(
    MarathonStartDate
  ).toLocaleDateString();

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const addMarathon = Object.fromEntries(formData.entries());
    // console.log(addMarathon);
    

    // Add registration to the db
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addMarathon),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Registration  Successfully", {
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
        }
      });
  };


    useEffect(() => {
    document.title = "Registration Form";
  }, []);

  return (
    <div>
      <div>
        <section className="p-6 overflow-scroll dark:bg-gray-100 dark:text-gray-900 mb-20 ">
          <h1 className="text-center font-extrabold text-xl lg:text-4xl mb-15">
            Registration Form
          </h1>
          <form
            onSubmit={handleAdd}
            className="container flex flex-col mx-auto space-y-12"
          >
            <div className="overflow-x-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
              {/* 1 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Marathon Title</legend>
                <input
                  readOnly
                  type="text"
                  name="displayName"
                  value={name}
                  className="input"
                  placeholder="My awesome page"
                />
              </fieldset>
              {/* 2 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Marathon Start Date</legend>
                <input
                  readOnly
                  type="text"
                  name="MarathonStartDateConvert"
                  value={MarathonStartDateConvert}
                  className="input"
                  placeholder="My awesome page"
                />
              </fieldset>
              {/* 3 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  type="firstName"
                  name="firstName"
                  className="input"
                  placeholder="First Name"
                />
              </fieldset>
              {/* 4 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  type="lastName"
                  name="lastName"
                  className="input"
                  placeholder="Last Name"
                />
              </fieldset>
              {/* 5 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Contact Number</legend>
                <input
                  type="number"
                  name="ContactNumber"
                 pattern="^(\+?88)?01[3-9]\d{8}$"
                  maxLength={11}
                  minLength={11}
                  className="input"
                  placeholder="Contact Number"
                />
              </fieldset>
              {/* 6 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Additional Info</legend>
                <input
                  type="text"
                  name="AdditionalInfo"
                  className="input"
                  placeholder="Additional Info"
                />
              </fieldset>

              {/* 7 */}
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
              Registered
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default RegistrationForm;
