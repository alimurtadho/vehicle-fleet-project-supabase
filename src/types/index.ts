import { Database } from './database'

// Prisma types (will be generated)
export type UserRole = 'ADMIN' | 'APPROVER' | 'EMPLOYEE' | 'MANAGEMENT'
export type LocationType = 'HEADQUARTERS' | 'BRANCH' | 'MINE_SITE'
export type VehicleType = 'PASSENGER' | 'CARGO' | 'HEAVY_EQUIPMENT'
export type OwnershipType = 'OWNED' | 'RENTED'
export type VehicleStatus = 'AVAILABLE' | 'IN_USE' | 'MAINTENANCE' | 'OUT_OF_SERVICE'
export type BookingStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
export type ApprovalStatus = 'PENDING' | 'APPROVED' | 'REJECTED'

// Supabase types
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type InsertTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type UpdateTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']

// Application types
export interface User extends Tables<'users'> {
  location?: Location
  supervisor?: User
}

export interface Location extends Tables<'locations'> {}

export interface Vehicle extends Tables<'vehicles'> {
  location?: Location
}

export interface Booking extends Tables<'bookings'> {
  vehicle?: Vehicle
  employee?: User
  driver?: Driver
  approvals?: Approval[]
}

export interface Approval {
  id: string
  booking_id: string
  approver_id: string
  level: number
  status: ApprovalStatus
  comments?: string
  approved_at?: string
  created_at: string
  approver?: User
}

export interface Driver {
  id: string
  employee_id: string
  full_name: string
  license_number: string
  phone: string
  location_id: string
  status: 'AVAILABLE' | 'ASSIGNED' | 'OFF_DUTY'
  created_at: string
  updated_at: string
  location?: Location
}

export interface FuelLog {
  id: string
  vehicle_id: string
  booking_id?: string
  fuel_amount: number
  cost: number
  odometer_reading: number
  notes?: string
  logged_by: string
  logged_at: string
  vehicle?: Vehicle
  user?: User
}

export interface MaintenanceSchedule {
  id: string
  vehicle_id: string
  type: 'SERVICE' | 'REPAIR' | 'INSPECTION'
  description: string
  scheduled_date: string
  completed_date?: string
  cost?: number
  status: 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
  notes?: string
  created_at: string
  vehicle?: Vehicle
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
  pagination?: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// Dashboard types
export interface DashboardStats {
  totalVehicles: number
  availableVehicles: number
  activeBookings: number
  pendingApprovals: number
  totalFuelCost: number
  utilizationRate: number
}

export interface ChartData {
  name: string
  value: number
  [key: string]: any
}

// Form types
export interface BookingFormData {
  vehicle_id: string
  purpose: string
  destination: string
  start_datetime: string
  end_datetime: string
  notes?: string
}

export interface VehicleFormData {
  license_plate: string
  brand: string
  model: string
  year: number
  type: VehicleType
  ownership: OwnershipType
  location_id: string
  fuel_type: string
  capacity: number
  daily_rate?: number
  image_url?: string
}
