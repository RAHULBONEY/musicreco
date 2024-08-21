const { execSync } = require("child_process");

exports.getRecommendation = (req, res) => {
  const genre = req.query.genre || "rock";
  try {
    const result = execSync(`python ../ml_model/model.py`, {
      input: JSON.stringify({ genre }),
      encoding: "utf-8",
    });
    const recommendation = JSON.parse(result).recommendation;
    res.json({ recommendation });
  } catch (error) {
    res.status(500).send("Error in ML model");
  }
};
