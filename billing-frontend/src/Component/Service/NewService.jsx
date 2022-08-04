import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewService = () => {
  const naviagate = useNavigate();
  const [service, setService] = useState({
    name: "",
    description: "",
    rate: 0,
    HSN_SAC: 99319,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BASE_URL}services`, service)
      .then((d) => {
        console.log(d);
        naviagate("/services");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="flex justify-center p-3">
      <div className="min-h-[700px] w-[1000px] bg-slate-400 p-10 rounded-md flex flex-col justify-center items-center">
        <h1 className="text-2xl underline text-white font-semibold">
          Add Service
        </h1>
        <form className="m-10 flex flex-col" onSubmit={handleSubmit}>
          <div className="mt-3">
            <input
              type="text"
              name="name"
              placeholder="Name of Service"
              id="name"
              className="rounded-sm p-1 border-none outline-none ml-2"
              required
              onChange={(e) => setService({ ...service, name: e.target.value })}
            />
          </div>

          <div className="mt-3">
            <textarea
              required
              name="description"
              placeholder="Description"
              id="description"
              cols="30"
              rows="10"
              onChange={(e) =>
                setService({ ...service, description: e.target.value })
              }
            ></textarea>
          </div>

          <div className="mt-3">
            <input
              required
              type="number"
              placeholder="Rate"
              name="rate"
              id="rate"
              className="rounded-sm p-1 border-none outline-none ml-2"
              onChange={(e) => setService({ ...service, rate: e.target.value })}
            />
          </div>

          <div className="mt-3">
            <label for="HSN_SAC" className="text-white">
              {" "}
              HSN/SAC{" "}
            </label>
            <input
              type="text"
              value="99319"
              placeholder="HSN/SAC - 99319"
              name="HSN_SAC"
              id="HSN_SAC"
              className="rounded-sm p-1 border-none outline-none ml-2"
              required
              disabled
            />
          </div>
          <button className="mt-10 bg-indigo-500 hover:bg-indigo-600 px-5 py-3 rounded-md text-white">
            SUBMIT
          </button>
        </form>
      </div>
    </main>
  );
};

export default NewService;
