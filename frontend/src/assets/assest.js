import brandlogo from './brand-logo-img.avif'
import brandlogowhite from './brand-logo-img-white.avif'


const img = {
brandlogo,
brandlogowhite,
}

  const faqs = [
    {
      id: "1.",
      question: "What services does Mindstory offer?",
      answer: "We provide full-stack digital solutions: SEO, Digital marketing, Visual production, Branding, social media, email marketing, PPC advertising, and Web development."
    },
    {
      id: "2.",
      question: "How does Mindstory align digital strategies with a brand's identity?",
      answer: "By conducting thorough brand analysis and understanding the brand's mission and vision, Mindstory creates strategies that reflect the brand's unique identity and market position."
    },
    {
      id: "3.",
      question: "Do you offer branding and design services?",
      answer: "Yes. We provide logo design, brand identity, graphic design, and digital storytelling to make your brand visually memorable."
    },
    {
      id: "4.",
      question: "How do you measure the success of your campaigns?",
      answer: "At Mindstory, we track campaign success using clear, data-driven KPIs (Key Performance Indicators)."
    },
    {
      id: "5.",
      question: "Do I need digital marketing if my business already gets referrals?",
      answer: "While referrals are great, digital marketing expands your reach to new audiences and builds a sustainable online presence that works 24/7."
    },
    {
      id: "6.",
      question: "How much does digital marketing cost?",
      answer: "Costs vary based on your specific goals and the services required. We provide custom solutions tailored to your budget and needs."
    },
    {
      id: "7.",
      question: "How does Mindstory improve social media presence?",
      answer: "We provide social media strategy, creative design, content posting, influencer marketing, and ad campaigns to boost brand engagement."
    },
    {
      id: "8.",
      question: "How do you handle ongoing support and reporting?",
      answer: "A dedicated manager ensures daily communication, monthly performance reports, and frequent strategy reviews to keep you informed and aligned."
    },
    {
      id: "9.",
      question: "What makes Mindstory the best digital marketing agency in Kerala?",
      answer: "We stand out through 10+ years of experience, data-driven strategies, transparent reporting, and a dedication to delivering measurable results."
    },
    {
      id: "10.",
      question: "How do I get started with Mindstory?",
      answer: "Simply reach out via our website or call us—we’ll arrange a free consultation to understand your needs and design a tailored strategy for digital success."
    }
  ];  


    const brands = [
    { name: 'Apple', tagline: 'Think Different', logo: brandlogo, color: '#000000', bg: '#f5f5f7' },
    { name: 'Google', tagline: 'Organize Information', logo: brandlogo, color: '#4285F4', bg: '#f1f3f4' },
    { name: 'Microsoft', tagline: 'Empower Everyone', logo: brandlogo, color: '#00A4EF', bg: '#f3f2f1' },
    { name: 'Amazon', tagline: 'Work Hard', logo: brandlogo, color: '#FF9900', bg: '#fef9f3' },
    { name: 'Tesla', tagline: 'Accelerate Transition', logo: brandlogo, color: '#CC0000', bg: '#fef5f5' },
    { name: 'Nike', tagline: 'Just Do It', logo: brandlogo, color: '#111111', bg: '#f5f5f5' },
    { name: 'Coca-Cola', tagline: 'Taste The Feeling', logo: brandlogo, color: '#F40009', bg: '#fef5f5' },
    { name: 'Samsung', tagline: 'Do What You Can\'t', logo: brandlogo, color: '#1428A0', bg: '#f3f5fb' },
    { name: 'Netflix', tagline: 'See What\'s Next', logo: brandlogo, color: '#E50914', bg: '#fef5f6' },
    { name: 'Adobe', tagline: 'Creativity For All', logo: brandlogo, color: '#FF0000', bg: '#fef5f5' },
  ];

  const navItems = [
    { 
      name: 'About', 
      path: '/about',
      hasDropdown: true,
      subItems: ['Our Story', 'Our Team', 'Methodology']
    },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      subItems: ['Digital Marketing', 'Web Development', 'UI/UX Design', 'SEO']
    },
    { 
      name: 'Works', 
      path: '/works',
      hasDropdown: true,
      subItems: ['Case Studies', 'Recent Projects', 'Client Testimonials']
    },
    { 
      name: 'Learn', 
      path: '/learn',
      hasDropdown: true,
      subItems: ['Blog', 'Resources', 'Guides']
    },
    { 
      name: 'Careers', 
      path: '/careers',
      hasDropdown: false 
    },
  ];

export { img , faqs , brands , navItems};