const express = require("express");
const session = require("express-session");
const app = express();
const config = require("config");

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'vietpro',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Config View Engine
app.set("views", config.get("app").views_folder);
app.set("view engine", config.get("app").view_engine);

// Config Static Folder
app.use("/static", express.static(config.get("app").static_folder));

// Config Get Form Data
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Using Router de cuoi cung 
app.use(require("../routers/web"));


module.exports = app;