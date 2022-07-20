var express = require("express");
var router = express.Router();
const userController = require("../controllers").user;
const noteController = require("../controllers").note;

/* GET home page. */
router.get("/", function (req, res, next) {
  //Remove this/
  res.render("index", { title: "Express" });
});

router.get("/api/user/:id", userController.getById);
router.post("/api/user", userController.add);
router.put("/api/update/user", userController.update);
router.delete("/api/user/:id", userController.delete);

router.get("/api/note/:id", noteController.getById);
router.get("/api/user/notes/:id", noteController.getAllNotesOfUser);
router.post("/api/note", noteController.add);
router.put("/api/update/note", noteController.update);
router.delete("/api/note/:id", noteController.delete);

module.exports = router;
