# 🚀 VehicleFleet Pro - Installation Guide

## Quick Setup Instructions

### 1. Prerequisites
- Node.js 18+ installed
- npm 8+ installed
- Supabase account
- Git

### 2. Installation

```bash
# Navigate to the project directory
cd vehicle-fleet-pro

# Make setup script executable
chmod +x setup.sh

# Run automated setup
./setup.sh
```

### 3. Supabase Configuration

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Copy project URL and API keys

2. **Configure Environment Variables**
   ```bash
   # Edit .env.local file
   nano .env.local
   ```
   
   Add your Supabase credentials:
   ```env
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
   NEXT_PUBLIC_SUPABASE_URL="https://[PROJECT-REF].supabase.co"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="[YOUR-SUPABASE-ANON-KEY]"
   SUPABASE_SERVICE_ROLE_KEY="[YOUR-SUPABASE-SERVICE-ROLE-KEY]"
   ```

### 4. Database Setup

```bash
# Push schema to Supabase
npm run db:push

# Seed initial data
npm run db:seed
```

### 5. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## 🔐 Demo Login Credentials

```
Admin:
Email: admin@vehiclefleet.com
Password: admin123

Employee:
Email: employee@vehiclefleet.com  
Password: employee123
```

## 🎯 Features Included

✅ **User Authentication** (Supabase Auth)
✅ **Role-based Access Control** (Admin, Approver, Employee, Management)
✅ **Vehicle Management** (CRUD operations)
✅ **Booking System** (Request, approval workflow)
✅ **Multi-level Approval** (Hierarchical approval)
✅ **Real-time Dashboard** (Live updates)
✅ **Responsive Design** (Mobile-first)
✅ **Database Schema** (PostgreSQL with Prisma)
✅ **TypeScript Support** (End-to-end type safety)
✅ **Modern UI Components** (shadcn/ui + Tailwind CSS)

## 📁 Project Structure

```
vehicle-fleet-pro/
├── 📁 prisma/           # Database schema & migrations
├── 📁 src/
│   ├── 📁 app/          # Next.js 14 app router
│   ├── 📁 components/   # Reusable UI components
│   ├── 📁 lib/          # Utilities & configurations
│   └── 📁 types/        # TypeScript definitions
├── 📄 README.md         # Comprehensive documentation
├── 📄 package.json      # Dependencies & scripts
└── 📄 .env.example      # Environment template
```

## 🛠️ Development Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server

# Database
npm run db:generate     # Generate Prisma client
npm run db:push         # Push schema to database
npm run db:seed         # Seed initial data

# Code Quality
npm run lint            # Run ESLint
npm run type-check      # TypeScript checking
```

## 🚀 Deployment to Vercel

1. **Connect GitHub Repository**
   - Push code to GitHub
   - Connect repository to Vercel

2. **Configure Environment Variables**
   - Add all environment variables in Vercel dashboard
   - Include Supabase credentials

3. **Deploy**
   - Automatic deployment on push to main branch

## 📋 Post-Installation Checklist

- [ ] Supabase project created
- [ ] Environment variables configured
- [ ] Database schema pushed
- [ ] Initial data seeded
- [ ] Application running locally
- [ ] Demo credentials tested
- [ ] All features working

## 🆘 Troubleshooting

### Common Issues:

1. **Node.js Version Error**
   ```bash
   # Check version
   node --version
   # Should be 18.0 or higher
   ```

2. **Database Connection Error**
   - Verify DATABASE_URL in .env.local
   - Check Supabase project status
   - Ensure database is accessible

3. **Build Errors**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Prisma Client Errors**
   ```bash
   # Regenerate Prisma client
   npm run db:generate
   ```

## 📞 Support

- 📧 Email: support@vehiclefleet.com
- 📖 Documentation: See README.md
- 🐛 Issues: Create GitHub issue

---

**Ready to manage your vehicle fleet efficiently! 🚗💨**
