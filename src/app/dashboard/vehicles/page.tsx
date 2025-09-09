'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function VehiclesPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('all')

  // Mock vehicle data
  const vehicles = [
    {
      id: 'VH001',
      licensePlate: 'B 1234 XYZ',
      brand: 'Toyota',
      model: 'Avanza',
      year: 2022,
      type: 'Personnel Transport',
      ownership: 'Owned',
      location: 'Headquarters',
      status: 'Available',
      fuelType: 'Gasoline',
      capacity: 7,
      lastMaintenance: '2025-08-01',
      nextMaintenance: '2025-09-01'
    },
    {
      id: 'VH002',
      licensePlate: 'B 5678 ABC',
      brand: 'Mitsubishi',
      model: 'Xpander',
      year: 2023,
      type: 'Personnel Transport',
      ownership: 'Owned',
      location: 'Branch Office',
      status: 'In Use',
      fuelType: 'Gasoline',
      capacity: 7,
      lastMaintenance: '2025-07-15',
      nextMaintenance: '2025-08-15'
    },
    {
      id: 'VH003',
      licensePlate: 'B 9999 DEF',
      brand: 'Isuzu',
      model: 'Elf',
      year: 2021,
      type: 'Cargo Vehicle',
      ownership: 'Rented',
      location: 'Mining Site A',
      status: 'Available',
      fuelType: 'Diesel',
      capacity: 3,
      lastMaintenance: '2025-08-10',
      nextMaintenance: '2025-09-10'
    },
    {
      id: 'VH004',
      licensePlate: 'B 7777 GHI',
      brand: 'Caterpillar',
      model: 'Dump Truck',
      year: 2020,
      type: 'Heavy Equipment',
      ownership: 'Owned',
      location: 'Mining Site B',
      status: 'Maintenance',
      fuelType: 'Diesel',
      capacity: 2,
      lastMaintenance: '2025-08-20',
      nextMaintenance: '2025-09-20'
    }
  ]

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'Available': { bg: 'bg-green-100', text: 'text-green-800', icon: '✅' },
      'In Use': { bg: 'bg-blue-100', text: 'text-blue-800', icon: '🚗' },
      'Maintenance': { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: '🔧' },
      'Out of Service': { bg: 'bg-red-100', text: 'text-red-800', icon: '❌' }
    }
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig['Available']
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.icon} {status}
      </span>
    )
  }

  const getOwnershipBadge = (ownership: string) => {
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
        ownership === 'Owned' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
      }`}>
        {ownership}
      </span>
    )
  }

  const filteredVehicles = vehicles.filter(vehicle => {
    if (activeTab === 'all') return true
    if (activeTab === 'available') return vehicle.status === 'Available'
    if (activeTab === 'in-use') return vehicle.status === 'In Use'
    if (activeTab === 'maintenance') return vehicle.status === 'Maintenance'
    return true
  })

  const handleAssignVehicle = (vehicleId: string) => {
    alert(`Assign vehicle ${vehicleId} to booking...\n\n🚗 Features to implement:\n• Select pending booking\n• Driver assignment\n• Schedule validation\n• Booking confirmation`)
  }

  const handleMaintenanceSchedule = (vehicleId: string) => {
    alert(`Schedule maintenance for ${vehicleId}...\n\n🔧 Features to implement:\n• Maintenance calendar\n• Service provider selection\n• Cost estimation\n• Schedule notification`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Vehicle Management</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage fleet vehicles, assign to bookings, and schedule maintenance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-blue-600">🚗</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Total Fleet</p>
                <p className="text-lg font-semibold text-gray-900">{vehicles.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="text-green-600">✅</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Available</p>
                <p className="text-lg font-semibold text-gray-900">
                  {vehicles.filter(v => v.status === 'Available').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-blue-600">🛣️</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">In Use</p>
                <p className="text-lg font-semibold text-gray-900">
                  {vehicles.filter(v => v.status === 'In Use').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <span className="text-yellow-600">🔧</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Maintenance</p>
                <p className="text-lg font-semibold text-gray-900">
                  {vehicles.filter(v => v.status === 'Maintenance').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white shadow rounded-lg">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex" aria-label="Tabs">
              {[
                { key: 'all', label: 'All Vehicles', count: vehicles.length },
                { key: 'available', label: 'Available', count: vehicles.filter(v => v.status === 'Available').length },
                { key: 'in-use', label: 'In Use', count: vehicles.filter(v => v.status === 'In Use').length },
                { key: 'maintenance', label: 'Maintenance', count: vehicles.filter(v => v.status === 'Maintenance').length }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 py-2 px-1 text-center border-b-2 font-medium text-sm ${
                    activeTab === tab.key
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredVehicles.map((vehicle) => (
                <div key={vehicle.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {vehicle.brand} {vehicle.model}
                      </h3>
                      <p className="text-sm text-gray-500">{vehicle.licensePlate}</p>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(vehicle.status)}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Type:</span>
                      <span className="font-medium">{vehicle.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Year:</span>
                      <span className="font-medium">{vehicle.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Ownership:</span>
                      {getOwnershipBadge(vehicle.ownership)}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Location:</span>
                      <span className="font-medium">{vehicle.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Capacity:</span>
                      <span className="font-medium">{vehicle.capacity} persons</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Fuel:</span>
                      <span className="font-medium">{vehicle.fuelType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Next Maintenance:</span>
                      <span className="font-medium text-yellow-600">{vehicle.nextMaintenance}</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {vehicle.status === 'Available' && (
                      <button
                        onClick={() => handleAssignVehicle(vehicle.id)}
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-sm"
                      >
                        Assign to Booking
                      </button>
                    )}
                    <button
                      onClick={() => handleMaintenanceSchedule(vehicle.id)}
                      className="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-3 rounded text-sm"
                    >
                      Schedule Maintenance
                    </button>
                    <button className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
              Add New Vehicle
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Fleet Report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
