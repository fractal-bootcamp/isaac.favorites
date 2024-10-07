#!/bin/bash

# Prompt the user for the project folder name
read -p "Enter your project folder name: " project_name

# Create the project directory
mkdir $project_name

# Change to the project directory
cd $project_name

# Initialize a new Bun project (this will create a package.json)
bun init -y

# Install Express and CORS using Bun
bun add express cors

# Create index.ts with basic Express server setup
cat > index.ts <<EOL
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
  console.log(\`Server is running at http://localhost:\${port}\`);
});
EOL

# Start the server using Bun
bun run index.ts
