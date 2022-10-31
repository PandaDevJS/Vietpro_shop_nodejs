const home = (req, res)=>{
    res.render("site/index");
}
const cart = (req, res)=>{
    res.render("site/cart");
}
const category = (req, res)=>{
    res.render("site/category");
}
const product = (req, res)=>{
    res.render("site/product");
}
const search = (req, res)=>{
    res.render("site/search");
}
const success = (req, res)=>{
    res.render("site/success");
}

module.exports = {
    home,
    cart,
    category,
    product,
    search,
    success,
}