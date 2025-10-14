import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/api/mock", (req, res) => {
  res.json({ message: "Mock data works!", items: [1, 2, 3] });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
