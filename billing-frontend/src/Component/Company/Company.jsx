import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Company = () => {
  const [companies, setCompanies] = useState();
  const [company, setCompany] = useState();
  const fetchCompanies = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}company`)
      .then((d) => {
        setCompanies(d.data);
        console.log(d.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  const navigate = useNavigate();

  const submitHandler = () => {
    localStorage.setItem("company", company);

    if (!company) {
      navigate("/");
      alert("Please Add a Company");
    } else {
      navigate("/customer");
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  return (
    <div className="w-full min-h-full flex justify-center ">
      <div className="w-[700px] min-h-[400px] bg-slate-500 mt-10 rounded-md flex flex-col items-center p-2">
        <h1 className="text-2xl text-white font-semibold mt-10">
          Select Company
        </h1>

        <select
          name=""
          id=""
          defaultValue={"DEFAULT"}
          className="mt-20 w-34 text-black"
          onChange={(e) => setCompany(e.target.value)}
        >
          <option value="DEFAULT">-- Select Company -- </option>
          {companies?.map((comp, i) => (
            <option key={i} value={comp.id}>
              {comp.website}
            </option>
          ))}
        </select>
        <button
          className="px-3 py-2 bg-indigo-500 text-white rounded-md mt-4"
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Company;
