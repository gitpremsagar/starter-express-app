import express from "express"; // ES6 module
import dotenv from "dotenv"; // ES6 module
dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}\n http://localhost:${port}`);
});
