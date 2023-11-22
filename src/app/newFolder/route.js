import { constr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function GET(){
    await mongoose.connect(constr);
    const data= await Product.find();
    console.log(data);
    return NextResponse.json({"result": data})
}
