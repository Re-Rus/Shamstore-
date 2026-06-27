import { useState } from 'react';
import { LockKeyhole, Mail, ShieldAlert } from 'lucide-react';
import logo2 from "../../assets/logo2.png"; 

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Admin credentials required.");
      return;
    }

    // TODO: Replace with actual backend authentication
    const adminSession = {
      email: email,
      isLoggedIn: true,
      role: 'admin',
      token: "admin_secure_token_999" // Note: Use HttpOnly cookies for real tokens in production
    };

    localStorage.setItem('techsouk_session', JSON.stringify(adminSession));
    
    // Using window.location.href to force a full page reload and remount the router
    window.location.href = '/Dashboard'; 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-hero-start from-0% via-hero-end via-65% to-hero-mid p-4 font-sans gap-20">
      
      {/* Left Panel: Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden">
        <div className="relative z-10 flex flex-col items-center gap-6">
          <img
            src={logo2}
            alt="Damasco Store Logo"
            className="w-56 h-56 object-contain drop-shadow-2xl"
          />
          <div className="text-center mt-4">
            <h2 className="text-3xl font-black text-secondary tracking-widest uppercase mb-2">
              Damasco Store
            </h2>
            <div className="flex items-center justify-center gap-2 text-accent font-medium">
              <ShieldAlert size={16} />
              <p>Secure Admin Workspace</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center border-t-8 border-accent">
          
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-2">
              <ShieldAlert size={32} />
            </div>
            <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">Admin Portal</h1>
            <p className="text-sm font-medium text-neutral-500 text-center">Restricted access. Authorized personnel only.</p>
          </div>

          <form className="w-full space-y-5" onSubmit={handleAdminLogin}>
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-bold text-neutral-700 px-1">Admin Email</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-400">
                    <Mail size={18} />
                </span>
                <input
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@damascosouk.com" 
                  className="w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-bold text-neutral-700 px-1">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-400">
                  <LockKeyhole size={18} />
                </span>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 mt-4 bg-neutral-900 text-white font-bold rounded-xl shadow-lg hover:bg-black transition-colors duration-200 flex justify-center items-center gap-2"
            >
              Access Dashboard
            </button>
          </form>
          
        </div>
      </div>

    </div>
  );
}