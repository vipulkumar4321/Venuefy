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

var venues = [{
    name: "venue1",
    image: "https://i.imgur.com/AxYrJaA.jpg"
  },
  {
    name: "venue2",
    image: "https://i.imgur.com/Pth8FML.jpg"
  },
  {
    name: "venue3",
    image: "https://i.imgur.com/dfitTLM.jpg"
  },
  {
    name: "venue4",
    image: "https://i.imgur.com/X5EGJhq.jpg"
  }
];

var supervisors = [{
    name: "Rishav Raj",
    image: "data:image/jpeg;base64,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"
  },
  {
    name: "Adarsh singh",
    image: "data:image/jpeg;base64,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"
  },
  {
    name: "Anil Purbey",
    image: "data:image/jpeg;base64,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"
  },
  {
    name: "Parikshit Ghosh",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_iPK0PZKoziiBDeDhkGECT7qGbnPD81Pkqolink4ucXgZP_nF&usqp=CAU"
  },
  {
    name: "Jayanta Banik",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRexn614T9wB3gsAA7l2kvfGAVvxca0u0n8GUnsvt5RpqM66vd8&usqp=CAU"
  }
];

//Routes
//Index route
app.get("/", function (req, res) {
  res.redirect("/home");
});
app.get("/home", function (req, res) {
  res.render("home", {
    venues: venues,
    supervisors: supervisors
  });
});

//Venues route
app.get("/venues", function (req, res) {
  res.render("venues", {
    venues: venues,
  });
});

//venues post
app.post("/venues", function (req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newVenue = {
    name: name,
    image: image,
  };
  venues.push(newVenue);
  res.redirect("/venues");
});

//new venue
app.get("/venues/new", function (req, res) {
  res.render("new");
});

//supervisors
app.get("/supervisors", function (req, res) {
  res.render("supervisors", {
    supervisors: supervisors,
  });
});

app.post("/supervisors", function (req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newSupervisor = {
    name: name,
    image: image
  };
  supervisors.push(newSupervisor);
  res.redirect("/supervisors");
});

app.get("/supervisors/new", function (req, res) {
  res.render("newSupervisor");
});

//Server
app.listen(process.env.PORT || 9000, process.env.IP, function () {
  console.log("Server is listening...");
});