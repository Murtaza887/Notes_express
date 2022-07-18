var express = require("express");
var router = express.Router();
const userController = require("../controllers").user;
const noteController = require("../controllers").note;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/user/:id", userController.getById);
router.post("/api/user", userController.add);

router.get("/api/note/:id", noteController.getById);
router.post("/api/note", noteController.add);

module.exports = router;
