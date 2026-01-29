import { useEffect, useRef } from "react";
import {
  Mail,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  ArrowUpRight,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import { img } from "../assets/assest.js";

const Footer = () => {
  const newsletterRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const footer = document.getElementById('footer-main');
      if (footer) {
        const footerTop = footer.offsetTop;
        const offset = scrolled - footerTop;
        if (offset > -500) {
          footer.style.setProperty('--scroll-offset', `${offset * 0.5}px`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add newsletter logic here
    console.log('Newsletter submitted');
  };

  return (
    <footer id="footer-main" className="relative text-white overflow-hidden">
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-900">
        {/* Moving gradient orbs */}
        <div className="absolute top-0 left-0 w-150 h-150 bg-[#f5a300]/20 rounded-full blur-[120px] animate-float-orb-1" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-orange-600/15 rounded-full blur-[100px] animate-float-orb-2" />
        <div className="absolute top-1/2 left-1/3 w-100 h-100 bg-amber-500/10 rounded-full blur-[80px] animate-float-orb-3" />
        
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245, 163, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245, 163, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: 'translateY(var(--scroll-offset, 0px))',
          }}
        />
      </div>

      {/* Newsletter CTA Section */}
      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: CTA Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5a300]/10 rounded-full border border-[#f5a300]/20 backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#f5a300] rounded-full animate-pulse" />
                <span className="text-xs font-bold text-[#f5a300] uppercase tracking-widest">
                  Stay Connected
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="block text-white">Get Marketing</span>
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#f5a300] via-orange-400 to-amber-300">
                  Insights Weekly
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                Join 5,000+ marketers receiving expert tips, industry trends, and exclusive strategies delivered straight to your inbox.
              </p>

              {/* Trust indicators */}
            
            </div>

            {/* Right: Newsletter Form */}
            <div className="relative group">
              
              <div className="absolute -inset-1 bg-linear-to-r  opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
              <form 
                ref={newsletterRef}
                onSubmit={handleNewsletterSubmit}
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10"
              >
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f5a300]/50 focus:bg-white/10 transition-all duration-300"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f5a300]/50 focus:bg-white/10 transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="group/btn w-full px-6 py-4 bg-linear-to-r from-[#f5a300] to-orange-600 hover:from-orange-600 hover:to-[#f5a300] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#f5a300]/20 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    <span className="relative flex items-center justify-center gap-2">
                      <span>Subscribe Now</span>
                      <ArrowUpRight className="w-5 h-5 group-hover/btn:rotate-45 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Logo & Tagline */}
          <div className="mb-16 md:mb-20 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
              <div className="shrink-0">
                <img 
                  src={img.brandlogowhite} 
                  alt="Mindstory Logo" 
                  className="h-16 md:h-20 w-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="max-w-2xl">
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                  A trusted digital marketing agency in Kerala with 10+ years of expertise, 
                  delivering creative strategies, measurable results, and lasting brand growth.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 relative inline-block">
                Services
                <div className="absolute -bottom-2 left-0 w-15 h-0.5  bg-linear-to-r  bg-[#f5a300]" />
              </h3>
              <ul className="space-y-3 text-sm md:text-base">
                {[
                  'Digital Marketing',
                  'Social Media Management',
                  'Website Development',
                  'Logo & Branding',
                  'Creative Design',
                  'SEO Optimization'
                ].map((service, index) => (
                  <li 
                    key={index}
                    className="group flex items-center gap-2 text-gray-400 hover:text-[#f5a300] transition-all duration-300 cursor-pointer"
                  >
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 relative inline-block">
                Company
                <div className="absolute -bottom-2 left-0 w-15 h-0.5  bg-linear-to-r  bg-[#f5a300]" />
              </h3>
              <ul className="space-y-3 text-sm md:text-base">
                {[
                  'About Us',
                  'Portfolio',
                  'Case Studies',
                  'Careers',
                  'Blog',
                  'Contact'
                ].map((link, index) => (
                  <li 
                    key={index}
                    className="group flex items-center gap-2 text-gray-400 hover:text-[#f5a300] transition-all duration-300 cursor-pointer"
                  >
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 relative inline-block">
                Get in Touch
                <div className="absolute -bottom-2 left-0 w-15 h-0.5  bg-linear-to-r  bg-[#f5a300]" />
              </h3>
              <div className="space-y-4 text-sm md:text-base">
                
                <a 
                  href="tel:+918281610051"
                  className="group flex items-start gap-3 text-gray-400 hover:text-[#f5a300] transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-[#f5a300]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#f5a300]/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-[#f5a300]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">+91-8281610051</div>
                    <div className="text-xs text-gray-500">Call us anytime</div>
                  </div>
                </a>

                <a 
                  href="mailto:hello@mindstory.in"
                  className="group flex items-start gap-3 text-gray-400 hover:text-[#f5a300] transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-[#f5a300]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#f5a300]/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-[#f5a300]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">hello@mindstory.in</div>
                    <div className="text-xs text-gray-500">Email us</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-gray-400">
                  <div className="w-10 h-10 bg-[#f5a300]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#f5a300]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">MON – FRI</div>
                    <div className="text-xs text-gray-500">10 AM to 6 PM</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Social & Awards */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 relative inline-block">
                Follow Us
                <div className="absolute -bottom-2 left-0 w-15 h-0.5  bg-linear-to-r  bg-[#f5a300]" />
              </h3>
              
              {/* Social Icons */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Twitter, label: 'Twitter', color: 'hover:bg-blue-500' },
                  { icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
                  { icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700' },
                  { icon: Instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href="#"
                      aria-label={social.label}
                      className={`group relative w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center ${social.color} hover:border-transparent transition-all duration-300 overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10" />
                    </a>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4">
              <span>©2025 Mindstory.</span>
              <span className="hidden md:inline">•</span>
              <span>All Rights Reserved.</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#f5a300] transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-white/20">|</span>
              <a href="#" className="hover:text-[#f5a300] transition-colors duration-300">
                Terms & Conditions
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-linear-to-br from-[#f5a300] to-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-[#f5a300]/20 transition-all duration-300 group z-50"
        aria-label="Back to top"
      >
        <ArrowUpRight className="w-6 h-6 text-white group-hover:rotate-45 transition-transform duration-300" />
      </button>

      {/* Styles */}
      <style jsx>{`
        @keyframes float-orb-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 50px) scale(0.95);
          }
        }

        @keyframes float-orb-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-40px, 40px) scale(1.05);
          }
          66% {
            transform: translate(30px, -20px) scale(0.9);
          }
        }

        @keyframes float-orb-3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, 30px) scale(1.08);
          }
        }

        .animate-float-orb-1 {
          animation: float-orb-1 30s ease-in-out infinite;
        }

        .animate-float-orb-2 {
          animation: float-orb-2 35s ease-in-out infinite;
        }

        .animate-float-orb-3 {
          animation: float-orb-3 40s ease-in-out infinite;
        }
      `}</style>

    </footer>
  );
};

export default Footer;