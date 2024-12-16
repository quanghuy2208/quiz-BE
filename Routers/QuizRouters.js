const express = require("express");
const router = express.Router();
const Category_quizControllers = require("../Controllers/QuizControllers");
// const {
//   authMiddleWare,
//   authUserMiddleWare,
// } = require("../middleware/authMiddleware");

router.get("/createCategory_quiz", Category_quizControllers.createCategory_quiz);
// router.get("/get-details/:id", Category_quizControllers.getDetailsCategory_quiz);
// router.delete("/delete-Category_quiz/:id", Category_quizControllers.deleteCategory_quiz);
// router.put("/update-Category_quiz/:id", Category_quizControllers.updateCategory_quiz);

router.post("/", (req, res) => res.send("ok"));

module.exports = router;
