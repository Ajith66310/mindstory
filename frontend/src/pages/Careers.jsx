import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, MapPin, Clock, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const jobsRef = useRef(null);
  const jobItemsRef = useRef([]);
  const statsRef = useRef([]);
  const ctaRef = useRef(null);

  const departments = ['all', 'Design', 'Development', 'Marketing', 'Operations'];

  const jobs = [
    {
      id: 1,
      title: 'Senior Creative Director',
      department: 'Design',
      location: 'Remote / Kerala',
      type: 'Full-time',
      description: 'Lead our creative vision and craft extraordinary brand experiences that push boundaries.',
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Development',
      location: 'Hybrid / Kochi',
      type: 'Full-time',
      description: 'Build scalable, performant applications using cutting-edge technologies.',
    },
    {
      id: 3,
      title: 'Digital Marketing Strategist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop data-driven strategies that amplify brand presence and drive measurable growth.',
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Kochi Office',
      type: 'Full-time',
      description: 'Create intuitive, delightful interfaces that solve real user problems with elegance.',
    },
    {
      id: 5,
      title: 'Social Media Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Contract',
      description: 'Engage communities and craft compelling narratives across digital platforms.',
    },
    {
      id: 6,
      title: 'Project Manager',
      department: 'Operations',
      location: 'Hybrid / Kochi',
      type: 'Full-time',
      description: 'Orchestrate complex projects with precision, keeping teams aligned and clients thrilled.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '12+', label: 'Countries' },
    { number: '98%', label: 'Satisfaction' },
    { number: '5.0', label: 'Glassdoor Rating' },
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      
      tl.from(titleRef.current.children, {
        y: 120,
        opacity: 0,
        rotateX: -30,
        duration: 1.2,
        stagger: 0.08,
      })
      .from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6')
      .from('.hero-cta', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, '-=0.4');

      // Stats Counter Animation
      statsRef.current.forEach((stat, i) => {
        gsap.from(stat, {
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: i * 0.1,
        });
      });

      // Job Cards Stagger
      jobItemsRef.current.forEach((item, i) => {
        if (item) {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
            },
            y: 60,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            delay: i * 0.05,
          });
        }
      });

      // CTA Section
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.2)',
      });

    }, heroRef);

    return () => ctx.revert();
  }, [filteredJobs]);

  // Magnetic Button Effect
  const handleMouseMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  return (
    <div ref={heroRef} className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20">
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#f5a300 1px, transparent 1px), linear-gradient(90deg, #f5a300 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          
          {/* Main Title with Split Animation */}
          <div className="overflow-hidden mb-6">
            <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-none tracking-tight">
              <div className="inline-block">Build</div>{' '}
              <div className="inline-block text-[#f5a300]">Your</div>
              <br />
              <div className="inline-block">Career</div>{' '}
              <div className="inline-block">Here</div>
            </h1>
          </div>

          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
            Join a team of visionaries, creators, and problem-solvers building 
            the future of digital experiences.
          </p>

          <div className="hero-cta flex flex-wrap gap-6">
            <button 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="group relative bg-[#f5a300] text-black px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Open Roles
                <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" size={20} />
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </button>
            
            <button className="border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:border-[#f5a300] hover:text-[#f5a300] transition-all duration-300">
              Our Culture
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-0.5 h-16 bg-linear-to-b from-[#f5a300] to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div 
                key={i}
                ref={(el) => (statsRef.current[i] = el)}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#f5a300] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section ref={jobsRef} className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-[#f5a300] text-sm font-bold uppercase tracking-[0.3em] mb-4">
              Open Positions
            </p>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Find Your Role
            </h2>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-4">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                    selectedDepartment === dept
                      ? 'bg-[#f5a300] text-black'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <div
                key={job.id}
                ref={(el) => (jobItemsRef.current[index] = el)}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-white/10 hover:border-[#f5a300]/50 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-[#f5a300]/0 via-[#f5a300]/5 to-[#f5a300]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-4 py-1 bg-[#f5a300]/20 text-[#f5a300] rounded-full text-xs font-bold uppercase tracking-wider">
                        {job.department}
                      </span>
                      <span className="px-4 py-1 bg-white/10 text-white rounded-full text-xs font-semibold">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[#f5a300] transition-colors duration-300">
                      {job.title}
                    </h3>

                    <p className="text-gray-400 text-base mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="shrink-0 w-14 h-14 bg-[#f5a300] text-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">
                No positions available in this department at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-linear-to-br from-[#f5a300] to-[#e69500] rounded-3xl p-12 md:p-20 relative overflow-hidden">
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
                Don't See Your Role?
              </h2>
              <p className="text-black/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                We're always looking for exceptional talent. Send us your resume 
                and let's start a conversation.
              </p>
              
              <button 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-3"
              >
                Submit Application
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#f5a300] text-sm font-bold uppercase tracking-[0.3em] mb-4">
              Perks & Benefits
            </p>
            <h2 className="text-5xl md:text-7xl font-bold">
              Why Join Us?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Remote First', desc: 'Work from anywhere in the world with flexible hours' },
              { title: 'Health & Wellness', desc: 'Comprehensive health insurance and wellness programs' },
              { title: 'Learning Budget', desc: '₹50,000 annual budget for courses and conferences' },
              { title: 'Unlimited PTO', desc: 'Take time off when you need it, no questions asked' },
              { title: 'Latest Equipment', desc: 'Top-tier MacBook Pro and accessories of your choice' },
              { title: 'Team Retreats', desc: 'Annual company retreats to incredible destinations' },
            ].map((benefit, i) => (
              <div 
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#f5a300]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#f5a300]/20 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="text-[#f5a300]" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;