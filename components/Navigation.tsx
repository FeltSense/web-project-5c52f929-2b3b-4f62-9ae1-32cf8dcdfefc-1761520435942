typescript
export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative backdrop-blur-xl bg-white/40 border border-white/60 rounded-2xl shadow-lg shadow-slate-200/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a 
                href="/" 
                className="text-xl font-semibold text-slate-800 tracking-tight hover:text-slate-600 transition-colors duration-300"
              >
                Elevate Fitness Studio
              </a>
            </div>
            
            <div className="hidden md:flex items-center gap-1">
              <a
                href="#home"
                className="px-5 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-white/60 rounded-xl transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#services"
                className="px-5 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-white/60 rounded-xl transition-all duration-300"
              >
                Services
              </a>
              <a
                href="#pricing"
                className="px-5 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-white/60 rounded-xl transition-all duration-300"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="ml-2 px-6 py-2.5 text-sm font-medium text-slate-800 bg-white/80 hover:bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                Contact
              </a>
            </div>

            <button className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-white/60 rounded-lg transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}