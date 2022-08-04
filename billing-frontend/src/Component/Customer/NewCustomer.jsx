import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCustomer = () => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    custType: "",
    name: " ",
    email: "",
    mobile: "",
    website: "",
    pan: "",
    GST_treatment: "",
    GST_IN: "",
    country: " ",
    state: "",
    city: " ",
    zipcode: 0,
  });
  const data = {
    custType: customer.custType,
    name: customer.name,
    email: customer.email,
    mobile: customer.website,
    website: customer.website,
    pan: customer.pan,
    GST_treatement: customer.GST_treatment,
    GST_IN: customer.GST_IN,
    country: customer.country,
    state: customer.state,
    city: customer.city,
    zipcode: customer.zipcode,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}customer`, data)
      .then((d) => {
        console.log(d);
        navigate("/customer", { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <main className="flex justify-center mt-20">
      <div className="min-h-[700px] w-[1000px] bg-slate-400 p-10 rounded-md">
        <h1 className="text-2xl underline text-white font-semibold">
          Add Customer
        </h1>

        <form
          onSubmit={handleSubmit}
          className="m-10 flex flex-col justify-center items-center"
        >
          <label for="custType"> Customer Type </label>
          <select
            name="custType"
            id="custType"
            onChange={(e) =>
              setCustomer({ ...customer, custType: e.target.value })
            }
          >
            <option value="" disabled selected>
              {" "}
              -- Select --{" "}
            </option>
            <option value="Business">Business</option>
            <option value="Individual">Individual</option>
          </select>
          <div className="mt-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              className="rounded-sm p-1 border-none outline-none ml-2"
              required
              onChange={(e) =>
                setCustomer({ ...customer, name: e.target.value })
              }
            />
          </div>
          {/* <!-- optional --> */}

          <div className="mt-3">
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              className="rounded-sm p-1 border-none outline-none ml-2"
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
            />
          </div>

          <div className="flex items-center mt-3">
            <input
              type="text"
              placeholder="Mobile"
              name="mobile"
              id="mobile"
              className="rounded-sm p-1 border-none outline-none ml-2"
              onChange={(e) =>
                setCustomer({ ...customer, mobile: e.target.value })
              }
            />
          </div>

          <div className="mt-3">
            <input
              type="text"
              placeholder="Website"
              name="website"
              id="website"
              className="rounded-sm p-1 border-none outline-none ml-2"
              onChange={(e) =>
                setCustomer({ ...customer, website: e.target.value })
              }
            />
          </div>

          <div className="mt-3">
            <input
              type="text"
              placeholder="Pan"
              name="pan"
              id="pan"
              className="rounded-sm p-1 border-none outline-none ml-2"
              onChange={(e) =>
                setCustomer({ ...customer, pan: e.target.value })
              }
            />
          </div>
          {/* <!-- //optional --> */}

          <div className="mt-3">
            <label for="GST_treatement">GST treatment</label>
            <select
              name="GST_treatement"
              id="GST_treatement"
              onChange={(e) =>
                setCustomer({ ...customer, GST_treatment: e.target.value })
              }
            >
              <option value="" disabled selected>
                {" "}
                -- Select --{" "}
              </option>
              <option value="Registered">Registered Business - Regular</option>
              <option value="Unregistered">Unregistered Business</option>
              <option value="Overseas">Overseas</option>
            </select>
          </div>

          <div className="mt-3">
            <input
              type="text"
              placeholder="GST IN"
              name="GST_IN"
              id="GST_IN"
              className="rounded-sm p-1 border-none outline-none ml-2"
              required
              onChange={(e) =>
                setCustomer({ ...customer, GST_IN: e.target.value })
              }
            />
          </div>

          <div className="mt-3 flex flex-col">
            <span className="text-white">Address:</span>
            <input
              type="text"
              placeholder="Country"
              name="country"
              id="address"
              className="mt-2 rounded-sm p-1 border-none outline-none ml-2"
              required
              onChange={(e) =>
                setCustomer({ ...customer, country: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="State"
              name="state"
              id="address"
              className="mt-2 rounded-sm p-1 border-none outline-none ml-2"
              required
              onChange={(e) =>
                setCustomer({ ...customer, state: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              id="address"
              className="mt-2 rounded-sm p-1 border-none outline-none ml-2"
              onChange={(e) =>
                setCustomer({ ...customer, city: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Zip Code"
              name="zipcode"
              id="address"
              className="mt-2 rounded-sm p-1 border-none outline-none ml-2"
              required
              onChange={(e) =>
                setCustomer({ ...customer, zipcode: e.target.value })
              }
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

export default NewCustomer;
