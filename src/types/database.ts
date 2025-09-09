export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          role: 'ADMIN' | 'APPROVER' | 'EMPLOYEE' | 'MANAGEMENT'
          employee_id: string
          full_name: string
          department: string
          supervisor_id: string | null
          location_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          role: 'ADMIN' | 'APPROVER' | 'EMPLOYEE' | 'MANAGEMENT'
          employee_id: string
          full_name: string
          department: string
          supervisor_id?: string | null
          location_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: 'ADMIN' | 'APPROVER' | 'EMPLOYEE' | 'MANAGEMENT'
          employee_id?: string
          full_name?: string
          department?: string
          supervisor_id?: string | null
          location_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      locations: {
        Row: {
          id: string
          name: string
          type: 'HEADQUARTERS' | 'BRANCH' | 'MINE_SITE'
          address: string
          coordinates: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          type: 'HEADQUARTERS' | 'BRANCH' | 'MINE_SITE'
          address: string
          coordinates?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          type?: 'HEADQUARTERS' | 'BRANCH' | 'MINE_SITE'
          address?: string
          coordinates?: string | null
          created_at?: string
        }
      }
      vehicles: {
        Row: {
          id: string
          license_plate: string
          brand: string
          model: string
          year: number
          type: 'PASSENGER' | 'CARGO' | 'HEAVY_EQUIPMENT'
          ownership: 'OWNED' | 'RENTED'
          location_id: string
          status: 'AVAILABLE' | 'IN_USE' | 'MAINTENANCE' | 'OUT_OF_SERVICE'
          fuel_type: string
          capacity: number
          daily_rate: number | null
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          license_plate: string
          brand: string
          model: string
          year: number
          type: 'PASSENGER' | 'CARGO' | 'HEAVY_EQUIPMENT'
          ownership: 'OWNED' | 'RENTED'
          location_id: string
          status?: 'AVAILABLE' | 'IN_USE' | 'MAINTENANCE' | 'OUT_OF_SERVICE'
          fuel_type: string
          capacity: number
          daily_rate?: number | null
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          license_plate?: string
          brand?: string
          model?: string
          year?: number
          type?: 'PASSENGER' | 'CARGO' | 'HEAVY_EQUIPMENT'
          ownership?: 'OWNED' | 'RENTED'
          location_id?: string
          status?: 'AVAILABLE' | 'IN_USE' | 'MAINTENANCE' | 'OUT_OF_SERVICE'
          fuel_type?: string
          capacity?: number
          daily_rate?: number | null
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          employee_id: string
          vehicle_id: string
          driver_id: string | null
          purpose: string
          destination: string
          start_datetime: string
          end_datetime: string
          status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
          notes: string | null
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          employee_id: string
          vehicle_id: string
          driver_id?: string | null
          purpose: string
          destination: string
          start_datetime: string
          end_datetime: string
          status?: 'PENDING' | 'APPROVED' | 'REJECTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
          notes?: string | null
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          employee_id?: string
          vehicle_id?: string
          driver_id?: string | null
          purpose?: string
          destination?: string
          start_datetime?: string
          end_datetime?: string
          status?: 'PENDING' | 'APPROVED' | 'REJECTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
          notes?: string | null
          created_by?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
