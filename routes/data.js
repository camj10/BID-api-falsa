const express = require("express");
const {user,company,companys}  = require("../controllers/data");
const app = express();

app.get("/api/users/new", user);
app.get("/api/companies/new", company);
app.get("/api/user/company", companys);


module.exports= app;