import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-3 opacity-50">
            <div className="bg-gray-400 text-white p-2 rounded-md font-bold text-xl h-8 w-8 flex items-center justify-center">
              
            </div>
            <span className="text-xl font-black tracking-tight text-gray-500 uppercase">UMURAGE E-ACADEMY</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-400 border-t border-gray-200 pt-8">
          <p>&copy; {new Date().getFullYear()} UMURAGE E-ACADEMY. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-gray-600 transition-colors uppercase">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-gray-600 transition-colors uppercase">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
