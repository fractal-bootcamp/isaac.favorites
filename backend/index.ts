import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Basic middleware to parse JSON
app.use(express.json());

// Test API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
