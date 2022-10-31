const express = require("express");
const router = express.Router();
const MiddleWare = require("../apps/middlewares/auth");
const UploadMiddleware = require("../apps/middlewares/upload")

// Import Controller 
const TestController = require("../apps/controllers/test");
const AuthController = require("../apps/controllers/auth");
const AdminController = require("../apps/controllers/admin");
const ProductController = require("../apps/controllers/product");
const UserController = require("../apps/controllers/user");
const CategoryController = require("../apps/controllers/category");
const SiteController = require("../apps/controllers/site");

const Home = (req,res)=>{
    res.send("Home page");
}

router.get("/test",TestController.test);
router.get("/test2", TestController.test2);
// router.get("/form", (req, res)=>{
//     res.send(`
//         <form method=post>
//             <input type=text name=mail />
//             <input type=text name=pass />
//             <input type=submit name=sbm value=Login />
//         </form>
//     `);
// });
// router.post("/form", (req, res)=>{
//     const mail = req.body.mail;
//     const pass = req.body.pass;
//     console.log(mail+"-"+pass);
// });

// Router Site
router.get("/", SiteController.home);
router.get("/category", SiteController.category);
router.get("/product", SiteController.product);
router.get("/cart", SiteController.cart);
router.get("/search", SiteController.search);
router.get("/success", SiteController.success);


//  Router Admin
router.get("/admin/login", MiddleWare.checkLogin, AuthController.login);
router.post("/admin/login", AuthController.postLogin);
router.get("/admin/logout", AuthController.logout);

router.get("/admin/dashboard",MiddleWare.checkAdmin, AdminController.index);
////////////////////////////////////////////////////////////
router.get("/admin/products",MiddleWare.checkAdmin , ProductController.index);
router.get("/admin/products/create",MiddleWare.checkAdmin , ProductController.create);
router.post("/admin/products/store",UploadMiddleware.single("thumbnail"), MiddleWare.checkAdmin , ProductController.store);
router.get("/admin/products/edit/:id",MiddleWare.checkAdmin , ProductController.edit);
router.post("/admin/products/update/:id",UploadMiddleware.single("thumbnail"), MiddleWare.checkAdmin , ProductController.update)
router.get("/admin/products/delete/:id",MiddleWare.checkAdmin , ProductController.del);
//////////////////////////////////////////////////////////
router.get("/admin/users",MiddleWare.checkAdmin, UserController.index);
router.get("/admin/users/create", UserController.create);
router.post("/admin/users/store", UserController.store);
router.get("/admin/users/edit/:id", UserController.edit);
router.get("/admin/users/delete/:id", UserController.del);
///////////////////////////////////////////////////////////
router.get("/admin/category",MiddleWare.checkAdmin, CategoryController.index);
router.get("/admin/category/create", CategoryController.create);
router.get("/admin/category/edit/:id", CategoryController.edit);
router.get("/admin/category/delete/:id", CategoryController.del);

module.exports = router;