const express = require("express");
const bodyParser = require("body-parser");
const Date= require(__dirname+"/date.js");
const app = express();
let items = [];
let workItems = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));  

app.get("/", (req, res) => {
    let day = Date.getdate();
    res.render("list", { Titleslist: day, newItem: items});
    });

    app.post("/", (req, res) => {
      // console.log(req.body.button);
    if (req.body.button === "Work") {
          let item = req.body.newItem;
          workItems.push(item);
          res.redirect("/work");
                }
    else {
          let item = req.body.newItem;
          items.push(item);
          res.redirect("/");
          // console.log(req.body);

      }
    });
    app.get("/work", (req, res) => {
      res.render("list",{Titleslist: "Work", newItem: workItems});
    });
   
  
    app.listen(process.env.PORT  ||8080, () => {
  console.log("Server is running");
  });     
