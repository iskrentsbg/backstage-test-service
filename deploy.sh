#!/bin/bash

# Deploy script for backstage-test-service
set -e

echo "🚀 Starting deployment of backstage-test-service..."

# Navigate to the correct directory
cd "$(dirname "$0")"

echo "📦 Building Docker image..."
docker build -t iskrents/backstage-test-service:latest .

echo "🔐 Please login to Docker Hub if prompted..."
docker login

echo "📤 Pushing image to Docker Hub..."
docker push iskrents/backstage-test-service:latest

echo "🧪 Testing container locally..."
docker run -d -p 3000:3000 --name backstage-test iskrents/backstage-test-service:latest

echo "⏳ Waiting for container to start..."
sleep 5

echo "🔍 Testing endpoints..."
curl -f http://localhost:3000/ || echo "❌ Root endpoint failed"
curl -f http://localhost:3000/health || echo "❌ Health endpoint failed"
curl -f http://localhost:3000/api/info || echo "❌ Info endpoint failed"

echo "🧹 Cleaning up test container..."
docker stop backstage-test && docker rm backstage-test

echo "📝 Committing changes to GitHub..."
git add .
git commit -m "Add Docker container support with Express server" || echo "No changes to commit"
git push origin main

echo "✅ Deployment complete!"
echo "🌐 Docker Hub: https://hub.docker.com/r/iskrents/backstage-test-service"
echo "🏠 Check Backstage at: http://localhost:3001"
