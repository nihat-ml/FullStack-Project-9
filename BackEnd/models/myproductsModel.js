import mongoose from "mongoose";

let ProductSchema = new mongoose.Schema({
    image:String,
    title:String,
    price:Number
})

export let ProductModel = mongoose.model("myproducts", ProductSchema)