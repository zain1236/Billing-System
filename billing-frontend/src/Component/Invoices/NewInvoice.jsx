import React from "react";

const NewInvoice = () => {
  return (
    <main className="flex justify-center mt-20">
      <div className="min-h-[700px] w-[1000px] bg-slate-400 p-10 rounded-md">
        <h1 className="text-2xl underline text-white font-semibold">Add Invoice</h1>

        <form
          action="/customer"
          method="post"
          className="m-10 flex flex-col justify-center items-center"
        >
          <label for="custType"> Customer Type </label>
          <select name="custType" id="custType">
            <option value="Business">Business</option>
            <option value="Individual">Individual</option>
          </select>
          <div className="mt-3">
            <input
              type="text"
              name="header"
              placeholder="Header"
              id="header"
              className="rounded-sm p-1 border-none outline-none ml-2"
              required
            />
          </div>
          <div className="mt-3">
            <select name="" id=""></select>
          </div>

          <div className="mt-3">
            <input
              placeholder=""
              type="email"
              name="email"
              id="email"
              className="rounded-sm p-1 border-none outline-none ml-2"
            />
          </div>

          <div className="flex items-center mt-3">
            <input
              type="text"
              placeholder="Mobile"
              name="mobile"
              id="mobile"
              className="rounded-sm p-1 border-none outline-none ml-2"
            />
          </div>

          <div className="mt-3">
            <label for="website"></label>
            <input
              type="text"
              placeholder="Website"
              name="website"
              id="website"
              className="rounded-sm p-1 border-none outline-none ml-2"
            />
          </div>

          <div className="mt-3">
            <label for="pan"></label>
            <input
              type="text"
              placeholder="Pan"
              name="pan"
              id="pan"
              className="rounded-sm p-1 border-none outline-none ml-2"
            />
          </div>
          {/* <!-- //optional --> */}

          <div className="mt-3">
            <label for="GST_treatement">GST treatment</label>
            <select name="GST_treatement" id="GST_treatement">
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
            />
            <input
              type="text"
              placeholder="State"
              name="state"
              id="address"
              className="mt-2 rounded-sm p-1 border-none outline-none ml-2"
              required
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              id="address"
              className="mt-2 rounded-sm p-1 border-none outline-none ml-2"
            />
            <input
              type="number"
              placeholder="Zip Code"
              name="zipcode"
              id="address"
              className="mt-2 rounded-sm p-1 border-none outline-none ml-2"
              required
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

export default NewInvoice;
