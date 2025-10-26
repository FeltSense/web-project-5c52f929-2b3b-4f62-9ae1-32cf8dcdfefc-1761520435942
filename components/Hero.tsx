export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Image Grid Background */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 opacity-20">
        {[
          'yoga', 'strength', 'cycling', 'pilates', 'hiit', 'boxing',
          'stretching', 'cardio', 'weights', 'core', 'dance', 'barre',
          'kettlebell', 'rowing', 'mobility', 'circuit', 'bootcamp', 'meditation',
          'functional', 'suspension', 'kickboxing', 'abs', 'recovery', 'endurance'
        ].map((activity, i) => (
          <div
            key={i}
            className="relative bg-gradient-to-br from-slate-200 to-slate-300 rounded-sm overflow-hidden group"
          >
            <div className="absolute inset-0 bg-slate-800 opacity-40 group-hover:opacity-30 transition-opacity duration-700" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                {activity}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white/95" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-slate-200">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-slate-700">
            Drop-in classes available daily
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Elevate Fitness Studio
          <span className="block text-4xl md:text-5xl mt-3 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
            Group Fitness Classes for Every Goal
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          From yoga and cycling to HIIT and strength training—choose from 40+ weekly classes led by certified trainers. No experience required, no commitment needed. Pay per class or grab a flexible membership.
        </p>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">40+ Weekly Classes</h3>
            <p className="text-sm text-slate-600">
              Yoga, spin, boxing, barre, strength—beginner to advanced levels
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Certified Trainers</h3>
            <p className="text-sm text-slate-600">
              Experienced instructors with nationally recognized certifications
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">No Contracts</h3>
            <p className="text-sm text-slate-600">
              Drop-in rates, class packs, or month-to-month memberships
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg shadow-lg hover:bg-slate-800 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            View Class Schedule
          </button>
          <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg shadow-md hover:shadow-lg border border-slate-200 hover:border-slate-300 transform hover:-translate-y-0.5 transition-all duration-200">
            Try a Free Class
          </button>
        </div>

        {/* Trust Indicator */}
        <p className="mt-8 text-sm text-slate-500">
          First class free for new members • No credit card required
        </p>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}