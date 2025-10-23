import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center shadow-2xl">
        <img
          className="-ml-6 md:ml-0 w-[30px] h-[30px]"
          src="https://i.ibb.co/MyfMc8Ks/png-transparent-walt-disney-world-marathon-disneyland-paris-disneyland-resort-rundisney-marathon-mis.png"
          alt=""
        />
        <h1 className="ml-0 text-xl font-extrabold">World's Marathons</h1>
      </div>
    </Link>
  );
};

export default Logo;
