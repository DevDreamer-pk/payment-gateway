import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { URLSearchParams } from "url";

import paymentModel from "../../config/paymentModel.js";
import transactionModel from "../../config/transactionModel.js";

export default class UserManager {
  async payment(userData, res) {
    try {
      const { customerName, customerId, email, phone, amount } = userData;
      const txnId = uuidv4();

      const newOrderId =
        "OrderID" + Date.now() + Math.floor(Math.random() * 1000000);

      const user = {
        firstname: customerName,
        customerId: customerId,
        email: email,
        phone: phone,
        amount: amount,
        txnid: txnId,
        orderId: newOrderId,
        customerId: customerId,
      };
      const api_key = process.env.API_KEY
      const salt = process.env.SALT;
      const productinfo = "iphone";
      // const surl = "https://test-payment-middleware.payu.in/simulatorResponse";
      // const furl = "https://test-payment-middleware.payu.in/simulatorResponse";

      const surl = "http://localhost:4000/api/payment/success";
      const furl = "http://localhost:4000/api/payment/failed";

      const hashString = `${api_key}|${user.txnid}|${user.amount}|${productinfo}|${user.firstname}|${user.email}|${user.orderId}|${user.customerId}|||||||||${salt}`;
      const hash = crypto.createHash("sha512").update(hashString).digest("hex");

      const encodedParams = new URLSearchParams();
      encodedParams.set("key", api_key);
      encodedParams.set("txnid", user.txnid);
      encodedParams.set("amount", user.amount);
      encodedParams.set("productinfo", productinfo);
      encodedParams.set("firstname", user.firstname);
      encodedParams.set("email", user.email);
      encodedParams.set("phone", user.phone);
      encodedParams.set("hash", hash);
      encodedParams.set("surl", surl);
      encodedParams.set("furl", furl);
      encodedParams.set("udf1", user.orderId);
      encodedParams.set("udf2", user.customerId);

      const options = {
        method: "POST",
        url: process.env.PAYU_TEST_URL,
        headers: {
          accept: "text/plain",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: encodedParams,
      };

      const response = await axios
        .request(options)
        .then((response) => {
          // console.log(response.data);
          const redirectUrl = response.request.res.responseUrl; // Extract the response URL
          return { success: true, redirectUrl: redirectUrl };
        })
        .catch((error) => {
          console.error(error);
        });

      return { success: true, data: response };
    } catch (error) {
      console.log("Manager Error", error);
      throw error;
    }
  }

  async paymentSuccess(req,res) {
    try {
      const {
        status,
        txnid,
        amount,
        addedon,
        firstname,
        productinfo,
        email,
        phone,
        udf1,
        udf2,
      } = req;

      // Create a new Payment document
      const payment = new paymentModel({
        status : status,
        txnid : txnid,
        amount : amount,
        addedon : addedon,
        firstname : firstname,
        productinfo : productinfo,
        email : email,
        phone : phone,
        orderId : udf1,
        customerId : udf2
      });
      console.log("payment",payment);
      // Save the payment document to MongoDB
      await payment.save();

      // Redirect to the success page
      res.redirect("http://localhost:3000/payment/success");
    } catch (error) {
      console.log("Manager Error", error);
      throw error;
    }
  }

  async getReceipt(customerId) {
    try {
      // const { orderId, customerId } = req;
      const payment = await paymentModel
        .findOne({ customerId: customerId })
        .exec();
      return { success: true, data: payment };
    } catch (error) {
      console.log("Manager Error", error);
      throw error;
    }
  }

  async createTransaction(body) {
    try {
      const {orderId, customerName, customerId, email, phone, amount, merchantId } = body;
      if (!orderId || !customerName || !customerId || !email || !phone || !amount || !merchantId) {
          return { success: false, data: "All fields are required" };
        }
      
        // check if order Id is unique 
        
        const existingOrder = await transactionModel.findOne({ orderId: orderId });
        if (existingOrder) {
          return { success: false, data: "Order ID must be unique" };
        }

        const transactionId = uuidv4();

        const newTransaction = new transactionModel({
          orderId: orderId,
          customerName: customerName,
          customerId: customerId,
          email: email,
          phone: phone,
          amount: amount,
          status: "pending",
          transactionId: transactionId,
          merchantId: merchantId
        });

        await newTransaction.save();

        const transactionData = {
          orderId: orderId,
          transactionId: transactionId,
          customerId: customerId,
          amount: amount,
          status: "pending",
        };
        
        return { success: true, data: transactionData };
      } catch (error) {
        console.log("Manager Error", error);
        throw error;
      }
  }
}

