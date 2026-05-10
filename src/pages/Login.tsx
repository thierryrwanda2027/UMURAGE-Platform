import { useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const authSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type AuthFormData = z.infer<typeof authSchema>;

export function Login() {
  const { user, login, error, clearError } = useAuth();
  
  const { register: registerField, handleSubmit, formState: { errors }, reset } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
  });

  useEffect(() => {
    clearError();
    reset();
  }, []);

  if (user) {
    if (user.isAdmin) {
      return <Navigate to="/admin" replace />;
    }
    return <Navigate to="/dashboard" replace />;
  }

  const onSubmit = (data: AuthFormData) => {
    login(data.email, data.password);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg border border-gray-100 w-full">
      <h2 className="text-2xl font-bold text-[var(--color-trust-blue)] mb-2 text-center">
        Welcome Back
      </h2>
      <p className="text-gray-600 mb-6 text-center text-sm">
        Access the training vault and simulator
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            {...registerField('email')} 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--color-trust-blue)] focus:border-transparent"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            {...registerField('password')} 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--color-trust-blue)] focus:border-transparent"
            placeholder="Min 6 characters"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        {error && <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md text-center">{error}</div>}

        <button 
          type="submit" 
          className="w-full bg-[var(--color-trust-blue)] text-white py-2 rounded-md font-semibold hover:bg-blue-800 transition-colors"
        >
          Login
        </button>
      </form>

      <div className="mt-6 text-center text-sm border-t pt-4">
        <span className="text-gray-600">
          Don't have an account?
        </span>
        <Link 
          to="/register"
          className="ml-2 text-[var(--color-growth-green)] font-semibold hover:underline"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}
