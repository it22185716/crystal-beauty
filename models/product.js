import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true,

    },
    name: {
        type: String,
        required: true
    },
    altNames: {
        type: [String],
        default: []
    },
    price: {
        type: Number,
        required: true,
    },
    labelPrice: {
        type : Number,
        required : true
    },
    images : {
        type : [String],
        required : true,
        default: ["https://img.freepik.com/free-photo/3d-rendering-personal-care-products-fondant-pink_23-2151053864.jpg?t=st=1741756652~exp=1741760252~hmac=9bd9578551dca0c453e62f0d8950f45e51a14be398f384b88ad6cb98d45c7062&w=996"]

    },
    stock : {
        type : Number,
        required : true

    },
})
const product = mongoose.model("products",productSchema)
export default product;