import React, { useEffect, useState }  from "react";
import Content from "./content";

const SuccessPage = () => {

  const [customerId, setCustomerId] = useState("");
  const [receiptData, setReceiptData] = useState(null);

  useEffect(() => {
    // Retrieve customerId from local storage
    const storedCustomerId = localStorage.getItem("customerId");
    if (storedCustomerId) {
      setCustomerId(storedCustomerId);
    }
  }, []); // Run this effect only once when the component mounts

  useEffect(() => {
    // Fetch receipt data when customerId is available
    if (customerId) {
      fetchReceiptData(customerId);
    }
  }, [customerId]); // Run this effect whenever customerId changes

  const fetchReceiptData = async (customerId) => {
    try {
      // Make a GET request to the API endpoint with the customerId
      const response = await fetch(`http://localhost:4000/api/receipt/${customerId}`);
      if (response.ok) {
        // If the response is successful, parse the JSON data and set it in state
        const data = await response.json();
        setReceiptData(data.data);
      } else {
        console.error("Failed to fetch receipt data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching receipt data:", error);
    }
  };

  return <Content receiptData={receiptData} />;
};

export default SuccessPage;
