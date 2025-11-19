import React from 'react';

const Footer = () => {
  // Function to generate particle styles
  const getParticleStyle = index => {
    const colors = ['#fbbf24', '#22d3ee', '#c084fc', '#f472b6', '#60a5fa'];
    return {
      width: `${Math.random() * 6 + 2}px`,
      height: `${Math.random() * 6 + 2}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 10 + 10}s`,
      background: `radial-gradient(circle, ${colors[index % 5]}, transparent)`,
    };
  };

  // Social links data
  const socialLinks = [
    {
      icon: '🚀',
      color: 'from-purple-500 to-pink-500',
      label: 'Facebook',
    },
    {
      icon: '⚡',
      color: 'from-blue-400 to-cyan-500',
      label: 'Twitter',
    },
    {
      icon: '🌟',
      color: 'from-green-400 to-blue-500',
      label: 'LinkedIn',
    },
    {
      icon: '💫',
      color: 'from-red-500 to-orange-500',
      label: 'Instagram',
    },
    {
      icon: '🎯',
      color: 'from-yellow-400 to-orange-500',
      label: 'YouTube',
    },
  ];

  // Quick links data
  const quickLinks = [
    'Features',
    'Pricing',
    'Coverage',
    'Documentation',
    'API Status',
    'Changelog',
  ];

  // Support links data
  const supportLinks = [
    'Help Center',
    'Community',
    'Contact Us',
    'Careers',
    'Privacy Policy',
    'Terms of Service',
  ];

  // Features data
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      desc: 'Instant delivery',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: '🔒',
      title: 'Secure',
      desc: 'Protected delivery',
      color: 'from-green-400 to-blue-500',
    },
    {
      icon: '🚀',
      title: 'Powerful',
      desc: 'Advanced tracking',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: '💡',
      title: 'Smart AI',
      desc: 'Intelligent routing',
      color: 'from-cyan-400 to-blue-500',
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={getParticleStyle(i)}
          ></div>
        ))}

        {/* Animated gradient orbs */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full animate-pulse-slow blur-3xl"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-pulse-slower blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full animate-spin-slow blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Animated Border */}
        <div className="border-t border-b border-gray-700/50 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section with Animation */}
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-4 mb-6 group">
                <div className="relative transform group-hover:scale-110 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-xl flex items-center justify-center transform rotate-12 shadow-2xl shadow-orange-500/30 animate-bounce-slow">
                    <span className="text-black font-bold text-2xl transform -rotate-12">
                      Z
                    </span>
                    {/* Lightning effect */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-gray-900 animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-gradient-x">
                    ZapShift
                  </h2>
                  <p className="text-gray-400 mt-2 text-sm">
                    Lightning Fast Delivery
                  </p>
                  <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-6">
                Revolutionizing delivery services with speed, reliability, and
                innovation. Experience the future of logistics with our
                cutting-edge platform.
              </p>

              {/* Animated Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer transform hover:scale-110 hover:-translate-y-2 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm transform group-hover:rotate-12 transition-transform duration-300`}
                    >
                      <span className="text-sm">{social.icon}</span>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links with Hover Effects */}
            <div>
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent animate-gradient-y">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((item, index) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group hover:translate-x-2"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                          index % 3 === 0
                            ? 'from-yellow-400 to-orange-500'
                            : index % 3 === 1
                            ? 'from-cyan-400 to-blue-500'
                            : 'from-purple-400 to-pink-500'
                        } mr-3 transform group-hover:scale-150 transition-transform duration-300`}
                      ></div>
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-y">
                Support
              </h3>
              <ul className="space-y-3">
                {supportLinks.map((item, index) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group hover:translate-x-2"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                          index % 3 === 0
                            ? 'from-yellow-400 to-orange-500'
                            : index % 3 === 1
                            ? 'from-cyan-400 to-blue-500'
                            : 'from-purple-400 to-pink-500'
                        } mr-3 transform group-hover:scale-150 transition-transform duration-300`}
                      ></div>
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature Highlights with Animation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-gray-700/50">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group transform hover:scale-105 transition-all duration-500"
              >
                <div
                  className={`relative mx-auto mb-4 w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500`}
                  ></div>
                </div>
                <h4 className="font-semibold text-white mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Status & Version */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-ping-slow"></div>
                <span className="text-gray-300 text-sm">
                  All systems operational
                </span>
              </div>
              <div className="h-4 w-px bg-gray-600"></div>
              <div className="text-sm text-gray-400">
                Version{' '}
                <span className="text-yellow-400 font-mono">v2.1.4</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm mb-2">
                © 2024{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-semibold">
                  ZapShift
                </span>
                . Crafted with 💙 for the future of delivery
              </p>
              <div className="flex justify-center lg:justify-end space-x-4 text-xs text-gray-500">
                <span>Built with React & Tailwind</span>
                <span>•</span>
                <span>🚀 Deployed on Vercel</span>
                <span>•</span>
                <span>⚡ Lightning Fast</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Progress Bar */}
      <div className="h-1 w-full bg-gray-800 relative overflow-hidden">
        <div className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 w-full animate-progress"></div>
      </div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes gradient-y {
          0%,
          100% {
            background-position: 50% 0%;
          }
          50% {
            background-position: 50% 100%;
          }
        }
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        .animate-float {
          animation: float 20s infinite linear;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-gradient-y {
          background-size: 200% 200%;
          animation: gradient-y 3s ease infinite;
        }
        .animate-progress {
          animation: progress 2s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-slower {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-ping-slow {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
