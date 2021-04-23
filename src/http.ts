import express from "express";
import "./database";
import { routes } from "./routes";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const app = express();

const http = createServer(app);
const io = new Server(http);

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (req, res) => {
  return res.render("html/client.html");
});

io.on("connection", (socket: Socket) => {
  // console.log("connected", socket.id);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

export {http, io, PORT}