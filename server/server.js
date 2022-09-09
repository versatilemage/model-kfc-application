import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const PORT = 4001;
const app = express();

import {
  addMenuToKfc,
  getAllMenu,
  getMenuById,
  updateMenuById,
  deleteMenuById,
  tokenVerification,
  getMenu
} from "./routes/routes.js";



// Middleware
app.use(cors());
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// Routes
app.post("/addmenu", addMenuToKfc); //can add new menu item
app.get("/menulist", getAllMenu); //can be used to see the existing menu
app.get("/searchmenu/:identifier", getMenuById);
app.put("/updatemenu/:identifier", updateMenuById);
app.delete("/deletemenu/:identifier", deleteMenuById);
app.get("/verification", tokenVerification, getMenu);

mongoose.connect("mongodb+srv://wildbadger:jkhinpiqosq@clusterbankapp.pn7rge3.mongodb.net/?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedtopology: true
},(err) => {
  if(!err){
    console.log("connected to db")
  }else{
    console.log("error")
  }
})

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});