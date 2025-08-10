import React, { useEffect, useState } from "react";
import MarathonCard from "./MarathonCard";
import { getAllMarathons } from "../../Api/MarathonApi";

const Marathons = () => {
  const [marathons, setMarathons] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    getAllMarathons()
      .then((data) => setMarathons(data))
      .catch((err) => console.error("Error fetching marathons:", err.message));

    document.title = "Marathons";
  }, []);

  // Filtered and sorted marathons
  const filteredMarathons = marathons
    .filter((m) => m.name?.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const dateA = new Date(a.StartRegistrationDate);
      const dateB = new Date(b.StartRegistrationDate);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 px-4 mt-10">
        {/* Search Input */}
        <div className="flex items-center w-full md:w-1/2 relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            className="input input-bordered w-full pl-10"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search marathon name"
          />
        </div>

        {/* Sort Button */}

        <button
          className="btn  btn-sm btn-outline whitespace-nowrap"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          {sortOrder === "asc" ? "Sort: Ascending" : "Sort: Descending"}
        </button>
      </div>

      {/* Table Section */}
      <section className="mt-6">
        <div className="overflow-x-auto">
          <table className="table table-zebra mb-10">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Start Registration</th>
                <th>Marathon Date</th>
                <th className="hidden lg:table-cell">Location</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredMarathons.map((marathon) => (
                <MarathonCard key={marathon._id} marathon={marathon} />
              ))}
              {filteredMarathons.length === 0 && (
                <tr>
                  <td>
                    <span className="loading ml-30 lg:ml-130 mt-20 loading-ring loading-xl"></span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Marathons;
