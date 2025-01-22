import { ProductControllers } from "../controllers/myproductsControllers.js";
import express from "express"


export let route = express.Router()



route.get("/", ProductControllers.getAll)
route.get("/:id", ProductControllers.getById)
route.delete("/:id", ProductControllers.deleteProduct)
route.post("/", ProductControllers.postProduct)