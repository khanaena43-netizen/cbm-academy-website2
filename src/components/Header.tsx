import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, PhoneCall, MapPin, Database } from 'lucide-react';

interface HeaderProps {
  onOpenEnquire: (source?: string) => void;
  onOpenLeads?: () => void;
  leadCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquire, onOpenLeads, leadCount = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active link detection
      const sections = ['home', 'courses', 'why-us', 'curriculum', 'ai-edge', 'career', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Courses', href: '#courses', id: 'courses' },
    { name: 'Why CBM', href: '#why-us', id: 'why-us' },
    { name: 'Curriculum', href: '#curriculum', id: 'curriculum' },
    { name: 'AI Integration', href: '#ai-edge', id: 'ai-edge' },
    { name: 'Career', href: '#career', id: 'career' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#121212] via-[#FF6B00]/20 to-[#121212] border-b border-[#2A2A2A] text-xs py-2 px-4 text-center text-zinc-300 flex items-center justify-center gap-2 font-medium">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40 font-bold text-[10px] uppercase tracking-wider">
          <Sparkles className="w-3 h-3" /> New Delhi Admissions Open
        </span>
        <span className="hidden sm:inline">2026 AI-Integrated Digital Marketing Master Program — Next Batch Capped at 15 Seats!</span>
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, '#contact')}
          className="text-[#FF6B00] hover:underline font-semibold flex items-center gap-1 ml-1"
        >
          Reserve Seat <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0D0D0D]/85 backdrop-blur-xl border-b border-[#2A2A2A] shadow-2xl py-3' 
            : 'bg-[#0D0D0D]/60 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* CBM Academy Logo */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E1E1E] to-[#0D0D0D] border border-[#FF6B00]/40 flex items-center justify-center shadow-lg group-hover:border-[#FF6B00] transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-[#FF6B00]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-display font-black text-xl text-[#FF6B00]">CBM</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-lg text-white tracking-tight leading-none">
                    CBM <span className="text-[#FF6B00]">ACADEMY</span>
                  </span>
                </div>
                <span className="text-[10px] text-zinc-400 font-medium tracking-widest uppercase">
                  Digital & AI Institute • Delhi
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#1E1E1E]/80 border border-[#2A2A2A] rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-[#FF6B00] text-black shadow-md font-bold'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Header Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Optional Enquiries Tracker Badge */}
              {onOpenLeads && (
                <button
                  onClick={onOpenLeads}
                  className="relative p-2 rounded-xl bg-[#1E1E1E] border border-[#2A2A2A] text-zinc-400 hover:text-white hover:border-[#FF6B00]/50 transition-all text-xs flex items-center gap-1.5"
                  title="View Submitted Lead Enquiries"
                >
                  <Database className="w-4 h-4 text-[#FF6B00]" />
                  <span className="hidden md:inline">Enquiries</span>
                  {leadCount > 0 && (
                    <span className="bg-[#FF6B00] text-black font-extrabold text-[10px] px-1.5 py-0.2 rounded-full">
                      {leadCount}
                    </span>
                  )}
                </button>
              )}

              {/* Direct Phone Call Button */}
              <a
                href="tel:+919811234567"
                className="hidden xl:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#1E1E1E] border border-[#2A2A2A] text-xs font-medium text-zinc-300 hover:text-white hover:border-[#FF6B00]/40 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>+91 98112 34567</span>
              </a>

              {/* Main CTA */}
              <button
                onClick={() => onOpenEnquire('header_cta')}
                className="bg-[#FF6B00] hover:bg-[#FF5500] text-black font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-[#FF6B00]/25 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={() => onOpenEnquire('mobile_header')}
                className="bg-[#FF6B00] text-black font-bold text-xs px-3 py-2 rounded-lg"
              >
                Enquire
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-[#1E1E1E] border border-[#2A2A2A] text-white focus:outline-none focus:border-[#FF6B00]"
                aria-label="Toggle Navigation"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-[#FF6B00]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#121212] border-l border-[#2A2A2A] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#2A2A2A]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B00] flex items-center justify-center font-bold text-black font-display">
                    CBM
                  </div>
                  <span className="font-display font-bold text-lg text-white">CBM Academy</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-[#1E1E1E] text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30 font-bold'
                          : 'text-zinc-300 hover:bg-[#1E1E1E]'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#2A2A2A] space-y-3">
              <div className="text-xs text-zinc-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>South Extension, New Delhi</span>
              </div>
              <a
                href="tel:+919811234567"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1E1E1E] border border-[#2A2A2A] text-sm text-white font-medium"
              >
                <PhoneCall className="w-4 h-4 text-[#FF6B00]" />
                <span>+91 98112 34567</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquire('mobile_drawer');
                }}
                className="w-full bg-[#FF6B00] hover:bg-[#FF5500] text-black font-bold text-sm py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
