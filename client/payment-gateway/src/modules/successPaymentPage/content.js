import React from "react";

const Content = ({ receiptData }) => {
  // Check if receiptData is null
  if (!receiptData) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <p>Loading...</p>
      </div>
    );
  }

  const { status, txnid, amount, addedon, firstname, productinfo, email, phone, orderId, customerId } = receiptData;
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Payment Successful</h1>
        <div>
          <p><span className="font-semibold">Status:</span> {status}</p>
          <p><span className="font-semibold">Transaction ID:</span> {txnid}</p>
          <p><span className="font-semibold">Amount:</span> ${amount}</p>
          <p><span className="font-semibold">Added On:</span> {new Date(addedon).toLocaleString()}</p>
          <p><span className="font-semibold">First Name:</span> {firstname}</p>
          <p><span className="font-semibold">Product Info:</span> {productinfo}</p>
          <p><span className="font-semibold">Email:</span> {email}</p>
          <p><span className="font-semibold">Phone:</span> {phone}</p>
          <p><span className="font-semibold">Order ID:</span> {orderId}</p>
          <p><span className="font-semibold">Customer ID:</span> {customerId}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
