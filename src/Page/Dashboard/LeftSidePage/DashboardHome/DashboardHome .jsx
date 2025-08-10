import { useContext, useEffect, useState } from "react";
import { FaRunning, FaClipboardList } from "react-icons/fa";

import { IoIosAddCircleOutline } from "react-icons/io";
import { getAllMarathons } from "../../../../Api/MarathonApi";
import { AuthContext } from "../../../../Context/AuthContext/AuthContext";
import UserGetAllUserApi from "../../../../Api/UserGetAllUserApi";



const DashboardHome = () => {
  const [marathons, setMarathons] = useState([]);
  const [myMarathons, setMyMarathon] = useState([]);
  const [applyUser, setApplyUser] = useState([]);
  const [allApplyUser, setAllApplyUser] = useState([]);
  const { user } = useContext(AuthContext);
  const { getAllUser2 } = UserGetAllUserApi();


  useEffect(() => {
    getAllMarathons()
      .then((data) => setMarathons(data))
      .catch((err) => console.error("Error fetching marathons:", err.message));

    // All Apply list data
    const fetchAllApplyList = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/user`);
        const data = await res.json(); // parse JSON
        setAllApplyUser(data); //  now it's the actual data
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchAllApplyList();
    document.title = "Dashboard";
  }, []);

  //  Filter when marathons or user changes
  useEffect(() => {
    if (!user?.email) return;
    const filtered = marathons.filter((m) => m.email === user.email);
    setMyMarathon(filtered);

    // filter apply user data
    const fetchUsers = async () => {
      try {
        const data = await getAllUser2(user.email);
        const filtered = data.filter((item) => item.email === user.email);
        setApplyUser(filtered);
      } catch (error) {
        console.error("Axios error:", error);
        setApplyUser([]);
      }
    };
    fetchUsers();
  }, [marathons, user?.email]);


  return (
    <div >
      <div className="mt-2">
        {/* small cards */}
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-grow">
          {/* Sales Card */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center text-white from-blue-300 to-blue-400  shadow-blue-500/40`}
            >
              <IoIosAddCircleOutline size={25} />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total Marathon
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {marathons.length}
              </h4>
            </div>
          </div>
          {/* Total Orders */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-300 to-blue-400 text-white shadow-blue-500/40`}
            >
              <FaRunning size={25} />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                My Marathon list
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {myMarathons.length}
              </h4>
            </div>
          </div>
          {/* Users Card */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center  from-blue-300 to-blue-400 text-white shadow-blue-500/40`}
            >
              <FaClipboardList size={25} />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total Apply List
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {allApplyUser.length}
              </h4>
            </div>
          </div>

          {/* Total Plants */}

          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-300 to-blue-400 text-white shadow-blue-500/40`}
            >
              <FaClipboardList size={25} />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                My Apply List
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {applyUser.length}
              </h4>
            </div>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {/*Sales Bar Chart */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
            {/* Chart goes here.. */}
          </div>
          {/* Calender */}
          <div className=" relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
            {/* Calender */}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
