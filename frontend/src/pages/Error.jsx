import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-100">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute -bottom-32 right-1/4 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-float-slowest" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16">
        
        {/* Logo or brand section (placeholder) */}
        {/* <div className="mb-12 animate-fade-in">
          <div className="flex items-center gap-2 text-2xl font-bold">
            
            <span className="text-gray-900">Mindstory</span>
          </div>
        </div> */}

        {/* 404 Number - Clean and modern */}
        <div className="relative mb-8 animate-scale-in">
          <div className="absolute inset-0 blur-2xl opacity-30">
            <div className="text-[12rem] md:text-[18rem] font-black bg-linear-to-br from-orange-400 to-orange-600 bg-clip-text text-transparent">
              404
            </div>
          </div>
          <h1 className="relative text-[12rem] md:text-[18rem] font-black leading-none bg-linear-to-br from-orange-500 to-orange-700 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Error message */}
        <div className="text-center max-w-2xl mx-auto mb-10 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track with your digital marketing journey.
          </p>
        </div>

        {/* Quick links or suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12 animate-fade-in-up-delayed">
          <Link 
            to="/services"
            className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Our Services</h3>
            <p className="text-gray-600 text-sm">Explore what we can do for your business</p>
          </Link>

          <Link 
            to="/portfolio"
            className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Portfolio</h3>
            <p className="text-gray-600 text-sm">See our successful case studies</p>
          </Link>

          <Link 
            to="/contact"
            className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Contact Us</h3>
            <p className="text-gray-600 text-sm">Get in touch with our team</p>
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-in-final">
          <Link 
            to="/"
            className="group relative px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Back to Home</span>
            </span>
          </Link>

          <button 
            onClick={() => window.history.back()}
            className="group px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-lg rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Go Back</span>
            </span>
          </button>
        </div>

        {/* Help text */}
        <p className="mt-12 text-sm text-gray-500 animate-fade-in-final">
          Need help? <Link to="/contact" className="text-orange-600 hover:text-orange-700 font-medium underline">Contact our support team</Link>
        </p>
      </div>

      {/* Decorative elements - subtle */}
      <div className="absolute top-8 right-8 opacity-20">
        <div className="w-24 h-24 border-4 border-orange-300 rounded-full animate-pulse-subtle" />
      </div>
      <div className="absolute bottom-8 left-8 opacity-20">
        <div className="w-32 h-32 border-4 border-blue-300 rounded-full animate-pulse-subtle" style={{ animationDelay: '1s' }} />
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up-delayed {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          30% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-final {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          50% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-20px, 40px) scale(1.05);
          }
        }

        @keyframes float-slowest {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, 20px) scale(1.08);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.4s both;
        }

        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 1.2s ease-out;
        }

        .animate-fade-in-final {
          animation: fade-in-final 1.5s ease-out;
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 25s ease-in-out infinite;
        }

        .animate-float-slowest {
          animation: float-slowest 30s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Error;