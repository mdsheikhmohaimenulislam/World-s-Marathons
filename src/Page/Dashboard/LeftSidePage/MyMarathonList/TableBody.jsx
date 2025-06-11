import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const TableBody = ({ marathon , handleDeleted}) => {
  const { name, photo, Location , _id} = marathon || {};

    const remove = (id) => {
    handleDeleted(id);
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
          <Link to={`/updatePlant/${_id}`}>
            <button className="btn btn-dash btn-success">
              <CiEdit size={20} />
            </button>
          </Link>
          <button onClick={() => remove(_id)} className="btn btn-dash btn-error">
            <MdDelete size={20} />
          </button>
        </div>
      </td>
      </tr>
    </>
  );
};

export default TableBody;
