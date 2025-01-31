const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post('/api/summarize', async (req, res) => {
  try {
    const { text } = req.body;
    const summary = `This is a mock summary of the text: "${text.slice(0, 50)}..."`;

    res.json({ summary });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while summarizing the text.' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));