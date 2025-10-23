import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import LogOut from "../NavBar/LogOut";
import { Link, useNavigate } from "react-router";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/dashboard/profile");
  };

  return (
    <div className=" shadow-md rounded-xl p-6 flex flex-col items-center max-w-sm mx-auto text-center">
      {/* Profile Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 mb-4">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName || "User"}
            className="w-full h-full object-cover"
          />
        ) : (
          <FaUserCircle className="w-full h-full text-gray-400" />
        )}
      </div>

      {/* User Details */}
      <h2 className="text-xl font-semibold text-gray-800">
        {user?.displayName || "Anonymous User"}
      </h2>
      <p className="text-gray-600">{user?.email || "No email provided"}</p>

      {/* Buttons */}
      <div className="mt-5 flex gap-3 w-full">
        <button
          onClick={handleProfile}
          className="flex-1 border text-white cursor-pointer font-bold bg-blue-400 rounded-sm transition-colors duration-300 transform"
        >
          Profile
        </button>
        <button className="flex-1   text-gray-600 transition-colors duration-300 transform">
          <LogOut />
        </button>
      </div>
    </div>
  );
}
