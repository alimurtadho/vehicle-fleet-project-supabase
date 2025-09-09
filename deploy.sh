#!/bin/bash

# Vehicle Fleet Pro - Quick Deploy Script
# This script prepares your project for Vercel deployment

echo "🚀 Vehicle Fleet Pro - Quick Deploy to Vercel"
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if project name matches
PROJECT_NAME=$(node -p "require('./package.json').name")
if [ "$PROJECT_NAME" != "vehicle-fleet-pro" ]; then
    echo "❌ Error: This doesn't appear to be the Vehicle Fleet Pro project."
    exit 1
fi

echo "✅ Project validated: $PROJECT_NAME"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
fi

# Run type checking
echo "🔍 Running type check..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "⚠️  Type check failed, but continuing..."
fi

# Run linting
echo "🧹 Running linter..."
npm run lint
if [ $? -ne 0 ]; then
    echo "⚠️  Linting issues found, but continuing..."
fi

# Test build
echo "🔨 Testing production build..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors before deploying."
    exit 1
fi

echo "✅ Build successful!"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit - Vehicle Fleet Pro"
else
    echo "📝 Committing latest changes..."
    git add .
    git commit -m "Prepare for Vercel deployment - $(date)"
fi

echo ""
echo "🎉 Your project is ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub/GitLab:"
echo "   git remote add origin <your-repo-url>"
echo "   git push -u origin main"
echo ""
echo "2. Deploy to Vercel:"
echo "   • Visit https://vercel.com/new"
echo "   • Import your repository"
echo "   • Add environment variables (see .env.example)"
echo "   • Click Deploy!"
echo ""
echo "3. Required Environment Variables:"
echo "   • DATABASE_URL (Supabase)"
echo "   • NEXT_PUBLIC_SUPABASE_URL"
echo "   • NEXT_PUBLIC_SUPABASE_ANON_KEY"
echo "   • SUPABASE_SERVICE_ROLE_KEY"
echo "   • NEXTAUTH_SECRET"
echo "   • NEXTAUTH_URL (your Vercel app URL)"
echo ""
echo "📚 Full deployment guide: ./VERCEL-DEPLOYMENT.md"
echo ""
echo "🚀 Happy deploying!"
