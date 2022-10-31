const UserModel = require("../models/user")
const paginate = require("../../common/paginate");

const index = async (req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = page * limit - limit;
    const total = await UserModel.find().countDocuments();
    const totalPage = Math.ceil(total/limit) ;
    const users = await UserModel.find().sort({_id: -1}).skip(skip).limit(limit) ;;
    res.render("admin/users/user", {
        users : users,
        page : page,
        pages : paginate(page, totalPage),
    });
};
const create= (req,res)=>{
        res.render("admin/users/add_user");
};
const store = async (req,res)=>{
    const body = req.body;
    
        const user = {
        full_name: body.full_name,
        email: body.email,
        password:body.password,
        role: body.role,
     }
    new UserModel(user).save();
    res.redirect("/admin/users");
    
};
const edit = (req,res)=>{
    
    res.render("admin/users/edit_user");
};
const del =async (req,res)=>{
    const id = req.params.id;
    await UserModel.deleteOne({_id: id});
    res.redirect("/admin/users");
    
};

module.exports = {
    index : index,
    create : create,
    del : del,
    edit : edit,
    store,
}