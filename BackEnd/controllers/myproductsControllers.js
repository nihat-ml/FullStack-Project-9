import { ProductModel } from "../models/myproductsModel.js";


export let ProductControllers = {
    getAll: async (req, res)=>{
        let product = await ProductModel.find()
        res.send(product)
    },
    getById: async (req, res)=>{
        let id = req.params.id
        let myproduct = await ProductModel.findById(id)
        res.send({
            message: "Finded Product",
            data: myproduct
        })
    },
    deleteProduct: async (req, res)=>{
        let id = req.params.id
        await ProductModel.findByIdAndDelete(id)
        res.send({
            message: "Deleted"
        })
    },
    postProduct: async (req, res)=>{
        let newproduct = ProductModel(req.body)
        await newproduct.save()
        res.send({
            message:"added product",
            data: req.body
        })
    }
}