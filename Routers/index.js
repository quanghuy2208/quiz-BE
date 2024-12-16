const QuizRouters = require("./QuizRouters");

const routes = (app) => {
  app.use("/api/quiz", QuizRouters);
}

module.exports = routes;
