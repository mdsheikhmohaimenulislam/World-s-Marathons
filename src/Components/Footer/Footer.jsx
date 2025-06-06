import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {


      const { googleHandle } = use(AuthContext);


 // google set up
  const googleSignInHandle = () => {
    googleHandle()
      .then((res) => {
        console.log(res);

        toast.success("Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      })
      .catch((error) => {
        console.log(error);
      });
  };




  return (
    <div>
      <footer className={`footer footer-horizontal footer-center text-base-content rounded p-10 bg-base-300`}>
            <div className="flex items-center">
              <img
                className="-ml-6 md:ml-0 w-[60px] h-[50px]"
                src="https://i.ibb.co/MyfMc8Ks/png-transparent-walt-disney-world-marathon-disneyland-paris-disneyland-resort-rundisney-marathon-mis.png"
                alt=""
              />
              <h1 className="ml-0 text-2xl font-extrabold">World's Marathons</h1>
            </div>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Description</a>

        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
        <button
            onClick={googleSignInHandle}
            aria-label="Log in with Google"
            className="rounded-sm cursor-pointer"
          >
<FcGoogle size={30} />
          </button>
            <a>
              
              <IoLogoYoutube className="text-red-600" size={30} />
            </a>
            <a>
             <FaFacebook size={30} className="text-blue-600" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
