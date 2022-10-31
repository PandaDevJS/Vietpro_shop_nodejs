const UserModel = require("../models/user");
const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");


const test = (req, res)=>{
    req.session.email = "vietpro";
    console.log(req.session.email);
}
const test2 = (req,res)=>{

    console.log(req.body);

}
module.exports = {
    test:test,
    test2:test2,
    
}


