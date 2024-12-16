const express = require("express");
const router = express.Router();
const Category_quizControllers = require("../Controllers/QuizControllers");

router.get("/createCategory_quiz", Category_quizControllers.createCategory_quiz);
router.get("/getCategory_quiz", Category_quizControllers.getCategory_quiz);

router.post("/", (req, res) => res.send("ok"));

module.exports = router;
