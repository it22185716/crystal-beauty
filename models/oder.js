import mongoose from "mongoose";

// Define the order schema
const oderSchema = new mongoose.Schema({
    oderId: {
        type: String,
        required: true,
        unique: true, // Ensure no duplicate order IDs
        index: true // Ensure indexing for faster lookup
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        default: "pending"
    },
    phoneNumber: {
        type: String,
        required: true
    },
    billItems: { // Fixed field name from `BillItems` to `billItems`
        type: [
            {
                productId: { type: String, required: true },
                productName: { type: String, required: true },
                image: { type: String },
                quantity: { type: Number, required: true },
                price: { type: Number, required: true }
            }
        ],
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

// Create the order model
const Oder = mongoose.model("oders", oderSchema);
export default Oder;
