import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  status: String,
  txnid: String,
  amount: String,
  addedon: Date,
  firstname: String,
  productinfo: String,
  email: String,
  phone: String,
  orderId: String,
  customerId: String,
});

const paymentModel = mongoose.model('Payment', paymentSchema);

export default paymentModel