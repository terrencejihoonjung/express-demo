// Import express framework
import express from "express";
import path from "path";
const app = express();

// Setup static and middleware
app.use(express.static("./public"));

// GET
app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});

// handles all HTTP verbs
app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

// Server Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server  is listening on ${PORT}`);
});
