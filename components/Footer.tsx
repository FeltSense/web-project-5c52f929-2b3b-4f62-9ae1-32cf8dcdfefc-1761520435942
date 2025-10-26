javascript
export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#', handle: '@elevatefitness' },
    { name: 'Facebook', icon: '👥', url: '#', handle: '/elevatefitness' },
    { name: 'TikTok', icon: '🎵', url: '#', handle: '@elevatefitness' },
    { name: 'YouTube', icon: '▶️', url: '#', handle: '/elevatefitness' },
    { name: 'Twitter', icon: '🐦', url: '#', handle: '@elevate_fit' }
  ];

  const quickLinks = [
    { name: 'Classes', url: '#' },
    { name: 'Schedule', url: '#' },
    { name: 'Membership', url: '#' },
    { name: 'Trainers', url: '#' }
  ];

  const resources = [
    { name: 'About Us', url: '#' },
    { name: 'Blog', url: '#' },
    { name: 'Contact', url: '#' },
    { name: 'Careers', url: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Social Media Section - Featured */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-slate-800 mb-3">
            Join Our Community
          </h3>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Follow us for daily motivation, workout tips, and studio updates
          </p>
          
          {/* Social Links Grid */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="group flex items-center gap-3 px-6 py-3 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
                <div className="text-left">
                  <div className="text-sm font-medium text-slate-800">
                    {social.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {social.handle}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all duration-300"
              />
              <button className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h4 className="text-xl font-bold text-slate-800 mb-4">
              Elevate Fitness Studio
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Transform your body, elevate your mind, and achieve your fitness goals.
            </p>
            <div className="text-sm text-slate-600">
              <p>123 Fitness Avenue</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">(555) 123-4567</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-slate-600 hover:text-slate-800 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
              Resources
            </h5>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-slate-600 hover:text-slate-800 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h5 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
              Studio Hours
            </h5>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="font-medium">5am - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">7am - 8pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">8am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600">
              © 2024 Elevate Fitness Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}