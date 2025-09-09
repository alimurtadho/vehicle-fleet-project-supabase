'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (isLogin) {
        // Sign in with Supabase Auth
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) {
          // For demo purposes, if Supabase auth fails, check demo credentials
          if (email === 'admin@vehiclefleet.com' && password === 'admin123') {
            // Simulate successful login for demo
            localStorage.setItem('demo_user', JSON.stringify({
              email: 'admin@vehiclefleet.com',
              role: 'admin',
              name: 'Admin User'
            }))
            router.push('/dashboard')
            return
          } else if (email === 'employee@vehiclefleet.com' && password === 'employee123') {
            // Simulate successful login for demo
            localStorage.setItem('demo_user', JSON.stringify({
              email: 'employee@vehiclefleet.com',
              role: 'employee', 
              name: 'Employee User'
            }))
            router.push('/dashboard')
            return
          } else {
            throw error
          }
        } else {
          // Successful Supabase authentication
          router.push('/dashboard')
        }
      } else {
        // Sign up with Supabase Auth
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        })

        if (error) throw error
        
        setError('Check your email for the confirmation link!')
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred during authentication')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
          </button>
          <button
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            disabled={loading}
          >
            {isLogin ? 'Need an account?' : 'Already have account?'}
          </button>
        </div>
      </form>
      
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-bold mb-2">Demo Credentials:</h3>
        <p className="text-sm">Admin: admin@vehiclefleet.com / admin123</p>
        <p className="text-sm">Employee: employee@vehiclefleet.com / employee123</p>
        <p className="text-xs text-gray-600 mt-2">
          Use these credentials to test the application
        </p>
      </div>
    </div>
  )
}
