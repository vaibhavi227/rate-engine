//product 
import mongoose from "mongoose";

const productModel= new mongoose.Schema({
    name:String,
    email:String,
    password:String

});
export const Product= mongoose.models.daily4 || mongoose.model("daily4",productModel);
