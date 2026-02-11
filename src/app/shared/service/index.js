const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI('YOUR_API_KEY_HERE');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.post('/api/gemini', async (req, res) => {
  try {
    const { prompt } = req.body;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    res.json({ text: response.text() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gemini failed' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
