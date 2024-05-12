import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    orderId : String,
    customerName : String,
    customerId : String,
    email : String,
    phone : String,
    amount : String,
    status : String,
    transactionId : String,
    merchantId : String,

})

const transactionModel = mongoose.model('Transaction', transactionSchema);

export default transactionModel