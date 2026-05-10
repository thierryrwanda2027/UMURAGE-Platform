import { Link } from 'react-router-dom';
import { ShieldCheck, Brain, ChevronRight, Lock } from 'lucide-react';

export function Vault() {
  return (
    <div className="max-w-5xl mx-auto mt-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-[var(--color-trust-blue)] mb-4">Gate 1: The Knowledge Vault</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Before entering the Empathy Simulator, you must master the core medical protocols and psychological first aid techniques. Select a module below to begin.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Link 
          to="/vault/module1" 
          className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-400 p-6 flex items-end">
            <ShieldCheck className="w-16 h-16 text-white opacity-20 absolute top-4 right-4" />
            <h2 className="text-2xl font-bold text-white relative z-10">Module 1: HIV Prevention</h2>
          </div>
          <div className="p-8">
            <p className="text-gray-600 mb-6 line-clamp-3">
              Master the science of prevention. Understand the differences between PrEP and PEP, and learn how to accurately explain the window period to peers in crisis.
            </p>
            <div className="flex items-center text-[var(--color-trust-blue)] font-bold group-hover:text-blue-800">
              Start Module <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>

        <Link 
          to="/vault/module2" 
          className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="h-32 bg-gradient-to-r from-purple-600 to-purple-400 p-6 flex items-end">
            <Brain className="w-16 h-16 text-white opacity-20 absolute top-4 right-4" />
            <h2 className="text-2xl font-bold text-white relative z-10">Module 2: Mental Health Stigma</h2>
          </div>
          <div className="p-8">
            <p className="text-gray-600 mb-6 line-clamp-3">
              Learn how to create safe spaces through active listening, use person-first language to reduce stigma, and understand the absolute necessity of confidentiality.
            </p>
            <div className="flex items-center text-purple-600 font-bold group-hover:text-purple-800">
              Start Module <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
      
      {/* Visual representation of the locked simulator */}
      <div className="mt-16 p-8 bg-gray-50 border border-gray-200 rounded-2xl flex flex-col items-center justify-center text-center opacity-70">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
          <Lock className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-500 mb-2">Gate 2: Empathy Simulator</h3>
        <p className="text-gray-500 max-w-lg">
          Complete both modules and pass their respective knowledge checks to unlock the AI behavioral simulation.
        </p>
      </div>
    </div>
  );
}
