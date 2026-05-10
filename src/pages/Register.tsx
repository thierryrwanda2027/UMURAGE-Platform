import { useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const authSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phone: z.string().regex(/^(?:\+250|0)7[2389]\d{7}$/, 'Must be a valid Rwandan phone number (e.g., 078XXXXXXX)'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type AuthFormData = z.infer<typeof authSchema>;

export function Register() {
  const { user, register, error, clearError } = useAuth();
  
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
    register({
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      pass: data.password
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg border border-gray-100 w-full">
      <h2 className="text-2xl font-bold text-[var(--color-trust-blue)] mb-2 text-center">
        Create an Account
      </h2>
      <p className="text-gray-600 mb-6 text-center text-sm">
        Join UMURAGE E-ACADEMY and start your certification today.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input 
              type="text" 
              {...registerField('firstName')} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--color-trust-blue)] focus:border-transparent"
              placeholder="Enter first name"
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input 
              type="text" 
              {...registerField('lastName')} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--color-trust-blue)] focus:border-transparent"
              placeholder="Enter last name"
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Rwandan Phone Number</label>
          <input 
            type="tel" 
            {...registerField('phone')} 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--color-trust-blue)] focus:border-transparent"
            placeholder="e.g., 078XXXXXXX or +25078XXXXXXX"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

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
          Sign Up
        </button>
      </form>

      <div className="mt-6 text-center text-sm border-t pt-4">
        <span className="text-gray-600">
          Already have an account?
        </span>
        <Link 
          to="/login"
          className="ml-2 text-[var(--color-trust-blue)] font-semibold hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
