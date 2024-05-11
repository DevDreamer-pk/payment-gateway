import React from "react";
import { Routes, Route } from "react-router-dom";


import PaymentPage from "./modules/paymentPage";
import SuccessPage from "./modules/successPaymentPage";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PaymentPage />} />
      <Route path="/payment/success" element={<SuccessPage />} />
    </Routes>
  );
};

export default Router;
