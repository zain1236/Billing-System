import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCustomer = () => {
  const [customer, setCustomer] = useState();

  const fetchData = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}customer`)
      .then((d) => setCustomer(d.data.data));
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}customer/${id}`)
      .then((d) => console.log(d))
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
              <th>Name</th>
              <th>Customer Type</th>
              <th>Place of Supply</th>
              <th>GST Treatment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customer?.map((cust) => (
              <tr key={cust.id}>
                <th>{cust.id}</th>
                <td className="text-center">{cust.name} </td>
                <td className="text-center">{cust.custType}</td>
                <td className="text-center"> {cust.placeofsupply}</td>
                <td className="text-center">{cust.GST_treatement}</td>
                <td className="flex justify-center text-center">
                  <Link
                    className="bg-slate-400 p-1 rounded-sm text-white mr-2"
                    to={`/customer/${cust.id}`}
                  >
                    Edit
                  </Link>

                  <button
                    className="bg-slate-400 p-1 rounded-sm text-white"
                    onClick={deleteHandler.bind(null, cust.id)}
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

export default AllCustomer;
