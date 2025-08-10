import React, { use } from "react";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";
import { ThemeContext } from "../../Theme/ThemeContext";

const MarathonCard = ({ marathon }) => {
const {theme}=use(ThemeContext);

  const { photo, name, Location, _id, StartRegistrationDate, MarathonStartDate } = marathon || {};

  const formatDate = (date) =>
    new Date(date).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    //${theme === "dark" ? " bg-white" : "bg-base-200"}

  return (
    <tr className={`${theme === "dark" ? " bg-base-200" : "bg-base-200"}`}>
      {/* Photo */}
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={photo} alt={name} />
          </div>
        </div>
      </td>

      {/* Name */}
      <td>{name}</td>

      {/* Start Registration */}
      <td>
<span className="flex items-center gap-1">
          <GoClock />
        {formatDate(StartRegistrationDate)}
</span>
      </td>

      {/* Marathon Date */}
      <td className="flex items-center gap-1">
        <GoClock />
        {formatDate(MarathonStartDate)}
      </td>

      {/* Location (hidden on small screens) */}
      <td >
        <IoLocationOutline className="inline-block mr-1" />
        {Location}
      </td>

      {/* Details Button */}
      <td>
        <Link to={`/marathonDetails/${_id}`}>
          <button className="btn btn-xs btn-outline">Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default MarathonCard;
