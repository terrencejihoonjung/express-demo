// Import express framework
import express from "express";
import path from "path";
const app = express();

// Setup static and middleware
app.use(express.static("./public"));

// GET
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

// handles all HTTP verbs
app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

// Server Listener
app.listen(3000, () => {
  console.log("Server is listening on 3000");
});
