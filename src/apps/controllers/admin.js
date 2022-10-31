const UsersModel = require("../models/user");
const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");


const index = async (req, res)=>{
    // if(!req.session.email || !req.session.password){
    //     res.redirect("/admin/login");
    // }

    const users = await UsersModel.find();
    const products= await ProductModel.find();
    // ProductModel.find().populate({path: "cat_id"}).exec((err, docs)=>{
    // console.log(docs[0].cat_id.title);
    // });
    res.render("admin/dashboard",{users: users.length, products: products.length});
}

module.exports = {
    index:index,
}