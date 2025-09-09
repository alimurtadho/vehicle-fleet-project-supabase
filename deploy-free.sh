#!/bin/bash

# Vehicle Fleet Pro - FREE Deployment Script
# Deploy to Supabase + Vercel at ZERO cost

echo "🆓 Vehicle Fleet Pro - 100% FREE Deployment"
echo "==========================================="
echo "💰 Monthly Cost: $0"
echo "🎯 Platform: Supabase (Database) + Vercel (Hosting)"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Validate project
PROJECT_NAME=$(node -p "require('./package.json').name")
echo "✅ Project: $PROJECT_NAME"

# Install dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Test build
echo "🔨 Testing production build..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors before deploying."
    exit 1
fi

echo "✅ Build successful!"

# Check for environment variables
if [ ! -f ".env.local" ] && [ ! -f ".env" ]; then
    echo ""
    echo "⚠️  Environment variables not found!"
    echo "📝 Please create .env.local with your Supabase credentials:"
    echo ""
    echo "DATABASE_URL=your_supabase_database_url"
    echo "NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co"
    echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key"
    echo "SUPABASE_SERVICE_ROLE_KEY=your_service_role_key"
    echo "NEXTAUTH_SECRET=your_32_character_secret"
    echo ""
    echo "🔗 Get these from: https://supabase.com/dashboard"
    echo ""
fi

# Git setup
if [ ! -d ".git" ]; then
    echo "📝 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit - Vehicle Fleet Pro (FREE deployment)"
else
    echo "📝 Committing latest changes..."
    git add .
    git commit -m "Ready for FREE deployment - $(date)"
fi

echo ""
echo "🎉 Ready for FREE deployment!"
echo ""
echo "Next steps:"
echo ""
echo "1. 🆓 Setup Supabase (FREE):"
echo "   • Visit https://supabase.com"
echo "   • Create account (free)"
echo "   • Create new project"
echo "   • Copy database URL and API keys"
echo ""
echo "2. 🆓 Deploy to Vercel (FREE):"
echo "   • Push to GitHub: git push origin main"
echo "   • Visit https://vercel.com/new"
echo "   • Import your repository"
echo "   • Add environment variables"
echo "   • Click Deploy!"
echo ""
echo "3. 💰 Monthly Cost: $0"
echo "   • Supabase Free: 500MB DB, 50K users"
echo "   • Vercel Free: 100GB bandwidth"
echo "   • Custom domain included!"
echo ""
echo "🚀 Your Vehicle Fleet Pro will be live in 5 minutes!"
echo "📚 Full guide: ./FREE-DEPLOYMENT.md"
echo ""
echo "✨ Features you get for FREE:"
echo "   ✅ Role-based dashboard"
echo "   ✅ Vehicle booking system"
echo "   ✅ Fleet management"
echo "   ✅ User authentication"
echo "   ✅ Real-time updates"
echo "   ✅ Mobile responsive"
echo "   ✅ SSL certificate"
echo "   ✅ Custom domain"
echo ""
echo "🎉 Happy FREE deploying!"
