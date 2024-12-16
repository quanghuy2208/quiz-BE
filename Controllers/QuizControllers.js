const Category_quizService = require("../services/QuizService");

const createCategory_quiz = async (req, res) => {
    try {
      const {category_name} = req.body;
      if (!category_name) {
        return res.status(200).json({
          status: "ERR",
          message: "The input is required",
        });
      }
      const response = await Category_quizService.createCategory_quiz(req.body);
      return res.status(200).json(response);
    } catch (e) {
      return res.status(404).json({
        message: e,
      });
    }
  };

  const getCategory_quiz = async (req, res) => {
    try {
      const response = await Category_quizService.getCategory_quiz();
      return res.status(200).json(response);
    } catch (e) {
      return res.status(404).json({
        message: e,
      });
    }
  };

module.exports = {
    createCategory_quiz,
    getCategory_quiz,
};
