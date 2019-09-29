const express = require('express')
const routes = express.Router();

const ProductController = require('./controller/ProductController')

routes.get('/', (req,res)=>{
    return res.json({"HW" : "Hello World"});
})

routes.get("/products", ProductController.index)
routes.post("/products", ProductController.store)
routes.get("/products/:id", ProductController.show)

routes.put("/products/:id", ProductController.update)
routes.delete("/products/:id", ProductController.destroy)
module.exports = routes;