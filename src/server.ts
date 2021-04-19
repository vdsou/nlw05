import express from "express";
const PORT = process.env.PORT || 3000;
const app = express();

// routes -> GET, POST, PUT, DELETE and PATCH
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
