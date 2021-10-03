import React, { useState } from "react";

export default function FormAddOrder({ cancelButtonRef, setOpen, setShows }) {
  const [query, setQuery] = useState({
    email: "",
    payment_status: "1",
    fulfillment_status: "1",
    total_amount: 0,
  });
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/addOrder", {
      body: JSON.stringify({ ...query }),
      method: "POST",
    });

    const result = await res.json();
    setQuery({
      email: "",
      payment_status: "1",
      fulfillment_status: "1",
      total_amount: 0,
    });
    setOpen(false);

    // update data
    let showData = await fetch("/api/getOrders");
    let updated = await showData.json();
    setShows(updated.data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="text"
                name="email"
                onChange={handleParam()}
                id="email"
                autoComplete="email"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="payment_status"
                className="block text-sm font-medium text-gray-700"
              >
                Payment Status
              </label>
              <select
                id="payment_status"
                name="payment_status"
                required
                onChange={handleParam()}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="1">Fully Paid</option>
                <option value="0">Unpaid</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="payment_status"
                className="block text-sm font-medium text-gray-700"
              >
                Fulfillment Status
              </label>
              <select
                id="fulfillment_status"
                required
                name="fulfillment_status"
                onChange={handleParam()}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="1">Fulfilled</option>
                <option value="0">Unfulfilled</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-4">
              <label
                htmlFor="total_amount"
                className="block text-sm font-medium text-gray-700"
              >
                Total Amount
              </label>
              <input
                type="number"
                required
                name="total_amount"
                onChange={handleParam()}
                id="total_amount"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3  text-right sm:px-6">
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => setOpen(false)}
            ref={cancelButtonRef}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#2563eb] text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            // onClick={() => setOpen(false)}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
