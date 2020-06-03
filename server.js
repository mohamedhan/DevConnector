const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
app.use(express.json());

//connect db
connectDB();
app.get("/", (req, res) => {
  res.send("test");
});
//routes
app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/profile',require('./routes/api/profiles'))
app.use('/api/posts',require('./routes/api/posts'))

//run server
const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err
    ? console.log("erreur to listen", err)
    : console.log(`connected on port ${port}`)
);
