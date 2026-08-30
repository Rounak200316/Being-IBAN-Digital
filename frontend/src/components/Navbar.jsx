import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { ServiceContext } from "../context/ServiceContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { getCartCount } = useContext(ServiceContext);

  const { isAuthenticated, user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  // -----------------------------
  // Logout
  // -----------------------------
  const handleLogout = () => {
    logout();

    setVisible(false);

    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium bg-[#322217] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      {/* LOGO */}
      <Link to="/">
        <img
          src={assets.logo}
          className="w-18 h-20"
          alt="Being Iban Digital"
        />
      </Link>


      {/* DESKTOP NAVIGATION */}
      <ul className="hidden sm:flex gap-5 text-sm text-[#f2ede9]">

        <NavLink
          to="/"
          className="flex flex-col items-center gap-1"
        >
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#f2ede9] hidden" />
        </NavLink>

        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1"
        >
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#f2ede9] hidden" />
        </NavLink>

        <NavLink
          to="/productpage"
          className="flex flex-col items-center gap-1"
        >
          <p>PRODUCTS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#f2ede9] hidden" />
        </NavLink>

        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1"
        >
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#f2ede9] hidden" />
        </NavLink>

      </ul>


      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">


        {/* PROFILE */}
        <div className="group relative">

          {isAuthenticated ? (

            <div>
              <img
                className="w-5 cursor-pointer"
                src={assets.profile_icon}
                alt="Profile"
              />

              {/* PROFILE DROPDOWN */}
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">

                <div className="flex flex-col gap-4 w-44 py-4 px-5 bg-[#e5d8c8] text-[#754e17]">

                  {/* USER NAME */}
                  {user?.name && (
                    <p className="text-xs font-bold uppercase tracking-wider border-b border-[#754e17]/20 pb-3">
                      {user.name}
                    </p>
                  )}

                  

                  {/* ORDERS */}
                  <Link to="/order">
                    <p className="cursor-pointer hover:text-black">
                      Orders
                    </p>
                  </Link>

                  {/* LOGOUT */}
                  <button
                    onClick={handleLogout}
                    className="text-left cursor-pointer hover:text-red-600"
                  >
                    Logout
                  </button>

                </div>

              </div>
            </div>

          ) : (

            /* NOT LOGGED IN */
            <Link to="/login">
              <img
                className="w-5 cursor-pointer"
                src={assets.profile_icon}
                alt="Login"
              />
            </Link>

          )}

        </div>


        {/* CART */}
        <Link
          to="/cart"
          className="relative"
        >

          <img
            src={assets.cart_icon}
            className="w-5 min-w-5"
            alt="Cart"
          />

          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 text-[#e5d8c8] bg-[#754e17] aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>

        </Link>


        {/* MOBILE MENU ICON */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />

      </div>


      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-[#e5d8c8] transition-all z-50 ${
          visible ? "w-full" : "w-0"
        }`}
      >

        <div className="flex flex-col text-[#754e17]">

          {/* BACK */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >

            <img
              className="h-5"
              src={assets.dropdown_icon}
              alt="Back"
            />

            <p>Back</p>

          </div>


          {/* HOME */}
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-2 pl-6 border-y border-[#754e17]"
          >
            HOME
          </NavLink>


          {/* ABOUT */}
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-2 pl-6 border-b border-[#754e17]"
          >
            ABOUT
          </NavLink>


          {/* PRODUCTS */}
          <NavLink
            onClick={() => setVisible(false)}
            to="/productpage"
            className="py-2 pl-6 border-b border-[#754e17]"
          >
            PRODUCTS
          </NavLink>


          {/* CONTACT */}
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-2 pl-6 border-b border-[#754e17]"
          >
            CONTACT
          </NavLink>


          {/* MOBILE AUTH */}
          {isAuthenticated ? (

            <>
              <NavLink
                onClick={() => setVisible(false)}
                to="/order"
                className="py-2 pl-6 border-b border-[#754e17]"
              >
                ORDERS
              </NavLink>

              <button
                onClick={handleLogout}
                className="text-left py-2 pl-6 border-b border-[#754e17] cursor-pointer"
              >
                LOGOUT
              </button>
            </>

          ) : (

            <NavLink
              onClick={() => setVisible(false)}
              to="/login"
              className="py-2 pl-6 border-b border-[#754e17]"
            >
              LOGIN
            </NavLink>

          )}

        </div>

      </div>

    </div>
  );
};

export default Navbar;

