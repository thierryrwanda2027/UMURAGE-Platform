import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Brain, MessageSquare, Lock, Stethoscope, ChevronRight } from 'lucide-react';

export function Home() {
  const modules = [
    {
      id: 'hiv-prevention',
      icon: <ShieldCheck className="text-blue-600 w-6 h-6" />,
      iconBg: 'bg-blue-50',
      title: 'HIV Prevention',
      description: 'Latest protocols on PrEP, PEP, and window periods.'
    },
    {
      id: 'youth-srh',
      icon: <Heart className="text-red-500 w-6 h-6" />,
      iconBg: 'bg-red-50',
      title: 'Youth SRH',
      description: 'Navigating sexual and reproductive health with accuracy.'
    },
    {
      id: 'mental-health',
      icon: <Brain className="text-purple-500 w-6 h-6" />,
      iconBg: 'bg-purple-50',
      title: 'Mental Health',
      description: 'First Aid techniques and reducing community stigma.'
    },
    {
      id: 'active-listening',
      icon: <MessageSquare className="text-green-500 w-6 h-6" />,
      iconBg: 'bg-green-50',
      title: 'Active Listening',
      description: 'Mastering the art of empathetic peer counseling.'
    },
    {
      id: 'confidentiality',
      icon: <Lock className="text-orange-500 w-6 h-6" />,
      iconBg: 'bg-orange-50',
      title: 'Confidentiality',
      description: 'Strict adherence to privacy and ethical standards.'
    },
    {
      id: 'clinical-referrals',
      icon: <Stethoscope className="text-blue-400 w-6 h-6" />,
      iconBg: 'bg-blue-50',
      title: 'Clinical Referrals',
      description: 'Bridging the gap between peers and professional care.'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[var(--color-trust-blue)] text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-400 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-800 to-transparent transform -skew-x-12 opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Professionalizing Peer Health Education
            </h1>
            <p className="text-xl md:text-2xl mb-2 opacity-90">
              Master SRH & Mental Health protocols. Pass the AI behavioral simulation.
            </p>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Earn your national certification and lead with accuracy and empathy.
            </p>
            <Link 
              to="/dashboard"
              className="inline-flex items-center px-8 py-4 bg-[var(--color-growth-green)] text-white text-lg font-bold rounded-lg hover:bg-green-600 transition-colors shadow-lg"
            >
              Start Certification
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[var(--color-trust-blue)] mb-4">Core Certification Modules</h2>
          <p className="text-lg text-gray-600 mb-16">Comprehensive curriculum designed for institutional excellence.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {modules.map((module) => (
              <Link 
                key={module.id}
                to={`/module/${module.id}`}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer flex flex-col"
              >
                <div className={`w-12 h-12 rounded-lg ${module.iconBg} flex items-center justify-center mb-6`}>
                  {module.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{module.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{module.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
