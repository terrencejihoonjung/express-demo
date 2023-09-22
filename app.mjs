// Import express framework
import express from "express";
import logger from "./logger.mjs";
import authorize from "./authorize.mjs";
const app = express();

// Use middleware after routing match (order matters)
// app.use([logger, authorize]);
app.use(express.static("./public")); // have acces to static assets

// req => middleware => res
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", [logger, authorize], (req, res) => {
  res.send("About");
});

// Server Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server  is listening on ${PORT}`);
});
