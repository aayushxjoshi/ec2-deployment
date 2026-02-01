import express from "express";

const app = express();

app.use(express.json());

app.get("/healthcheck", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server Up and Running",
  });
});

app.listen(3000, () => {
  console.log("Server Up and Running");
});
