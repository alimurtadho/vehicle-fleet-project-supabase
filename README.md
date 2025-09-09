# VehicleFleet Pro - Vehicle Booking Management System

A comprehensive vehicle booking and fleet management system built with Next.js 14, TypeScript, and Supabase.

## 🚀 Features

- **Multi-level Approval Workflow** - Hierarchical approval system (minimum 2 levels)
- **Real-time Dashboard** - Live vehicle utilization and analytics
- **Vehicle Management** - Complete fleet management with maintenance tracking
- **Fuel Consumption Tracking** - Monitor and analyze fuel usage
- **Responsive Design** - Mobile-first responsive interface
- **Role-based Access Control** - Admin, Approver, Employee, Management roles
- **Excel Export** - Export reports in Excel format
- **Real-time Notifications** - Live updates via Supabase real-time

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (Supabase hosted)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel + Supabase

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm 8.0 or higher
- Supabase account
- Git

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd vehicle-fleet-pro
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your values
```

Required environment variables:
```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
NEXT_PUBLIC_SUPABASE_URL="https://[PROJECT-REF].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="[YOUR-SUPABASE-ANON-KEY]"
SUPABASE_SERVICE_ROLE_KEY="[YOUR-SUPABASE-SERVICE-ROLE-KEY]"
```

### 4. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed initial data (optional)
npm run db:seed
```

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 🗄️ Database Schema

The application uses the following main entities:

- **Users** - System users with roles (Admin, Approver, Employee, Management)
- **Vehicles** - Fleet vehicles with status tracking
- **Bookings** - Vehicle booking requests with approval workflow
- **Approvals** - Multi-level approval system
- **Locations** - Company locations (HQ, Branch, Mine sites)
- **Drivers** - Available drivers for vehicle assignment
- **Fuel Logs** - Fuel consumption tracking
- **Maintenance** - Vehicle maintenance scheduling

## 👥 User Roles & Permissions

### Admin (Pool Manager)
- ✅ Create/edit vehicle bookings
- ✅ Assign drivers to approved bookings
- ✅ Manage vehicle database and maintenance
- ✅ Generate and export reports
- ✅ Manage user accounts and permissions

### Approver (Supervisor/Manager)
- ✅ Review and approve/reject booking requests
- ✅ View team booking statistics
- ✅ Delegate approval authority
- ✅ Access departmental analytics

### Employee (Requester)
- ✅ Submit vehicle booking requests
- ✅ View own booking history and status
- ✅ Cancel pending requests
- ✅ Update contact information

### Management (Executive)
- ✅ View comprehensive dashboards and analytics
- ✅ Access all reports and export data
- ✅ Monitor overall fleet performance
- ✅ View cost analysis and trends

## 🔐 Demo Credentials

```
Admin:
Email: admin@vehiclefleet.com
Password: admin123

Employee:
Email: employee@vehiclefleet.com
Password: employee123

Approver:
Email: approver@vehiclefleet.com
Password: approver123
```

## 📊 Key Features

### Vehicle Booking System
- Submit booking requests with purpose and destination
- Automatic conflict detection
- Multi-level approval workflow
- Driver assignment after approval
- Real-time status updates

### Dashboard & Analytics
- Real-time vehicle utilization metrics
- Fuel consumption charts
- Booking statistics and trends
- Interactive charts with Recharts
- Mobile-responsive design

### Reporting System
- Daily, weekly, monthly reports
- Excel export functionality
- Custom date range filtering
- Email report delivery
- Comprehensive audit trails

## 🚀 Deployment

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Supabase Setup

1. Create new Supabase project
2. Copy database URL and API keys
3. Configure Row Level Security (RLS) policies
4. Set up authentication providers

## 📝 Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run database migrations
npm run db:reset     # Reset database
npm run db:seed      # Seed initial data

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Linting
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🏗️ Project Structure

```
vehicle-fleet-pro/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── app/                 # Next.js 14 app router
│   │   ├── dashboard/       # Dashboard pages
│   │   ├── bookings/        # Booking management
│   │   ├── vehicles/        # Vehicle management
│   │   ├── api/             # API routes
│   │   └── globals.css
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── forms/          # Form components
│   │   ├── charts/         # Chart components
│   │   └── layout/         # Layout components
│   ├── lib/                # Utilities and configurations
│   │   ├── supabase.ts     # Supabase client
│   │   ├── prisma.ts       # Prisma client
│   │   └── utils.ts        # General utilities
│   ├── types/              # TypeScript type definitions
│   └── hooks/              # Custom React hooks
├── public/                 # Static assets
└── package.json
```

## 🔧 Configuration

### Database Configuration
- PostgreSQL with Prisma ORM
- Row Level Security (RLS) for data protection
- Real-time subscriptions for live updates

### Authentication
- Supabase Auth with email/password
- Role-based access control
- JWT token management

### Styling
- Tailwind CSS for styling
- shadcn/ui for component library
- Responsive design with mobile-first approach

## 📖 API Documentation

### Core Endpoints

```typescript
// Authentication
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/user

// Vehicles
GET    /api/vehicles              # List all vehicles
POST   /api/vehicles              # Create vehicle (admin only)
GET    /api/vehicles/[id]         # Get vehicle details
PUT    /api/vehicles/[id]         # Update vehicle (admin only)
DELETE /api/vehicles/[id]         # Delete vehicle (admin only)

// Bookings
GET  /api/bookings               # List bookings (filtered by role)
POST /api/bookings               # Create booking
GET  /api/bookings/[id]          # Get booking details
PUT  /api/bookings/[id]          # Update booking

// Approvals
GET  /api/approvals              # List pending approvals
POST /api/approvals/[id]/approve # Approve booking
POST /api/approvals/[id]/reject  # Reject booking

// Dashboard
GET /api/dashboard/stats         # Dashboard statistics
GET /api/dashboard/charts        # Chart data

// Reports
GET  /api/reports/usage          # Usage reports
POST /api/reports/export         # Export to Excel
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@vehiclefleet.com or create an issue in the repository.

---

**Built with ❤️ for efficient fleet management**
