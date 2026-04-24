'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin,
  Menu, X, Calendar, Users, Activity, HeartHandshake, 
  ChevronRight, Award, BookOpen, GraduationCap, ArrowRight, MessageCircle 
} from 'lucide-react';
import { FaFacebook, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export default function CollegeHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll for header

  // 5 Slider Background Images
  const heroImages = [
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80"
  ];

  // 5 Slider Center PNGs/Portraits
  const heroCenterImages = [
    "https://ik.imagekit.io/fpxbgsota/image%2013.png?updatedAt=1753531863793", // Cutout style
    "https://ik.imagekit.io/fpxbgsota/image%2013.png?updatedAt=1753531863793", // Example Portrait
    "https://ik.imagekit.io/fpxbgsota/image%2013.png?updatedAt=1753531863793", // Example Portrait
    "https://ik.imagekit.io/fpxbgsota/image%2013.png?updatedAt=1753531863793", // Example Portrait
    "https://ik.imagekit.io/fpxbgsota/image%2013.png?updatedAt=1753531863793"  // Example Portrait
  ];

  // Data Arrays: 11 Faculty Members
  const faculty = [
    { name: "Dr. Sharma", qualification: "Ph.D. in Computer Science", position: "HOD, Computer Science", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80", spec: "Artificial Intelligence" },
    { name: "Prof. Anjali", qualification: "M.Sc., Ph.D. in Physics", position: "Associate Prof, Physics", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80", spec: "Quantum Mechanics" },
    { name: "Dr. Menon", qualification: "M.Com, Ph.D.", position: "HOD, Commerce", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80", spec: "Financial Management" },
    { name: "Dr. Aisha", qualification: "Ph.D. in Applied Maths", position: "HOD, Mathematics", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80", spec: "Statistics" },
    { name: "Prof. David", qualification: "M.A., NET, Ph.D.", position: "Assistant Prof, English", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", spec: "Literature" },
    { name: "Dr. Sarah", qualification: "Ph.D. in Organic Chemistry", position: "Associate Prof, Chemistry", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80", spec: "Organic Chemistry" },
    { name: "Prof. Vikram", qualification: "M.A. Economics, Ph.D.", position: "HOD, Economics", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", spec: "Microeconomics" },
    { name: "Dr. Priya", qualification: "Ph.D. in Clinical Psychology", position: "Assistant Prof, Psychology", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80", spec: "Clinical Psychology" },
    { name: "Prof. Rajesh", qualification: "M.A., M.Phil, Ph.D.", position: "Associate Prof, History", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", spec: "Modern History" },
    { name: "Dr. Fatima", qualification: "Ph.D. in Urban Sociology", position: "HOD, Sociology", img: "https://images.unsplash.com/photo-1531123897727-8f129e1b4dce?auto=format&fit=crop&w=300&q=80", spec: "Urban Sociology" },
    { name: "Prof. Amit", qualification: "MBA, Ph.D.", position: "Assistant Prof, Business", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80", spec: "Business Strategy" }
  ];

  const stats = [
    { number: "1200+", label: "Students", icon: <Users size={32} /> },
    { number: "50+", label: "Faculty", icon: <GraduationCap size={32} /> },
    { number: "25+", label: "Programs", icon: <BookOpen size={32} /> },
    { number: "100+", label: "Events", icon: <Award size={32} /> }
  ];

  // Scroll detection for dynamic header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance hero slider every 6 seconds and trigger load animation
  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="font-sans text-gray-800 bg-white relative">
      
      {/* 🟢 Dynamic Header / Navigation Bar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-white/40 shadow-sm py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between h-16 md:h-20 items-center">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center cursor-pointer transition hover:opacity-80">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl mr-3 shadow-md transform rotate-3 transition-colors duration-300 ${
                isScrolled ? 'bg-green-600 text-white' : 'bg-white text-green-700'
              }`}>
                C
              </div>
              <div>
                <h1 className={`text-lg md:text-xl font-extrabold leading-tight tracking-wide transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}>AL MAQAR</h1>
                <p className={`text-[9px] md:text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-green-700' : 'text-green-300'
                }`}>College Of Islamic Science</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className={`hidden lg:flex space-x-8 items-center font-medium text-sm transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white/90'
            }`}>
              <a href="#home" className={`transition ${isScrolled ? 'hover:text-green-600' : 'hover:text-green-300'}`}>Home</a>
              <a href="#about" className={`transition ${isScrolled ? 'hover:text-green-600' : 'hover:text-green-300'}`}>About</a>
              <a href="#academics" className={`transition ${isScrolled ? 'hover:text-green-600' : 'hover:text-green-300'}`}>Academics</a>
              <a href="#union" className={`font-bold flex items-center gap-1 px-3 py-1.5 rounded-full transition ${
                isScrolled ? 'text-green-600 bg-green-50 hover:bg-green-100' : 'text-green-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm'
              }`}>Student Union <span className="flex h-2 w-2 rounded-full bg-green-500"></span></a>
              <a href="#events" className={`transition ${isScrolled ? 'hover:text-green-600' : 'hover:text-green-300'}`}>Events</a>
              <a href="#news" className={`transition ${isScrolled ? 'hover:text-green-600' : 'hover:text-green-300'}`}>News</a>
              <a href="#gallery" className={`transition ${isScrolled ? 'hover:text-green-600' : 'hover:text-green-300'}`}>Gallery</a>
              <a href="#contact" className={`transition ${isScrolled ? 'hover:text-green-600' : 'hover:text-green-300'}`}>Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`p-2 backdrop-blur-md border shadow-sm rounded-xl transition-all duration-300 ${
                  isScrolled ? 'text-green-800 bg-white/50 border-white/60 hover:bg-white/80' : 'text-white bg-white/10 border-white/20 hover:bg-white/20'
                }`}
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* 📱 Modern Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-gray-100 shadow-xl px-4 py-4 z-40">
            <div className="flex flex-col space-y-1">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-bold text-lg hover:text-green-600 transition flex items-center justify-between border-b border-gray-100 py-3">
                Home <ChevronRight size={18} className="text-gray-400"/>
              </a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-bold text-lg hover:text-green-600 transition flex items-center justify-between border-b border-gray-100 py-3">
                About <ChevronRight size={18} className="text-gray-400"/>
              </a>
              <a href="#academics" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-bold text-lg hover:text-green-600 transition flex items-center justify-between border-b border-gray-100 py-3">
                Academics <ChevronRight size={18} className="text-gray-400"/>
              </a>
              <a href="#union" onClick={() => setIsMenuOpen(false)} className="text-green-600 font-extrabold text-lg transition flex items-center justify-between border-b border-gray-100 py-3 bg-green-50 px-3 rounded-xl mt-1 mb-1">
                Student Union <span className="flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
              </a>
              <a href="#events" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-bold text-lg hover:text-green-600 transition flex items-center justify-between border-b border-gray-100 py-3">
                Events <ChevronRight size={18} className="text-gray-400"/>
              </a>
              <a href="#news" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-bold text-lg hover:text-green-600 transition flex items-center justify-between border-b border-gray-100 py-3">
                News <ChevronRight size={18} className="text-gray-400"/>
              </a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-bold text-lg hover:text-green-600 transition flex items-center justify-between border-b border-gray-100 py-3">
                Gallery <ChevronRight size={18} className="text-gray-400"/>
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-bold text-lg hover:text-green-600 transition flex items-center justify-between py-3">
                Contact <ChevronRight size={18} className="text-gray-400"/>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* 🖼️ NEW HERO SECTION: Cinematic Ken Burns Animation & Glassmorphism */}
      <section id="home" className="relative flex min-h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-gray-900 px-6 py-20 font-sans md:px-12">
        
        {/* Animated Background Images */}
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
            }`}
          >
            <img 
              src={img} 
              alt={`Campus Slide ${index + 1}`} 
              // The scale class adds the slow zoom "Ken Burns" effect
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${
                index === currentSlide ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}

        {/* Beautiful Gradient Overlays */}
        <div className="absolute inset-0 bg-green-950/40 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
        
        {/* Subtle Background Glow for the center image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#84cc16]/20 rounded-full blur-[100px] pointer-events-none z-10"></div>

        <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3 gap-12 md:gap-4 z-20 mt-12 md:mt-0">
          
          {/* ⬅️ Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#84cc16]/20 text-[#84cc16] border border-[#84cc16]/30 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
              Welcome to Excellence
            </span>
            <p className="max-w-xs text-base md:text-lg leading-relaxed text-green-50/90 mb-8 drop-shadow-md">
              Shaping futures in the heart of Kannur through innovative learning and sustainable community development.
            </p>
            <div className="flex flex-col space-y-3 w-full sm:w-auto">
              <button className="bg-[#84cc16] hover:bg-[#65a30d] text-white font-bold py-3.5 px-8 rounded-full shadow-[0_0_20px_rgba(132,204,22,0.3)] transition-all flex items-center justify-center group">
                <BookOpen size={18} className="mr-2 group-hover:-translate-y-1 transition-transform" /> About College
              </button>
              <button className="bg-transparent border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-bold py-3.5 px-8 rounded-full backdrop-blur-sm transition-all flex items-center justify-center group">
                <Users size={18} className="mr-2 group-hover:scale-110 transition-transform" /> Student Login
              </button>
            </div>
          </motion.div>

          {/* ⏺️ Center Image with Circle (Now loops through 5 images) */}
          <div className="relative order-1 md:order-2 flex justify-center items-center h-[350px] md:h-full mt-4 md:mt-0">
              <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="absolute z-0 h-[280px] w-[280px] rounded-full bg-[#84cc16] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] shadow-[0_0_60px_rgba(132,204,22,0.4)]"
              ></motion.div>
              
              {heroCenterImages.map((img, index) => (
                <img 
                  key={index}
                  src={img}
                  alt={`Student Portrait ${index + 1}`}
                  className={`absolute z-10 h-auto w-56 md:w-64 object-cover rounded-[2rem] scale-125 lg:scale-150 drop-shadow-2xl transition-all duration-1000 ease-in-out ${
                    index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                />
              ))}
          </div>

          {/* ➡️ Right Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="order-3 flex items-center justify-center text-center md:justify-end md:text-right"
          >
            <h1 className="text-6xl font-extrabold text-white md:text-7xl lg:text-[7.5rem] leading-[1.1] tracking-tighter drop-shadow-lg">
              AL<br className="hidden md:block" />
              <span className="text-[#84cc16] ml-4 md:ml-0">MAQAR</span>
            </h1>
          </motion.div>
        </div>

        {/* 🗺️ Bottom Minimalist Footer Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-6 z-30 w-full max-w-7xl px-8 flex flex-col md:flex-row justify-between items-center text-green-50/70 text-xs md:text-sm font-bold tracking-widest uppercase gap-2 drop-shadow-md"
        >
          <span className="flex items-center"><MapPin size={16} className="inline mr-2 text-[#84cc16]" /> Kannur, Kerala</span>
          <span>Education for a better nation</span>
        </motion.div>

        {/* Modern Slider Progress Dots */}
        <div className="absolute bottom-20 md:bottom-8 left-0 right-0 z-30 flex justify-center space-x-3 hidden md:flex">
          {heroImages.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 overflow-hidden shadow-md ${
                index === currentSlide ? "bg-[#84cc16] w-12" : "bg-white/40 hover:bg-white/60 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 🏛️ 4️⃣ About College (Reference style rounded image) */}
      <section id="about" className="py-24 px-8 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-5/12">
          <div className="bg-[#f0fdf4] p-1 rounded-[3rem]">
            <img 
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=400&q=80" 
              alt="Students" 
              className="w-full h-[400px] object-cover rounded-[2.5rem]" 
            />
          </div>
        </div>
        <div className="md:w-7/12">
          <h2 className="text-sm font-bold text-[#84cc16] tracking-widest uppercase mb-2">Discover Our Campus</h2>
          <h3 className="text-4xl font-bold text-gray-800 mb-6">A Sanctuary for Learning in Kerala</h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Established with a vision to provide world-class education, our institution stands as a beacon of academic brilliance and cultural heritage. We nurture talent, encourage innovation, and build the leaders of tomorrow in a safe, dynamic environment.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full shadow-sm transition inline-flex items-center">
            Read More <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </section>

      {/* 👨‍🏫 5️⃣ Faculty Section (Modern UI) */}
      <section id="academics" className="py-16 md:py-24 px-8 md:px-8 bg-white relative overflow-hidden">
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50 rounded-full blur-[80px] opacity-60 -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-50 rounded-full blur-[60px] opacity-60 -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-[#84cc16] tracking-widest uppercase mb-3">Academic Excellence</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Meet Our <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-[#84cc16]">
                  Distinguished Faculties
                </span>
              </h3>
            </div>
          </div>
          
          {/* Modern Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((member, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-4 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(22,163,74,0.12)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-5 cursor-pointer overflow-hidden"
              >
                
                {/* Subtle hover background sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Modern "Squircle" Photo */}
                <div className="relative z-10 w-20 h-20 flex-shrink-0">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-[1.25rem] shadow-sm group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                
                {/* Card Details */}
                <div className="relative z-10 flex-1">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 line-clamp-1">{member.name}</h4>
                  {member.position && (
                    <p className="text-green-600 font-semibold text-sm mt-0.5 line-clamp-1">{member.position}</p>
                  )}
                  {member.spec && (
                    <p className="text-gray-500 text-sm mt-1.5 flex items-center gap-1.5 line-clamp-1">
                      <BookOpen size={14} className="text-gray-400 flex-shrink-0" />
                      {member.spec}
                    </p>
                  )}
                </div>

                {/* Interaction Arrow Icon */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 mr-1 flex-shrink-0 border border-gray-100 group-hover:border-transparent shadow-sm">
                  <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>

              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* 👥 6️⃣ Student Union Section (Left Aligned Text & Glassmorphism 4-Grid) */}
      <section id="union" className="py-24 px-8 md:px-8 bg-green-950 relative overflow-hidden">
        
        {/* Subtle Glowing Orb for Glass Effect background */}
        <div className="absolute top-1/2 right-0 md:right-1/4 -translate-y-1/2 w-[300px] md:w-[500px] h-[500px] bg-[#84cc16]/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content Area */}
            <div className="text-left flex flex-col items-start">
              
              {/* Left-aligned Logo Placeholder (PNG) */}
              <div className="w-20 h-20 mb-6 bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <img 
                  src="https://dummyimage.com/150x150/ffffff/16a34a.png&text=LOGO" 
                  alt="Student Union Logo Placeholder" 
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              {/* Main Header */}
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Creative Commune of
                <span className="text-[#84cc16]"> Al Maqar Dawa</span>
              </h3>

              {/* Minimal Subtitle */}
              <p className="text-green-100/80 text-lg mb-10 max-w-md leading-relaxed">
                Fostering a vibrant campus life, organizing cultural activities, and providing essential support for every student.
              </p>

              {/* Call to Action Button */}
              <button className="bg-[#84cc16] hover:bg-[#65a30d] text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)] transition-all duration-300 inline-flex items-center text-lg group">
                Visit Student Union <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Content Area: Glassmorphism 4-Grid Container */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
              <div className="grid grid-cols-2 gap-8 md:gap-10">
                
                {/* Glass Grid Item 1 */}
                <div className="flex flex-col items-center justify-center text-center group cursor-pointer">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-[#84cc16] group-hover:scale-110 group-hover:bg-[#84cc16] group-hover:text-white transition-all duration-300 border border-white/5">
                    <Users size={28} />
                  </div>
                  <h4 className="text-white font-bold text-lg tracking-wide">Leadership</h4>
                </div>

                {/* Glass Grid Item 2 */}
                <div className="flex flex-col items-center justify-center text-center group cursor-pointer">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-[#84cc16] group-hover:scale-110 group-hover:bg-[#84cc16] group-hover:text-white transition-all duration-300 border border-white/5">
                    <Activity size={28} />
                  </div>
                  <h4 className="text-white font-bold text-lg tracking-wide">Activities</h4>
                </div>

                {/* Glass Grid Item 3 */}
                <div className="flex flex-col items-center justify-center text-center group cursor-pointer">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-[#84cc16] group-hover:scale-110 group-hover:bg-[#84cc16] group-hover:text-white transition-all duration-300 border border-white/5">
                    <HeartHandshake size={28} />
                  </div>
                  <h4 className="text-white font-bold text-lg tracking-wide">Support</h4>
                </div>

                {/* Glass Grid Item 4 */}
                <div className="flex flex-col items-center justify-center text-center group cursor-pointer">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-[#84cc16] group-hover:scale-110 group-hover:bg-[#84cc16] group-hover:text-white transition-all duration-300 border border-white/5">
                    <Calendar size={28} />
                  </div>
                  <h4 className="text-white font-bold text-lg tracking-wide">Events</h4>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 📅 7️⃣ & 📰 8️⃣ Events and News (Split Section) */}
      <section id="events" className="py-20 px-4 md:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Upcoming Events */}
          <div>
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
              <a href="#" className="text-green-600 font-medium hover:underline text-sm">View Calendar</a>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition">
                  <div className="bg-[#f0fdf4] text-green-800 px-6 py-4 rounded-xl text-center min-w-[90px]">
                    <span className="block text-sm font-bold uppercase">Aug</span>
                    <span className="block text-2xl font-black">1{item + 4}</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-gray-800 mb-1">Annual Tech Symposium 2026</h4>
                    <p className="text-sm text-gray-500 mb-3 flex items-center"><MapPin size={14} className="mr-1" /> Main Auditorium</p>
                    <button className="text-xs bg-[#84cc16] text-white font-bold py-1.5 px-4 rounded-full hover:bg-[#65a30d] transition">Register Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest News */}
          <div id="news">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
              <a href="#" className="text-green-600 font-medium hover:underline text-sm">View All News</a>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="space-y-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                    <span className="text-xs text-[#84cc16] font-bold tracking-wider uppercase mb-2 block">June 1{item}, 2026</span>
                    <h4 className="text-lg font-bold text-gray-800 hover:text-green-600 cursor-pointer transition mb-2">College Achieves NAAC A++ Accreditation</h4>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">We are proud to announce that our institution has been awarded the highest grade by the national council, reflecting our commitment to quality education.</p>
                    <a href="#" className="text-sm text-green-600 font-medium flex items-center hover:underline">Read full story <ChevronRight size={14} /></a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📸 9️⃣ Campus Life Gallery Preview */}
      <section id="gallery" className="py-24 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-sm font-bold text-[#84cc16] tracking-widest uppercase mb-2">Visual Tour</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Campus Life Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <img src="https://images.unsplash.com/photo-1525926472898-ac20839e5595?auto=format&fit=crop&w=400&q=80" alt="Gallery" className="w-full h-56 object-cover rounded-3xl hover:opacity-90 transition cursor-pointer shadow-sm" />
          <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=400&q=80" alt="Gallery" className="w-full h-56 object-cover rounded-3xl hover:opacity-90 transition cursor-pointer shadow-sm" />
          <img src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&w=400&q=80" alt="Gallery" className="w-full h-56 object-cover rounded-3xl hover:opacity-90 transition cursor-pointer shadow-sm" />
          <img src="https://images.unsplash.com/photo-1427504494785-319ce8372c39?auto=format&fit=crop&w=400&q=80" alt="Gallery" className="w-full h-56 object-cover rounded-3xl hover:opacity-90 transition cursor-pointer shadow-sm" />
        </div>
        <button className="bg-white border-2 border-gray-200 text-gray-700 hover:border-green-600 hover:text-green-600 font-medium py-3 px-8 rounded-full transition">
          View Full Gallery
        </button>
      </section>

      {/* 🎯 1️⃣0️⃣ Achievement / Statistics Section */}
      <section className="py-16 bg-green-900 px-4 border-y-4 border-[#84cc16]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4 text-[#84cc16]">{stat.icon}</div>
              <h3 className="text-4xl font-black mb-1">{stat.number}</h3>
              <p className="text-green-100 font-medium text-sm tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📢 1️⃣1️⃣ Call to Action Section */}
      <section className="py-24 px-4 text-center bg-[#f0fdf4]">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Join a Community that Inspires Excellence.</h2>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">Take the first step towards a brilliant career. Admissions for the academic year 2026-2027 are now open.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-[#84cc16] hover:bg-[#65a30d] text-white font-bold py-4 px-10 rounded-full shadow-lg transition text-lg">
            Apply Now
          </button>
          <button className="bg-white border-2 border-green-200 hover:border-green-600 text-green-800 font-bold py-4 px-10 rounded-full shadow-sm transition text-lg">
            Contact Us
          </button>
        </div>
      </section>

      {/* ⚫ 1️⃣2️⃣ Footer (Dark Green) */}
      <footer id="contact" className="bg-green-950 text-gray-300 py-16 px-4 md:px-8 border-t-8 border-green-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-[#84cc16] rounded-xl flex items-center justify-center text-white font-bold text-xl mr-3 transform rotate-3">C</div>
              <h3 className="text-white text-xl font-bold tracking-wide">AL MAQAR</h3>
            </div>
            <p className="text-sm text-green-200/70 mb-6 leading-relaxed">Empowering Knowledge. Building Character. Shaping Futures in Kannur, Kerala.</p>
            <div className="flex space-x-3">
              <div className="bg-white/10 p-2.5 rounded-full hover:bg-[#84cc16] hover:text-white transition cursor-pointer"><FaFacebook size={18} /></div>
              <div className="bg-white/10 p-2.5 rounded-full hover:bg-[#84cc16] hover:text-white transition cursor-pointer"><FaXTwitter size={18} /></div>
              <div className="bg-white/10 p-2.5 rounded-full hover:bg-[#84cc16] hover:text-white transition cursor-pointer"><FaInstagram size={18} /></div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-green-200/80">
              <li><a href="#" className="hover:text-[#84cc16] transition">Admissions 2026</a></li>
              <li><a href="#" className="hover:text-[#84cc16] transition">Academic Calendar</a></li>
              <li><a href="#union" className="hover:text-[#84cc16] transition">Student Union</a></li>
              <li><a href="#" className="hover:text-[#84cc16] transition">Alumni Network</a></li>
              <li><a href="#" className="hover:text-[#84cc16] transition">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Resources</h4>
            <ul className="space-y-3 text-sm text-green-200/80">
              <li><a href="#" className="hover:text-[#84cc16] transition">Library Gateway</a></li>
              <li><a href="#" className="hover:text-[#84cc16] transition">E-Learning Portal</a></li>
              <li><a href="#" className="hover:text-[#84cc16] transition">Hostel Facilities</a></li>
              <li><a href="#" className="hover:text-[#84cc16] transition">Grievance Redressal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-green-200/80">
              <li className="flex items-start"><MapPin size={18} className="mr-3 text-[#84cc16] flex-shrink-0 mt-0.5" /> College Road, Kannur, Kerala - 670001</li>
              <li className="flex items-center"><Phone size={18} className="mr-3 text-[#84cc16] flex-shrink-0" /> +91 98765 43210</li>
              <li className="flex items-center"><Mail size={18} className="mr-3 text-[#84cc16] flex-shrink-0" /> info@college.edu.in</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-green-800/50 text-sm flex flex-col md:flex-row justify-between items-center text-green-200/60">
          <p>&copy; 2026 Al Maqar College Of Islamic Sciences. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* 🟢 FLOATING ACTION BUTTONS */}
      <button className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-green-500 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 z-50 flex items-center justify-center">
        <MessageCircle size={28} />
      </button>

    </div>
  );
}