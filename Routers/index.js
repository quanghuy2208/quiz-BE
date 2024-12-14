const QuizRouters = require("./QuizRouters");

const routes = (app) => {
  app.use("/api/createCategory_quiz", QuizRouters);
}

module.exports = routes;
