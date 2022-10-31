const CategoryModel = require("../models/category");
const index = async (req,res)=>{
    const categories = await CategoryModel.find();
    res.render("admin/categories/category", {categories : categories});
};
const create = (req,res)=>{
    res.render("admin/categories/add_category");

};
const edit = (req,res)=>{
    res.render("admin/categories/edit_category");

};
const del = (req,res)=>{
    res.send("<h1>/admin/categories/delete/:id</h1>");
};
module.exports = {
    index : index,
    create : create,
    edit : edit,
    del : del
}