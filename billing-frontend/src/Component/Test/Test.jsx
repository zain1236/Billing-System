import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

import { useForm } from "react-hook-form";

const Test = () => {
  const [render, setRender] = useState(0);
  const [service, setService] = useState();
  const [services, setServices] = useState([]);

  const onSubmit = (values) => {
    let id = 0;
    while (true) {
      const service = "service" + id;
      const rate = "rate" + id;
      const foreignRate = "foreignRate" + id;

      if (values[service] && values[rate]) {
        // console.log(service, values[service]);

        const s = values[service];
        const r = values[rate];
        const fr = values[foreignRate];
        const obj = {
          service: s,
          rate: r,
          foreignRate: fr,
        };
        services.push(obj);

        console.log(services)
      } else {
        break;
      }
      id += 1;
    }
    console.log(values);
  };
  const { handleSubmit, register } = useForm();

  const name = "username";

  const fetchServices = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}services`)
      .then((d) => setService(d.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const servicesComp = (key) => (
    // const
    <div className="flex mt-5 justify-around" key={key}>
      {console.log(key)}
      <select
        name=""
        id=""
        {...register(`service${key}`)}
        defaultValue="DEFAULT"
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
        placeholder="Custom rate (Optional)"
        type="number"
        className="rounded-sm px-1 border-none outline-none"
        {...register(`rate${key}`)}
      />
      <input
        placeholder="Foreign rate (Optional)"
        type="number"
        className="rounded-sm px-1 border-none outline-none"
        {...register(`foreignRate${key}`)}
      />
    </div>
  );

  return (
    <div className="p-10">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        {}
        <input type="text" className="my-4 w-[400px]" {...register(name)} />
        <input
          type="password"
          className="my-4 w-[400px]"
          {...register("password")}
        />

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
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Test;
