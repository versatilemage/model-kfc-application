import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
const PORT = 4001;
const app = express();

import {
  addMenuToKfc,
  getAllMenu,
  getMenuById,
  updateMenuById,
  deleteMenuById,
} from "./routes/routes.js";



// Middleware
app.use(cors());
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post("/addmenu", addMenuToKfc);
app.get("/menulist", getAllMenu);
// app.get('/menu/:identifier', getMenuById);
app.get("/searchmenu", getMenuById);
app.put("/updatemenu", updateMenuById);
app.delete("/deletemenu", deleteMenuById);

// DB connection establishment
// mongoose.connect("mongodb://localhost:27017/kfcdata").then((res) => {
//   console.log("DB connect success");
//   app.listen(PORT, () => {
//     console.log(`Server listening at ${PORT}`);
//   });
// });

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