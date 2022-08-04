import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="h-[100px] bg-black flex justify-center items-center">
        <span className="text-2xl font-semibold text-white text-center">
          Billing Management System
        </span>
      </header>

      <ul className="p-2 w-full bg-slate-400 flex text-white">
        <li className="mr-4">
          <Link to="/customer/newCustomer" className="">
            Add Customer
          </Link>
        </li>
        <li className="mr-4">
          <Link to="/customer"> All Customer</Link>
        </li>
        <li className="mr-4">
          <Link to="/services/newService"> Add Services</Link>
        </li>
        <li className="mr-4">
          <Link to="/services"> All Services</Link>
        </li>
        <li className="mr-4">
          <Link to="/invoice/newInvoice"> New Invoice</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
