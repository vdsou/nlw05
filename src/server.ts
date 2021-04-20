import express from "express";
import "./database"
import {routes} from "./routes"
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3000;
const app = express();
// routes -> GET, POST, PUT, DELETE and PATCH
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(routes)


app.get("/", (req, res) => {
  res.json({
    message: "Hello, world!",
  });
});

app.post("/", (req, res) => {
    res.json({message: "user created successfully"})
})

app.listen(PORT, () => {
  console.log("Server is connected on port:", PORT);
});
