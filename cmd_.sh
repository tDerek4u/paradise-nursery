#!/bin/bash

# Define variables
REPO_URL="https://github.com/tDerek4u/paradise-nursery.git"
PROJECT_DIR="paradise-nursery"

# Clone the repository
echo "Cloning the repository from $REPO_URL..."
git clone $REPO_URL

# Navigate into the project directory
cd $PROJECT_DIR || { echo "Directory $PROJECT_DIR not found. Exiting."; exit 1; }

# Install dependencies
echo "Installing dependencies..."
npm install

# Start the React application
echo "Starting the React application..."
npm run dev

# Print completion message
echo "Setup complete! Your React application is now running."
