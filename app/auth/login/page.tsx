import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">VelocityIQ</h1>
          <p className="text-gray-600 mt-2">AI-Driven Prospecting OS</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
