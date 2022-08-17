import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AllInvoices = () => {
  const [invoices, setinvoices] = useState();
  const navigate = useNavigate();

  const fetchData = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}invoice`)
      .then((d) => setinvoices(d.data.data));
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}invoice/${id}`)
      .then((d) => {
        navigate("/invoice/allInvoices", { replace: true });
        console.log(d.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div className="overflow-x-auto p-10 w-screen flex">
        <table className="table w-full border-separate border-spacing-3">
          <thead>
            <tr>
              <th>Id</th>
              <th>Invoice No</th>
              <th>Header</th>
              <th>Foreign Currency</th>
              <th>Billing Period</th>
              <th>Sub Total</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices?.map((inv, i) => (
              <tr key={inv.id}>
                <th>{i + 1}</th>
                <td className="text-center">{inv.invoice_no} </td>
                <td className="text-center">{inv.header}</td>
                <td className="text-center"> {inv.foreign_currency}</td>
                <td className="text-center">{inv.billing_period}</td>
                <td className="text-center">{inv.subtotal}</td>
                <td className="text-center">{inv.createdAt.slice(0, 10)}</td>

                <td className="flex justify-center text-center">
                  <Link
                    className="bg-slate-400 p-1 rounded-sm text-white mr-2"
                    to={`/invoice/showInvoice/${inv.id}`}
                  >
                    View
                  </Link>

                  <button
                    className="bg-slate-400 p-1 rounded-sm text-white"
                    onClick={deleteHandler.bind(null, inv.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllInvoices;
