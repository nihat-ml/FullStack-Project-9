import dotenv from "dotenv"
import { connect } from "mongoose";
dotenv.config()

connect("mongodb+srv://nihatrmaf206:nihat206206@clusterproducts.mylry.mongodb.net/")
.then(()=>{
    console.log("Connected")
})