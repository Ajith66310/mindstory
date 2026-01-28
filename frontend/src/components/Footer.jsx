import {
  Mail,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import {img} from "../assets/assest.js";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">

      {/* TOP FOOTER CONTENT */}
      <div className="bg-[#f5a300] py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">

            {/* SERVICES */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Services</h3>
              <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                <li className="hover:translate-x-1 transition-transform duration-200 cursor-pointer">
                  Digital Marketing
                </li>
                <li className="hover:translate-x-1 transition-transform duration-200 cursor-pointer">
                  Social Media Management
                </li>
                <li className="hover:translate-x-1 transition-transform duration-200 cursor-pointer">
                  Website Development
                </li>
                <li className="hover:translate-x-1 transition-transform duration-200 cursor-pointer">
                  Logo & Branding
                </li>
                <li className="hover:translate-x-1 transition-transform duration-200 cursor-pointer">
                  Creative Design
                </li>
                <li className="hover:translate-x-1 transition-transform duration-200 cursor-pointer">
                  SEO
                </li>
              </ul>
            </div>

            {/* ABOUT */}
            <div className="text-sm md:text-base leading-relaxed">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 lg:hidden">
                About Us
              </h3>
              <p>
                Mindstory – A trusted digital marketing agency Kerala with
                10+ years of expertise, delivering creative strategies,
                measurable results, and lasting brand growth for businesses
                across industries. Your success story starts here.
              </p>
            </div>

            {/* CONTACT */}
            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  +91-8281610051
                </h3>
                <p className="text-xs md:text-sm opacity-90">
                  Working Hours – MON–FRI | 10AM to 6PM
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm md:text-base hover:opacity-80 transition-opacity cursor-pointer">
                <Mail size={18} />
                <span>hello@mindstory.in</span>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-4 md:gap-6 pt-2 md:pt-4">
                <a 
                  href="#" 
                  className="hover:scale-110 transition-transform duration-200"
                  aria-label="Twitter"
                >
                  <Twitter size={20} className="md:w-6 md:h-6" />
                </a>
                <a 
                  href="#" 
                  className="hover:scale-110 transition-transform duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="md:w-6 md:h-6" />
                </a>
                <a 
                  href="#" 
                  className="hover:scale-110 transition-transform duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="md:w-6 md:h-6" />
                </a>
                <a 
                  href="#" 
                  className="hover:scale-110 transition-transform duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="md:w-6 md:h-6" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#1a1a1a] py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">

            {/* Copyright */}
            <p className="text-xs md:text-sm opacity-90 text-center md:text-left">
              ©2025 Mindstory. All Rights Reserved.
            </p>

            {/* Logo - Hidden on mobile, shown on tablet+ */}
            <div className="hidden md:flex items-center justify-center">
              <img 
                src={img.brandlogo} 
                alt="Mindstory Logo" 
                className="h-8 md:h-10 w-auto"
              />
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm">
              <span className="cursor-pointer hover:underline transition-all">
                Privacy Policy
              </span>
              <span className="opacity-50">|</span>
              <span className="cursor-pointer hover:underline transition-all">
                Terms & Conditions
              </span>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;