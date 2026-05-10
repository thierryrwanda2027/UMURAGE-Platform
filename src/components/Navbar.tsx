import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white text-[var(--color-trust-blue)] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="bg-[var(--color-trust-blue)] text-white p-2 rounded-md font-bold text-xl h-10 w-10 flex items-center justify-center">
              U
            </div>
            <Link to="/" className="text-2xl font-black tracking-tight text-[var(--color-trust-blue)]">UMURAGE E-ACADEMY</Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 font-bold text-sm text-gray-500 uppercase tracking-wider">
            <Link to="/knowledge-hub" className="hover:text-[var(--color-trust-blue)] transition-colors">Knowledge Hub</Link>
            <Link to="/moh-guidelines" className="hover:text-[var(--color-trust-blue)] transition-colors">MOH Guidelines</Link>
            <Link to="/support" className="hover:text-[var(--color-trust-blue)] transition-colors">Support</Link>
          </nav>

          <div className="flex space-x-4 items-center">
            {user ? (
              <>
                <Link to="/dashboard" className="text-sm font-bold text-gray-600 hover:text-[var(--color-trust-blue)]">
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-gray-100 text-[var(--color-trust-blue)] px-5 py-2 rounded-md text-sm font-bold hover:bg-gray-200 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login"
                  className="border-2 border-[var(--color-trust-blue)] text-[var(--color-trust-blue)] px-5 py-2 rounded-md text-sm font-bold hover:bg-blue-50 transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="bg-[var(--color-trust-blue)] text-white px-5 py-2 rounded-md text-sm font-bold hover:bg-blue-800 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
