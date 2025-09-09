'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const demoUser = localStorage.getItem('demo_user')
    if (demoUser) {
      setUser(JSON.parse(demoUser))
    } else {
      // Redirect to login if not authenticated
      router.push('/')
    }
  }, [router])

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  const handleLogout = () => {
    localStorage.removeItem('demo_user')
    router.push('/')
  }

  const navigateTo = (path: string) => {
    router.push(path)
  }

  const showComingSoon = (feature: string) => {
    alert(`${feature} - Coming Soon!\n\nThis feature will be available in the next update.`)
  }

  // Role-based Quick Actions
  const getQuickActions = () => {
    if (user.role === 'admin') {
      return [
        {
          title: 'Manage Bookings',
          description: 'Review and process booking requests',
          color: 'bg-blue-500 hover:bg-blue-700',
          icon: '📋',
          action: () => navigateTo('/dashboard/bookings')
        },
        {
          title: 'Vehicle Management',
          description: 'Manage fleet and assign drivers',
          color: 'bg-green-500 hover:bg-green-700',
          icon: '🚗',
          action: () => navigateTo('/dashboard/vehicles')
        },
        {
          title: 'Driver Assignment',
          description: 'Assign drivers to approved bookings',
          color: 'bg-purple-500 hover:bg-purple-700',
          icon: '👨‍💼',
          action: () => navigateTo('/dashboard/drivers')
        },
        {
          title: 'Generate Reports',
          description: 'Create and export usage reports',
          color: 'bg-orange-500 hover:bg-orange-700',
          icon: '📊',
          action: () => navigateTo('/dashboard/reports')
        },
        {
          title: 'Approve Requests',
          description: 'Review pending approvals',
          color: 'bg-red-500 hover:bg-red-700',
          icon: '✅',
          action: () => navigateTo('/dashboard/approvals')
        },
        {
          title: 'Maintenance',
          description: 'Schedule vehicle maintenance',
          color: 'bg-yellow-500 hover:bg-yellow-700',
          icon: '🔧',
          action: () => showComingSoon('Maintenance Management')
        }
      ]
    } else if (user.role === 'employee') {
      return [
        {
          title: 'New Booking Request',
          description: 'Submit a new vehicle booking',
          color: 'bg-blue-500 hover:bg-blue-700',
          icon: '📋',
          action: () => navigateTo('/dashboard/booking/new')
        },
        {
          title: 'My Bookings',
          description: 'View your booking history',
          color: 'bg-green-500 hover:bg-green-700',
          icon: '📅',
          action: () => navigateTo('/dashboard/my-bookings')
        },
        {
          title: 'Available Vehicles',
          description: 'Check vehicle availability',
          color: 'bg-purple-500 hover:bg-purple-700',
          icon: '🚗',
          action: () => navigateTo('/dashboard/vehicles/available')
        },
        {
          title: 'Request Status',
          description: 'Track your request progress',
          color: 'bg-orange-500 hover:bg-orange-700',
          icon: '⏳',
          action: () => navigateTo('/dashboard/status')
        }
      ]
    }
    return []
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Vehicle Fleet Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600">
                Welcome back, {user.name}! ({user.role})
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold">🚗</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Vehicles
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">12</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold">✅</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Available
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">8</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold">📋</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Active Bookings
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">4</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold">⏳</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Pending Approvals
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">2</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Quick Actions ({user.role === 'admin' ? 'Admin Panel' : 'Employee Panel'})
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {getQuickActions().map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className={`${action.color} text-white font-bold py-3 px-3 rounded text-sm transition-colors duration-200 flex flex-col items-center space-y-1`}
                    title={action.description}
                  >
                    <span className="text-lg">{action.icon}</span>
                    <span className="text-center leading-tight">{action.title}</span>
                  </button>
                ))}
              </div>
              
              {user.role === 'employee' && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    💡 <strong>Tip:</strong> Submit booking requests early for better vehicle availability
                  </p>
                </div>
              )}
              
              {user.role === 'admin' && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">
                    ⚡ <strong>Admin Info:</strong> Process bookings and assign drivers efficiently
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                System Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Database</span>
                  <span className="text-sm text-green-600 font-medium">✅ Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">API Services</span>
                  <span className="text-sm text-green-600 font-medium">✅ Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Backup Status</span>
                  <span className="text-sm text-green-600 font-medium">✅ Up to date</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Recent Activity
            </h3>
            <div className="flow-root">
              <ul className="-mb-8">
                <li>
                  <div className="relative pb-8">
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                          <span className="text-white text-xs font-bold">✓</span>
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            Vehicle booking approved for <span className="font-medium text-gray-900">Toyota Avanza</span>
                          </p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          2h ago
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative pb-8">
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                          <span className="text-white text-xs font-bold">📋</span>
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            New booking request submitted for <span className="font-medium text-gray-900">Honda CR-V</span>
                          </p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          4h ago
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative">
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center ring-8 ring-white">
                          <span className="text-white text-xs font-bold">🔧</span>
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            Maintenance reminder for <span className="font-medium text-gray-900">Mitsubishi Xpander</span>
                          </p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          1d ago
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
