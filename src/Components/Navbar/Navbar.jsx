import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar md:max-w-11/12 md:mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              <li>home</li>
              <li>FAQ</li>
              <li>Changelog</li>
              <li>Blog</li>
              <li>Download</li>
              <li>Contact</li>
              <a className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold">
                + New Ticket
              </a>
            </ul>
          </div>
            <a className="font-bold md:text-2xl text-[#130B2D] text-[14px]">
              CS — Ticket System
            </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-3 text-[16px]">
            <li>Home</li>
            <li>FAQ</li>
            <li>Changelog</li>
            <li>Blog</li>
            <li>Download</li>
            <li>Contact</li>
            <a className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold">
              + New Ticket
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;