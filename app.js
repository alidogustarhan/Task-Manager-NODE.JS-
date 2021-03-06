const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

const notFound = require('./middleware/not_found')
//app.get('/api/v1/tasks')----getalltasks
//app.post('/api/v1/tasks')----create a new task
//app.get('/api/v1/tasks/:id')----get a single task
//app.patch('/api/v1/tasks/:id')----update task
//app.delete('/api/v1/tasks/:id')----delete task

//middlware
app.use(express.static('./public'))
app.use(express.json()), //Bunu kullanmazsak req.body deki datalara ulaşamayız.

//ROUTES
app.use("/api/v1/tasks", tasks);
//Burada şunu söyledik eğerki locahost:3000/api/v1/tasks e bir işlem uygulanırsa tasks i kullan dedik.
app.use(notFound);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, () => {
      console.log("PORT 3000 ÇALIŞIYOR...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
