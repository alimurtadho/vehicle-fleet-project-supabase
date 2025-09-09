'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewBookingPage() {
  const [formData, setFormData] = useState({
    purpose: '',
    destination: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    vehicleType: '',
    passengers: '',
    notes: ''
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      alert('✅ Booking request submitted successfully!\n\nYour request has been sent for admin processing and approval.')
      setLoading(false)
      router.push('/dashboard')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">New Vehicle Booking Request</h1>
              <p className="mt-1 text-sm text-gray-600">
                Submit a new vehicle booking request. Your request will be processed by admin and sent for approval.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Purpose */}
              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
                  Purpose of Trip *
                </label>
                <input
                  type="text"
                  name="purpose"
                  id="purpose"
                  required
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                  placeholder="e.g., Site inspection, Client meeting, Material transport"
                />
              </div>

              {/* Destination */}
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                  Destination *
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  required
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                  placeholder="e.g., Mining Site A, Head Office, Warehouse"
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    required
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                  />
                </div>
                <div>
                  <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
                    Start Time *
                  </label>
                  <input
                    type="time"
                    name="startTime"
                    id="startTime"
                    required
                    value={formData.startTime}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                    End Date *
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    required
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                  />
                </div>
                <div>
                  <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">
                    End Time *
                  </label>
                  <input
                    type="time"
                    name="endTime"
                    id="endTime"
                    required
                    value={formData.endTime}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                  />
                </div>
              </div>

              {/* Vehicle Type */}
              <div>
                <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
                  Vehicle Type *
                </label>
                <select
                  name="vehicleType"
                  id="vehicleType"
                  required
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                >
                  <option value="">Select vehicle type</option>
                  <option value="passenger">Personnel Transport (Car/Van)</option>
                  <option value="cargo">Cargo Vehicle (Truck)</option>
                  <option value="heavy">Heavy Equipment</option>
                  <option value="any">Any Available</option>
                </select>
              </div>

              {/* Number of Passengers */}
              <div>
                <label htmlFor="passengers" className="block text-sm font-medium text-gray-700">
                  Number of Passengers
                </label>
                <input
                  type="number"
                  name="passengers"
                  id="passengers"
                  min="1"
                  max="20"
                  value={formData.passengers}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                  placeholder="Number of people including driver"
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                  placeholder="Any special requirements or additional information"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => router.push('/dashboard')}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>

            {/* Process Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">📋 Booking Process</h3>
              <div className="text-sm text-blue-700 space-y-1">
                <div>1. <strong>Your Request</strong> → Admin review and vehicle assignment</div>
                <div>2. <strong>Admin Processing</strong> → Route to approvers</div>
                <div>3. <strong>Multi-level Approval</strong> → Minimum 2 approval levels</div>
                <div>4. <strong>Driver Assignment</strong> → Admin assigns qualified driver</div>
                <div>5. <strong>Confirmation</strong> → You receive booking confirmation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
