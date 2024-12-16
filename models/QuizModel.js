const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://huy:huy528797@cluster0.mklyt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

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
