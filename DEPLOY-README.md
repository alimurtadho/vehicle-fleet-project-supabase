# 🚀 Quick Deploy - Vehicle Fleet Pro

Ready to deploy your Vehicle Fleet Pro application to Vercel? Follow these simple steps:

## Option 1: One-Click Deploy (Recommended)

```bash
# Run the automated deployment script
./deploy.sh
```

This script will:
- ✅ Validate your project
- ✅ Install dependencies
- ✅ Run type checking and linting
- ✅ Test production build
- ✅ Prepare git repository
- ✅ Show next steps

## Option 2: Manual Deploy

### Step 1: Prepare Repository
```bash
# Build and test locally
npm install
npm run build
npm run type-check

# Commit your changes
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel
1. Visit [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Select **Next.js** framework
4. Add environment variables (see below)
5. Click **Deploy**

### Step 3: Environment Variables
Add these to your Vercel project settings:

```env
DATABASE_URL=your_supabase_database_url
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXTAUTH_SECRET=your_32_character_secret
NEXTAUTH_URL=https://your-app.vercel.app
```

## 🔧 Configuration Files

- **`vercel.json`** - Vercel deployment configuration
- **`.env.example`** - Environment variables template
- **`VERCEL-DEPLOYMENT.md`** - Detailed deployment guide
- **`deploy.sh`** - Automated deployment script

## 🎯 What You Get

After deployment, your app will have:
- ✅ **Role-based Dashboard** - Admin and Employee interfaces
- ✅ **Vehicle Booking System** - Complete request workflow
- ✅ **Vehicle Management** - Fleet tracking and assignment
- ✅ **Responsive Design** - Works on all devices
- ✅ **Secure Authentication** - Supabase Auth integration
- ✅ **Database Integration** - PostgreSQL with Prisma

## 🔗 Live Demo Features

**Admin Dashboard:**
- Create/manage bookings
- Vehicle fleet management
- Process approvals
- Generate reports
- User management
- System monitoring

**Employee Dashboard:**
- Request vehicles
- View booking history
- Update profile
- Contact support

## 📞 Support

Need help with deployment? Check:
- **`VERCEL-DEPLOYMENT.md`** - Complete deployment guide
- **Vercel Docs** - [vercel.com/docs](https://vercel.com/docs)
- **Supabase Docs** - [supabase.com/docs](https://supabase.com/docs)

---

**🎉 Your Vehicle Fleet Pro app will be live in under 5 minutes!**
