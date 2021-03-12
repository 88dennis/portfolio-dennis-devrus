const express = require("express");
const mongoose = require("mongoose");
var path = require("path");

const app = express();
const userRouter = require("./routes/index");
const port = process.env.PORT || 8001;

const uri = process.env.mongodb || "mongodb://localhost:27017/dportfolio";
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      console.log("unable to connect to the database");
      process.exit(1);
    } else {
      console.log("connected to db");
    }
  }
);

////FINALLY CORRECT

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRouter);

////FINALLY CORRECT

if (process.env.NODE_ENV === "production") {
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

app.listen(port, () => {
  console.log("connected to : " + port);
});
