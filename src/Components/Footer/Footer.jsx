import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black  py-7">
      <footer className=" grid lg:grid-cols-5 md:grid-cols-3 space-y-6 md:space-x-0 space-x-16 text-[#A1A1AA] max-w-11/12 mx-auto px-1.5 border-b-[1px] border-[#FAFAFA]">
        <div>
          <h2 className="font-bold text-[21px] text-white">
            CS — Ticket System
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="list-none md:px-16 space-y-2">
          <h6 className="font-semibold text-[20px] text-white">Company</h6>
          <li>About us</li>
          <li>Our Mission</li>
          <li>Contact Saled</li>
        </div>
        <div className="list-none space-y-2">
          <h6 className="font-semibold text-[20px] text-white">Services</h6>
          <li>Products & Services</li>
          <li>Customer Stories</li>
          <li>Download Apps </li>
        </div>
        <div className="list-none space-y-2">
          <h6 className="font-semibold text-[20px] text-white">Information</h6>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Join Us</li>
        </div>
        <div className="list-none space-y-2 lis">
          <h6 className="font-semibold text-[20px] text-white">Social Links</h6>
          <li>
            <i className="fa-brands fa-x-twitter"></i> @CS — Ticket System
          </li>
          <li>
            <i className="fa-brands fa-linkedin-in"></i> @CS — Ticket System
          </li>
          <li>
            <i className="fa-brands fa-facebook-f"></i> @CS — Ticket System
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i> support@cst.com
          </li>
        </div>
      </footer>
      <p className="text-[#A1A1AA] text-[18px] text-center my-4">
        © 2025 cs — Ticket System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;