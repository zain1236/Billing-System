import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditService = () => {
  const [service, setService] = useState();

  const params = useParams();
  const navigate = useNavigate();

  const fetchData = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}services/${params.id}`)
      .then((d) => setService(d.data.data));
  }, [params]);

  const handleSubmit = (e) => {
    e.preventDefault();
    service.companyId = localStorage.getItem("company");

    console.log(service);
    axios
      .put(`${process.env.REACT_APP_BASE_URL}services/${params.id}`, service)
      .then((d) => {
        console.log(d);
        navigate("/services", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main className="flex justify-center p-3">
      <div className="min-h-[700px] w-[1000px] bg-slate-400 p-10 rounded-md flex flex-col justify-center items-center">
        <h1 className="text-2xl underline text-white font-semibold">
          Edit Service
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
              defaultValue={service?.name}
              onChange={(e) => setService({ ...service, name: e.target.value })}
            />
          </div>

          <div className="mt-3">
            <textarea
              name="description"
              placeholder="Description"
              id="description"
              cols="30"
              rows="10"
              defaultValue={service?.description}
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
              defaultValue={service?.rate}
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
              placeholder="HSN/SAC - 998319"
              name="HSN_SAC"
              id="HSN_SAC"
              className="rounded-sm p-1 border-none outline-none ml-2"
              required
              disabled
              defaultValue={service?.HSN_SAC}
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

export default EditService;
