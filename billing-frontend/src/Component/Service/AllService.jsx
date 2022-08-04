import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllService = () => {
  const [service, setService] = useState();

  const fetchData = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}services`)
      .then((d) => setService(d.data.data));
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}services/${id}`)
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
              <th>Description</th>
              <th>Rate</th>
              <th>HSN/SAC</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {service?.map((serv) => (
              <tr key={serv.id}>
                <th>{serv.id} </th>
                <td className="text-center">{serv.name}</td>
                <td className="text-center">{serv.description}</td>
                <td className="text-center"> {serv.rate} </td>
                <td className="text-center"> {serv.HSN_SAC}</td>
                <td className="flex justify-center text-center">
                  <Link
                    className="bg-slate-400 p-1 rounded-sm text-white"
                    to={`/services/${serv.id} `}
                  >
                    Edit
                  </Link>

                  <button
                    className="bg-slate-400 p-1 rounded-sm text-white"
                    onClick={deleteHandler.bind(null, serv.id)}
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

export default AllService;
