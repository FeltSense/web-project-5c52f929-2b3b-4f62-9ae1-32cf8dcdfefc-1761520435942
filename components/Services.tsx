typescript
export default function Services() {
  const services = [
    {
      title: "Group Fitness Classes",
      description: "From high-intensity interval training to restorative yoga, our diverse class schedule offers something for every fitness level and goal. Small class sizes ensure personalized attention.",
      features: [
        "HIIT, Spin, Yoga, Pilates & Boxing",
        "Beginner to advanced levels",
        "Morning, lunch & evening sessions",
        "Maximum 15 participants per class"
      ]
    },
    {
      title: "Personal Training",
      description: "Work one-on-one with certified trainers who create customized workout programs tailored to your specific goals, fitness level, and any physical considerations.",
      features: [
        "Certified NASM & ACE trainers",
        "Personalized program design",
        "Form correction & injury prevention",
        "Progress tracking & adjustments"
      ]
    },
    {
      title: "Flexible Memberships",
      description: "Choose the plan that fits your lifestyle with no long-term commitments. Pause or cancel anytime, and enjoy access to all classes and equipment during your membership.",
      features: [
        "Month-to-month options",
        "Unlimited class access",
        "No cancellation fees",
        "Guest pass privileges"
      ]
    },
    {
      title: "Premium Facilities",
      description: "Train in a modern, well-maintained space featuring top-tier cardio and strength equipment, spacious studio rooms, and amenities designed for your comfort.",
      features: [
        "Latest Technogym equipment",
        "Climate-controlled studios",
        "Complimentary lockers & showers",
        "Filtered water stations"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
            Everything You Need to Reach Your Goals
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From expert-led classes to personalized training, we provide the tools, 
            guidance, and environment to help you build strength, confidence, and lasting habits.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide pb-8 -mx-6 px-6">
            <div className="flex gap-6 w-max">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-[380px] bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-slate-200 group"
                >
                  {/* Service Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 text-slate-600 font-semibold mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                        <svg
                          className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-slate-300 transition-all duration-300"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors duration-300 shadow-sm hover:shadow-md">
              View Class Schedule
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-medium hover:bg-slate-50 transition-colors duration-300 border border-slate-200">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}