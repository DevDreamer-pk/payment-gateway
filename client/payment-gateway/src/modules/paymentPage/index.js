import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./content";
import { userService } from "../services";
const PaymentPage = () => {
  const handleSubmit = async (formData) => {
    try {
      const { customerId } = formData;
      localStorage.setItem("customerId", customerId);
      const response = await userService.payment(formData);
      if (response) {
        toast.success("Welcome to Payment Gateway");  
      }
      const url = response.data.redirectUrl;
      window.location.href = url;
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Content onSubmit={handleSubmit} />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default PaymentPage;
