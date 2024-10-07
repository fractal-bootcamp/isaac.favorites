#!/bin/bash

# Prompt the user for the project folder name
read -p "Enter your project folder name: " project_name

# Create a new Vite project with React and TypeScript using Bun
bun create vite $project_name --template react-ts

# Change to the project directory
cd $project_name

# Install Tailwind CSS and its dependencies using Bun
bun add -d tailwindcss postcss autoprefixer

# Initialize Tailwind CSS configuration
bunx tailwindcss init -p

# Overwrite the Tailwind configuration file with the necessary content paths
cat > tailwind.config.js <<EOL
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# Replace the content of src/index.css with Tailwind directives
cat > src/index.css <<EOL
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# Install the SWC plugin for Vite using Bun
bun add -d @vitejs/plugin-react-swc

# Update the Vite configuration to use the SWC plugin
cat > vite.config.ts <<EOL
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
});
EOL

# Install react-router-dom using Bun
bun add react-router-dom

# Create src/pages directory
mkdir -p src/pages

# Create src/pages/Home.tsx
cat > src/pages/Home.tsx <<EOL
import React from 'react';

function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Home Page</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
}

export default Home;
EOL

# Create src/pages/About.tsx
cat > src/pages/About.tsx <<EOL
import React from 'react';

function About() {
  return (
    <div>
      <h2 className="text-2xl font-bold">About Page</h2>
      <p>This is the about page.</p>
    </div>
  );
}

export default About;
EOL

# Replace the content of src/App.tsx with a component using Tailwind CSS classes and React Router
cat > src/App.tsx <<EOL
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-200">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
EOL

# Start the development server using Bun
bun run dev
