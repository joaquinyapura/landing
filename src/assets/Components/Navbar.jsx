import { React, useState } from "react";
import { Menu, X } from "lucide-react";
import LogoBrand from "../logo.png";
import { navItems } from "../../Constants";

export const Navbar = () => {
  const [mobileToggle, setmobiletoggle] = useState(false);

  const handletoggle = () => {
    setmobiletoggle(!mobileToggle);
  };

  return (
    <nav className="sticky top-0 py-4 border-b border-b-gray-500 backdrop-blur-lg">
      <div className="container px-6 mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo">
            <img src={LogoBrand} width={30} alt="" />
          </div>
          <ul className=" hidden lg:flex w-52 justify-between gap-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-orange-300 transition-all ease-out duration-500"
              >
                <a href={item.href}> {item.label} </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center gap-5">
            <a href="#" className="border-gray-400 border-2 rounded-md p-2 ">
              Sing in
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-700 to-orange-800 px-5 rounded-md p-2 "
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={handletoggle}>
              {mobileToggle ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileToggle && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-orange-300 transition-all ease-out duration-500 py-4"
                >
                  <a href={item.href}> {item.label} </a>
                </li>
              ))}
            </ul>
            <div className="lg:hidden flex gap-5">
              <a
                href="#"
                className="border-gray-400 border-2 rounded-md px-4 py-1 "
              >
                Sing in
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-700 to-orange-800  rounded-md px-4 py-1 "
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
