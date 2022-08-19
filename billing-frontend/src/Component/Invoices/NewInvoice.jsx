import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const NewInvoice = () => {
  const [customers, setCustomers] = useState();
  const [service, setService] = useState();
  const services = useState([])[0];
  const [render, setRender] = useState(0);

  const { handleSubmit, register } = useForm();

  const navigate = useNavigate();

  const onSubmit = (values) => {
    let id = 0;
    let subtotal = 0;
    while (true) {
      const service = "service" + id;
      const rate = "rate" + id;
      const foreignRate = "foreignRate" + id;
      if (values[service] && values[rate]) {
        const s = +values[service];
        const r = +values[rate];
        const fr = +values[foreignRate];

        const obj = {
          serviceId: s,
          rate: r,
          forignRate: fr,
        };

        subtotal += +values[rate];

        services.push(obj);
      } else {
        break;
      }

      id += 1;
    }
    const data = {
      ...values,
      services,
      subtotal,
      companyId: localStorage.getItem("company"),
    };

    axios.post(`${process.env.REACT_APP_BASE_URL}invoice`, data).then((d) => {
      navigate(`/invoice/showInvoice/${d.data.data.id}`);
      console.log(d.data.data);
    });
    subtotal = 0;
  };

  const fetchCustomers = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}customer`)
      .then((d) => setCustomers(d.data.data))
      .catch((err) => console.log(err));
  }, []);
  const fetchServices = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}services`)
      .then((d) => setService(d.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetchCustomers();
    fetchServices();
  }, [fetchCustomers, fetchServices]);

  const servicesComp = (key) => (
    <div className="flex mt-5 justify-around" key={key}>
      <select
        name=""
        id=""
        defaultValue="DEFAULT"
        {...register("service" + key)}
      >
        <option value="DEFAULT" disabled>
          -- Select Service --
        </option>
        {service?.map((s, i) => (
          <option value={s.id} key={i}>
            {s.name} -- {s.rate}
          </option>
        ))}
      </select>

      <input
        placeholder="Custom rate"
        type="number"
        className="rounded-sm px-1 border-none outline-none"
        {...register("rate" + key)}
      />
      <input
        placeholder="Foreign rate (Optional)"
        type="number"
        className="rounded-sm px-1 border-none outline-none"
        {...register("foreignRate" + key)}
      />
    </div>
  );

  return (
    <main className="flex justify-center mt-20">
      <form
        className="min-h-[700px] w-[1000px] bg-slate-400 p-10 rounded-md my-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl underline text-white font-semibold">
          Add Invoice
        </h1>

        <div className="m-10 flex flex-col ">
          <input
            type="text"
            name="header"
            placeholder="Header"
            id="header"
            className="rounded-sm p-1 border-none outline-none "
            required
            {...register("header")}
          />

          <input
            placeholder="Invoice No. (Optional)"
            type="text"
            className="rounded-sm p-1 border-none outline-none my-3"
            {...register("invoice_no")}
          />

          <input
            placeholder="Foreign Currency"
            type="text"
            className="rounded-sm p-1 border-none outline-none"
            {...register("foreign_currency")}
          />

          <input
            placeholder="Billing Period"
            type="text"
            className="rounded-sm p-1 border-none outline-none my-3"
            {...register("billing_period")}
          />

          <select
            name=""
            id=""
            className="py-1 "
            {...register("customer")}
            defaultValue="DEFAULT"
          >
            <option value="DEFAULT" disabled>
              -- Select Customer --
            </option>
            {customers?.map((cust, i) => (
              <option value={cust.id} key={i}>
                {cust.name} - {cust.custType}
              </option>
            ))}
          </select>

          <div className="w-full flex flex-col mr-auto text-xl mt-10 ">
            <h1 className="text-white  font-semibold">Add Services</h1>
            <div className="flex mr-auto">
              <button
                type="button"
                className="btn btn-primary mr-3 "
                onClick={() => {
                  setRender(render + 1); //
                }}
              >
                + Add
              </button>
              {render > 0 && (
                <button
                  type="button"
                  className="btn btn-error text-white"
                  onClick={() => {
                    setRender(render - 1);
                  }}
                >
                  - Remove
                </button>
              )}
            </div>
            {[...Array(render)].map((elementInArray, i) => servicesComp(i))}
          </div>

          <button
            type="submit"
            className=" btn mt-10 border-none bg-indigo-500 hover:bg-indigo-600 px-5 py-3 rounded-md text-white"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </main>
  );
};

export default NewInvoice;
