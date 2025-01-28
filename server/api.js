const express = require("express");
// for cors policy
const cors = require("cors");
const { HfInference } = require("@huggingface/inference");

// for env
require('dotenv').config();

const app = express();
const port = 8081;

const HF_API_KEY = process.env.HF_API_KEY;
const hf = new HfInference(HF_API_KEY);

app.use(express.json())
app.use(cors());


app.post("/analyze", async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text input is required." });
  }

  try {
    // Hugging Face API
    const result = await hf.textClassification({
      model: "distilbert-base-uncased-finetuned-sst-2-english",
      inputs: text,
      provider: "hf-inference",
    });

    // result
    console.log(result, 'result')
    res.json({
      sentiment:result.sentiment,
      confidence: result.confidence
    });
  } catch (error) {
    console.error("Error analyzing sentiment:", error);
    res.status(500).json({ error: "Failed to analyze sentiment." });
  }
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
