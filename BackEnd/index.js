import express from "express"
let app = express()
import cors from "cors"
import { route } from "./routers/router.js"
import dotenv from "dotenv"
dotenv.config()
app.use(express.json())
app.use(cors())
import "./config/config.js"

app.use("/myproducts", route)
app.listen(3000,()=>{
    console.log("bu app 3000 portunda dinlenilir")
})