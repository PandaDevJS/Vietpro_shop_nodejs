const UserModel = require("../models/user");
const login = (req, res)=>{
    res.render("admin/login", {data: {}});
}
const postLogin = async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    let error;
    const users = await UserModel.find({email: email, password: password});
    if(email == "" || password == ""){
        error = "Thông tin không được để trống !";
    }
    else if(users.length > 0){
        req.session.email = email;
        req.session.password = password;
        res.redirect("/admin/dashboard");
    }
    else{
        error = "Tài khoản không hợp lệ !"
    }
    res.render("admin/login", {data: {error: error}});
}
const logout = (req, res)=>{
    res.send("logout");
}

module.exports = {
    login:login,
    postLogin:postLogin,
    logout:logout,
}