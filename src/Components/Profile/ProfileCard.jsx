import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import LogOut from "../NavBar/LogOut";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-lg mx-auto">
      {/* Top section: Image, Name, Email */}
      <div className="flex items-center gap-6 border-b pb-4">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
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
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">
            {user?.displayName || "Anonymous User"}
          </h2>
          <p className="text-gray-600">{user?.email || "No email provided"}</p>

        </div>
      </div>

      {/* Extra Profile Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Profile Details
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            {user?.phoneNumber || "Not Provided"}
          </p>
          <p>
            <span className="font-semibold">Account Created:</span>{" "}
            {user?.metadata?.creationTime
              ? new Date(user.metadata.creationTime).toLocaleDateString()
              : "Unknown"}
          </p>
          <p>
            <span className="font-semibold">Last Sign-In:</span>{" "}
            {user?.metadata?.lastSignInTime
              ? new Date(user.metadata.lastSignInTime).toLocaleString()
              : "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
}
