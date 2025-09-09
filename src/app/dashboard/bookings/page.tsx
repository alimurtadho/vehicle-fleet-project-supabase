'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function BookingsManagementPage() {
  const [activeTab, setActiveTab] = useState('pending')
  const router = useRouter()

  // Mock data for demonstrations
  const pendingBookings = [
    {
      id: 'BK001',
      employee: 'John Doe',
      department: 'Mining Operations',
      purpose: 'Site inspection at Mining Site A',
      destination: 'Mining Site A',
      startDate: '2025-08-25',
      endDate: '2025-08-25',
      vehicleType: 'Personnel Transport',
      status: 'pending_admin',
      priority: 'high',
      submittedAt: '2025-08-23 09:30'
    },
    {
      id: 'BK002',
      employee: 'Jane Smith',
      department: 'Logistics',
      purpose: 'Material transport to warehouse',
      destination: 'Main Warehouse',
      startDate: '2025-08-26',
      endDate: '2025-08-26',
      vehicleType: 'Cargo Vehicle',
      status: 'pending_admin',
      priority: 'medium',
      submittedAt: '2025-08-23 10:15'
    }
  ]

  const processedBookings = [
    {
      id: 'BK003',
      employee: 'Mike Johnson',
      department: 'Engineering',
      purpose: 'Equipment delivery',
      destination: 'Mining Site B',
      startDate: '2025-08-24',
      endDate: '2025-08-24',
      vehicleType: 'Heavy Equipment',
      status: 'pending_approval',
      assignedVehicle: 'HD-001 (Dump Truck)',
      assignedDriver: 'Driver #123',
      priority: 'high',
      processedAt: '2025-08-23 08:45'
    }
  ]

  const handleProcessBooking = (bookingId: string) => {
    alert(`Processing booking ${bookingId}...\n\n✅ Features to implement:\n• Vehicle assignment\n• Driver selection\n• Route to approvers\n• Send notifications`)
  }

  const handleAssignDriver = (bookingId: string) => {
    alert(`Driver assignment for ${bookingId}...\n\n🚗 Features to implement:\n• Available driver list\n• Driver scheduling\n• Conflict detection\n• Assignment confirmation`)
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'pending_admin': { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Pending Admin' },
      'pending_approval': { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Pending Approval' },
      'approved': { bg: 'bg-green-100', text: 'text-green-800', label: 'Approved' },
      'rejected': { bg: 'bg-red-100', text: 'text-red-800', label: 'Rejected' }
    }
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig['pending_admin']
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    )
  }

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      'high': { bg: 'bg-red-100', text: 'text-red-800' },
      'medium': { bg: 'bg-orange-100', text: 'text-orange-800' },
      'low': { bg: 'bg-gray-100', text: 'text-gray-800' }
    }
    const config = priorityConfig[priority as keyof typeof priorityConfig] || priorityConfig['medium']
    
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${config.bg} ${config.text}`}>
        {priority.toUpperCase()}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Booking Management</h1>
          <p className="mt-1 text-sm text-gray-600">
            Review, process, and assign vehicles to booking requests
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <span className="text-yellow-600">⏳</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Pending Admin</p>
                <p className="text-lg font-semibold text-gray-900">{pendingBookings.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-blue-600">📋</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">In Approval</p>
                <p className="text-lg font-semibold text-gray-900">{processedBookings.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="text-green-600">✅</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Approved Today</p>
                <p className="text-lg font-semibold text-gray-900">3</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <span className="text-purple-600">🚗</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Active Trips</p>
                <p className="text-lg font-semibold text-gray-900">7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white shadow rounded-lg">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('pending')}
                className={`w-1/3 py-2 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'pending'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Pending Admin Review ({pendingBookings.length})
              </button>
              <button
                onClick={() => setActiveTab('processed')}
                className={`w-1/3 py-2 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'processed'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                In Approval Process ({processedBookings.length})
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`w-1/3 py-2 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'completed'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Completed Bookings
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'pending' && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Requests Requiring Admin Processing</h3>
                {pendingBookings.map((booking) => (
                  <div key={booking.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-medium text-gray-900">#{booking.id}</h4>
                          {getStatusBadge(booking.status)}
                          {getPriorityBadge(booking.priority)}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p><strong>Employee:</strong> {booking.employee}</p>
                            <p><strong>Department:</strong> {booking.department}</p>
                            <p><strong>Purpose:</strong> {booking.purpose}</p>
                          </div>
                          <div>
                            <p><strong>Destination:</strong> {booking.destination}</p>
                            <p><strong>Date:</strong> {booking.startDate} to {booking.endDate}</p>
                            <p><strong>Vehicle Type:</strong> {booking.vehicleType}</p>
                            <p><strong>Submitted:</strong> {booking.submittedAt}</p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button
                          onClick={() => handleProcessBooking(booking.id)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
                        >
                          Process Request
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'processed' && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Bookings in Approval Process</h3>
                {processedBookings.map((booking) => (
                  <div key={booking.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-medium text-gray-900">#{booking.id}</h4>
                          {getStatusBadge(booking.status)}
                          {getPriorityBadge(booking.priority)}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p><strong>Employee:</strong> {booking.employee}</p>
                            <p><strong>Department:</strong> {booking.department}</p>
                            <p><strong>Purpose:</strong> {booking.purpose}</p>
                            <p><strong>Assigned Vehicle:</strong> {booking.assignedVehicle}</p>
                          </div>
                          <div>
                            <p><strong>Destination:</strong> {booking.destination}</p>
                            <p><strong>Date:</strong> {booking.startDate} to {booking.endDate}</p>
                            <p><strong>Assigned Driver:</strong> {booking.assignedDriver}</p>
                            <p><strong>Processed:</strong> {booking.processedAt}</p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0 space-y-2">
                        <button
                          onClick={() => handleAssignDriver(booking.id)}
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm block w-full"
                        >
                          Reassign Driver
                        </button>
                        <button
                          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-sm block w-full"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'completed' && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📋</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Completed Bookings</h3>
                <p className="text-gray-500">View completed and archived bookings</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Load Completed Bookings
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => router.push('/dashboard')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            ← Back to Dashboard
          </button>
          <div className="space-x-3">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Export to Excel
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
