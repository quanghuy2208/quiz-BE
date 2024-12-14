const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    category_name: String,
    quiz: [
      {
        quiz_id: String,
      }
    ]
  },
  {
    timestamps: true,
  }
);

const category_quiz = mongoose.model("category_quiz", quizSchema, "category_quiz");
module.exports = category_quiz;
