const Category_quizService = require("../services/Category_quizService");
const JwtService = require("../services/JwtService");
const Category_quiz = require("../models/UserModel");

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

// const getallCategory_quiz = async (req, res) => {
//   try {
//     const response = await Category_quizService.getAllSser();
//     return res.status(200).json(response);
//   } catch (e) {
//     return res.status(404).json({
//       message: e,
//     });
//   }
// };

// const getDetailsCategory_quiz = async (req, res) => {
//   try {
//     const Category_quizId = req.params.id;
//     if (!Category_quizId) {
//       return res.status(200).json({
//         status: "ERR",
//         message: "The Category_quizId is required",
//       });
//     }
//     const response = await Category_quizService.getDetailsCategory_quiz(Category_quizId);
//     return res.status(200).json(response);
//   } catch (e) {
//     return res.status(404).json({
//       message: e,
//     });
//   }
// };

// const updateCategory_quiz = async (req, res) => {
//   // console.log
//   try {
//     const Category_quiztId = req.params.id;
//     const data = req.body;
//     if (!Category_quiztId) {
//       return res.status(200).json({
//         status: "ERR",
//         message: "The Category_quiztId is required",
//       });
//     }
//     const response = await Category_quizService.updateCategory_quiz(Category_quiztId, data);
//     return res.status(200).json(response);
//   } catch (e) {
//     return res.status(404).json({
//       message: e,
//     });
//   }
// };

// const deleteCategory_quiz = async (req, res) => {
//     console.log(req.params.id)
//     try {
//       const Category_quizId = req.params.id;
//       if (!Category_quizId) {
//         return res.status(200).json({
//           status: "ERR",
//           message: "The Category_quizId is required",
//         });
//       }
//       const response = await Category_quizService.deleteCategory_quiz(Category_quizId);
//       return res.status(200).json(response);
//     } catch (e) {
//       return res.status(404).json({
//         message: e,
//       });
//     }
//   };

module.exports = {
    createCategory_quiz
    // getallCategory_quiz,
    // getDetailsCategory_quiz,
    // updateCategory_quiz,
    // deleteCategory_quiz,
};
