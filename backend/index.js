const express = require("express");
const app = express();
const port = 3001;
const mongoDB = require("./db");
const allowedOrigins = ["http://localhost:3000", "https://localhost:3000"];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

app.use(express.json());
mongoDB();

app.use("/api/tickets", require("./Routes/ticketroute"));
app.use("/api", require("./Routes/createuser"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
