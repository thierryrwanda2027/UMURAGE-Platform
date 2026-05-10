import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { Vault } from './pages/Vault';
import { Quiz } from './pages/Quiz';
import { Module1 } from './pages/Module1';
import { Module2 } from './pages/Module2';
import { Simulator } from './pages/Simulator';
import { Certificate } from './pages/Certificate';
import { Admin } from './pages/Admin';
import { KnowledgeHub } from './pages/KnowledgeHub';
import { MohGuidelines } from './pages/MohGuidelines';
import { Support } from './pages/Support';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { ModuleDetail } from './pages/ModuleDetail';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<div className="w-full max-w-4xl px-4 py-8"><Login /></div>} />
          <Route path="/register" element={<div className="w-full max-w-4xl px-4 py-8"><Register /></div>} />
          
          <Route path="/knowledge-hub" element={<div className="w-full max-w-7xl px-4"><KnowledgeHub /></div>} />
          <Route path="/moh-guidelines" element={<div className="w-full max-w-7xl px-4"><MohGuidelines /></div>} />
          <Route path="/support" element={<div className="w-full max-w-7xl px-4"><Support /></div>} />
          <Route path="/privacy-policy" element={<div className="w-full max-w-7xl px-4"><PrivacyPolicy /></div>} />
          <Route path="/terms-of-service" element={<div className="w-full max-w-7xl px-4"><TermsOfService /></div>} />
          <Route path="/module/:id" element={<div className="w-full max-w-7xl px-4"><ModuleDetail /></div>} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vault" element={<div className="w-full max-w-7xl px-4 py-8"><Vault /></div>} />
          <Route path="/vault/module1" element={<div className="w-full max-w-7xl px-4 py-8"><Module1 /></div>} />
          <Route path="/vault/module2" element={<div className="w-full max-w-7xl px-4 py-8"><Module2 /></div>} />
          <Route path="/quiz" element={<div className="w-full max-w-7xl px-4 py-8"><Quiz /></div>} />
          <Route path="/simulator" element={<div className="w-full max-w-7xl px-4 py-8"><Simulator /></div>} />
          <Route path="/certificate" element={<div className="w-full max-w-7xl px-4 py-8"><Certificate /></div>} />

          <Route path="/admin" element={
            <ProtectedRoute adminOnly>
              <div className="w-full max-w-7xl px-4 py-8"><Admin /></div>
            </ProtectedRoute>
          } />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
