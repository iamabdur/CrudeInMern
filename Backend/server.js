const express = require("express");
const dotenv=require("dotenv")
const mongoose = require("mongoose");
const app = express();
const taskRoutes = require("./Router/taskRouter");
const cors = require('cors')
dotenv.config();

app.use(cors())

app.use(express.json());


const MONGO_URI="mongodb+srv://Admin:Admin@crud.rrtgqv1.mongodb.net/?retryWrites=true&w=majority"
const PORT=4000


// Connect to the MongoDB databasec
mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
  useNewUrlParser: true,
 
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        "DB connected Successfully and listening to "+PORT
      );
    });
  })
  .catch((error) => console.log(error));

app.use("/api/tasks", taskRoutes);