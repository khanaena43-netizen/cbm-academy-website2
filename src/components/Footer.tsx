import React from 'react';
import { ACADEMY_INFO } from '../data/cbmData';
import { MapPin, Phone, Mail, ArrowUpRight, Instagram, Linkedin, Youtube, Facebook, Twitter, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenEnquire: (source?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquire }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-[#2A2A2A] text-zinc-400 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B00] text-black font-display font-black text-lg flex items-center justify-center">
                CBM
              </div>
              <div>
                <span className="font-display font-black text-xl text-white tracking-tight">
                  CBM <span className="text-[#FF6B00]">ACADEMY</span>
                </span>
                <span className="block text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                  Digital Marketing & AI Institute
                </span>
              </div>
            </a>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              CBM Academy is New Delhi's premier AI-Integrated Digital Marketing Institute. We specialize in hands-on practical learning, live agency campaigns, and 100% career placement assistance.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1E1E1E] border border-[#2A2A2A] hover:border-[#FF6B00] hover:text-[#FF6B00] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1E1E1E] border border-[#2A2A2A] hover:border-[#FF6B00] hover:text-[#FF6B00] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1E1E1E] border border-[#2A2A2A] hover:border-[#FF6B00] hover:text-[#FF6B00] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1E1E1E] border border-[#2A2A2A] hover:border-[#FF6B00] hover:text-[#FF6B00] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="font-display font-bold text-white text-sm">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-[#FF6B00] transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-[#FF6B00] transition-colors">Courses & Modules</a></li>
              <li><a href="#why-us" className="hover:text-[#FF6B00] transition-colors">Why CBM Academy</a></li>
              <li><a href="#curriculum" className="hover:text-[#FF6B00] transition-colors">Interactive Curriculum</a></li>
              <li><a href="#ai-edge" className="hover:text-[#FF6B00] transition-colors">AI Marketing Stack</a></li>
              <li><a href="#career" className="hover:text-[#FF6B00] transition-colors">Placement Cell</a></li>
            </ul>
          </div>

          {/* Key Topics / SEO Keywords */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="font-display font-bold text-white text-sm">Courses in Delhi</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#courses" className="hover:text-[#FF6B00] transition-colors">Digital Marketing Course in Delhi</a></li>
              <li><a href="#courses" className="hover:text-[#FF6B00] transition-colors">AI Digital Marketing Masterclass</a></li>
              <li><a href="#courses" className="hover:text-[#FF6B00] transition-colors">Google Ads & Performance Marketing</a></li>
              <li><a href="#courses" className="hover:text-[#FF6B00] transition-colors">Meta Ads & Instagram Growth</a></li>
              <li><a href="#courses" className="hover:text-[#FF6B00] transition-colors">SEO & Generative Engine Optimization</a></li>
              <li><a href="#courses" className="hover:text-[#FF6B00] transition-colors">WordPress No-Code E-commerce</a></li>
            </ul>
          </div>

          {/* New Delhi Office Details */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="font-display font-bold text-white text-sm">Delhi Academy Center</h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <span>{ACADEMY_INFO.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>{ACADEMY_INFO.contactNumber}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>{ACADEMY_INFO.email}</span>
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquire('footer_visit')}
                  className="bg-[#1E1E1E] hover:bg-[#2A2A2A] text-[#FF6B00] border border-[#FF6B00]/40 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>Book Center Visit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Policy Row */}
        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {currentYear} CBM Academy. All rights reserved. New Delhi, India.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" onClick={(e) => { e.preventDefault(); onOpenEnquire('privacy'); }} className="hover:text-zinc-300">Privacy Policy</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onOpenEnquire('terms'); }} className="hover:text-zinc-300">Terms of Admission</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onOpenEnquire('sitemap'); }} className="hover:text-zinc-300">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
