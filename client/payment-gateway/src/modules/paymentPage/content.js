import React, { useState } from "react";

// import Demo from "../demo";

const Content = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerId: "",
    email: "",
    phone: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    onSubmit(formData);
    console.log(formData);
  };
  return (
    <>
      {/* <div>
        <Demo />
      </div> */}
      <div class="bg-white dark:bg-gray-900">
        <div class="flex justify-center h-screen">
          <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div class="flex-1">
              <div class="text-center">
                <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">
                  Payment Gateway
                </h2>

                <p class="mt-3 text-gray-500 dark:text-gray-300">
                  Enter your Details
                </p>
              </div>

              <div class="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      for="customerName"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Customer Name
                    </label>
                    <input
                      type="text"
                      name="customerName"
                      id="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      placeholder="Your Name"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div class="mt-6">
                    <label
                      for="customerId"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Customer ID
                    </label>
                    <input
                      type="text"
                      name="customerId"
                      id="customerId"
                      value={formData.customerId}
                      onChange={handleChange}
                      placeholder="Your ID"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div class="mt-6">
                    <label
                      for="email"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@example.com"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div class="mt-6">
                    <label
                      for="phone"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="mt-6">
                    <label
                      for="amount"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="Amount"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="mt-6">
                    <button
                      type="submit"
                      class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      PAY
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
