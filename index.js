const express = require("express");
const ejs = require("ejs");
const ejsMate = require("ejs-mate");
const path = require("path");
const app = express();
// Set EJS as the view engine
app.set("view engine", "ejs");
app.engine("ejs", ejsMate); // Set ejs-mate as the layout engine
app.set("views", path.join(__dirname, "views"));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/projects", (req, res) => {
  res.render("pages/projects/main");
});

app.get("/projects/:project", (req, res) => {
  const { project } = req.params;
  res.render(`pages/projects/${project}`);
});

app.get("*", (req, res) => {
  res.render("pages/error");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
