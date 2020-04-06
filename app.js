var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// key line! - serve all static files from "css" directory under "/css" path
app.use("/css", express.static("css"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.set("view engine", "ejs");

var vanues = [
  {
    name: "vanue1",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "vanue2",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "vanue3",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "vanue4",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
];

//Routes
//Index route
app.get("/", function (req, res) {
  res.redirect("/home");
});
app.get("/home", function (req, res) {
  res.render("home", { vanues: vanues });
});

//Vanues route
app.get("/vanues", function (req, res) {
  res.render("vanues", {
    vanues: vanues,
  });
});

//vanues post
app.post("/vanues", function (req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newVanue = {
    name: name,
    image: image,
  };
  vanues.push(newVanue);
  res.redirect("/vanues");
});

//new vanue
app.get("/vanues/new", function (req, res) {
  res.render("new");
});

//Server
app.listen(process.env.PORT || 9000, process.env.IP, function () {
  console.log("Server is listening...");
});
