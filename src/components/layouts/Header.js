import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [key, setKey] = useState(localStorage.getItem("address"));

  const logout = () => {
    window.location = "/";
    window.localStorage.removeItem("address", false);
    window.localStorage.removeItem("cardlink", false);
  };
  return (
    <>
      <header className="flex flex-row items-center justify-between p-2 bg-gray-100 border-b-2 sm:justify-around">
        <a
          href="/"
          className="flex items-center h-10 px-10 italic font-bold uppercase rounded-tl-full rounded-br-full text-amber-300 white bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 hover:opacity-90"
        >
          USDC
        </a>
        <nav className="items-center justify-between hidden gap-4 font-semibold sm:flex">
          {key ? (
            <>
              <a onClick={logout} className="hover:text-gray-500">
                Logout
              </a>
            </>
          ) : (
            <>
              <a href="/signin" className="hover:text-gray-500">
                SignIn
              </a>
              <a href="/signup" className="hover:text-gray-500">
                SignUp
              </a>
            </>
          )}
        </nav>
        <nav className="flex flex-col items-end gap-1 font-semibold sm:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl font-bold sm:hidden hover:text-gray-500"
          >
            {showMenu ? <GrClose /> : <GiHamburgerMenu />}
          </button>
          {showMenu && (
            <>
              {key ? (
                <a onClick={logout} className="hover:text-gray-500">
                  Logout
                </a>
              ) : (
                <>
                  <a href="/signin" className="hover:text-gray-500">
                    SignIn
                  </a>
                  <a href="/signup" className="hover:text-gray-500">
                    SignUp
                  </a>
                </>
              )}
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
