const Category_quiz = require("../models/QuizModel");

const createCategory_quiz = (newCategory_quizData) => {
  return new Promise(async (resolve, reject) => {
    const { category_name } = newCategory_quizData;
    try {
      const checkCategory_quiz = await Category_quiz.findOne({
        category_name: category_name,
      });
      
      if (checkCategory_quiz !== null) {
        resolve({
          status: "ERR",
          message: "The Category_quiz with this category name already exists",
        });
        return;
      }

      const createdCategory_quiz = await Category_quiz.create({
        category_name,
      });

      if (createdCategory_quiz) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdCategory_quiz,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const getCategory_quiz = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const category_quiz = await Category_quiz.find().sort({ createdAt: -1, updatedAt: -1 });
      resolve({
        status: "OK",
        message: "Success",
        data: category_quiz,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createCategory_quiz,
  getCategory_quiz,
};
