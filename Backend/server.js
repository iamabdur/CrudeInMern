const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const taskRoutes = require("./Router/taskRouter");
const cors = require('cors')

// const MONGO_URI="mongodb+srv://Admin:Admin@crud.rrtgqv1.mongodb.net/?retryWrites=true&w=majority"
// const PORT=4000;
//Middleware


app.use(cors())

app.use(express.json());



// Connect to the MongoDB database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "DB connected Successfully and listening to "+process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error));

app.use("/api/tasks", taskRoutes);