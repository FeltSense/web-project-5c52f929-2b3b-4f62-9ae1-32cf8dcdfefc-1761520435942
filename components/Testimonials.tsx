javascript
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Marketing Manager",
      videoUrl: "/videos/testimonial-sarah.mp4",
      thumbnail: "/images/testimonial-sarah.jpg",
      quote: "I was intimidated by gyms for years, but the instructors here actually take time to show you proper form. Lost 15 pounds in three months, but honestly, I just feel stronger and more confident.",
      duration: "1:24"
    },
    {
      id: 2,
      name: "James Chen",
      role: "Software Developer",
      videoUrl: "/videos/testimonial-james.mp4",
      thumbnail: "/images/testimonial-james.jpg",
      quote: "The early morning classes fit perfectly before work. My back pain from sitting all day has basically disappeared since I started coming here regularly.",
      duration: "0:58"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "High School Teacher",
      videoUrl: "/videos/testimonial-maria.mp4",
      thumbnail: "/images/testimonial-maria.jpg",
      quote: "I've tried other studios, but this is the first place where I actually look forward to working out. The community vibe makes such a difference—people cheer you on instead of judging.",
      duration: "1:12"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">
            Real Stories, Real Results
          </h2>
          <p className="text-lg text-slate-600">
            Hear from members who've made Elevate part of their daily routine
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
                <img
                  src={testimonial.thumbnail}
                  alt={`${testimonial.name} testimonial`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-colors duration-300 flex items-center justify-center">
                  <button
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                    aria-label={`Play ${testimonial.name}'s testimonial`}
                  >
                    <svg
                      className="w-6 h-6 text-slate-900 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  {testimonial.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <blockquote className="text-slate-700 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                    <span className="text-slate-700 font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Join hundreds of members transforming their fitness journey
          </p>
          <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-colors duration-300 shadow-sm hover:shadow-md">
            Start Your Free Trial
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}