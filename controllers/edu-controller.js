var highScores = [];

var Score = function(name, score) {
  this.name = name;
  this.score = score;
}

highScores.push(new Score("JFB", 5));
highScores.push(new Score("JFB", 7));
highScores.push(new Score("JFB", 22));
highScores.push(new Score("JFB", 8));
highScores.push(new Score("JFB", 12));
highScores.push(new Score("JFB", 10));
highScores.push(new Score("JFB", 18));
highScores.push(new Score("JFB", 30));
highScores.push(new Score("JFB", 25));
highScores.push(new Score("JFB", 6));

function index(req, res, next) {
  console.log(req)
  console.log(highScores)
  res.json({highScores: highScores});
}

function create(req, res, next) {
  highScores.push(new Score(req.body.name, req.body.score))
  res.json({highScores: highScores})
}

module.exports = {
  index: index,
  create: create
}