const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
} = require("../controllers/tasks");

//Yönlendirildiğimiz yer  locahost:3000/api/v1/tasks  adresi oldugu için burada / bizim o adreste yani main adreste oldugumuzu belirtiyor.Gerisi zaten açık.

router.route("/").get(getAllTasks).post(createTask);
// router.route('/').post(createTask)
//Bu şekilde birleştirilebiliyor aynı path e sahip oldukları için.
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;

