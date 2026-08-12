import React, { useState } from 'react';
import { ACADEMY_INFO } from '../data/cbmData';
import { EnquiryData } from '../types';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Sparkles, Building2 } from 'lucide-react';

interface ContactFormProps {
  onAddEnquiry?: (enquiry: EnquiryData) => void;
  defaultSource?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onAddEnquiry, defaultSource = 'contact_section' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    mode: 'Offline New Delhi' as 'Offline New Delhi' | 'Live Online' | 'Hybrid',
    course: 'Pro Digital Marketing Course (AI-Integrated)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newEnquiry: EnquiryData = {
        id: 'ENQ-' + Date.now().toString().slice(-6),
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        mode: formData.mode,
        course: formData.course,
        message: formData.message,
        createdAt: new Date().toLocaleString(),
      };

      // Store in localStorage for complete local state persistence
      const existing = JSON.parse(localStorage.getItem('cbm_enquiries') || '[]');
      localStorage.setItem('cbm_enquiries', JSON.stringify([newEnquiry, ...existing]));

      if (onAddEnquiry) {
        onAddEnquiry(newEnquiry);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-[#0D0D0D] relative border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-xs font-bold text-[#FF6B00]">
            <Sparkles className="w-3.5 h-3.5" /> Book Free Counselling
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Ready to Build Your <span className="text-gradient-orange">Digital Future?</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base">
            Get personalized career guidance, request the detailed syllabus prospectus, or reserve your seat for the upcoming Delhi batch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Academy Location & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bento-card p-8 bg-[#121212] border border-[#2A2A2A] rounded-[24px] space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00] text-black flex items-center justify-center font-display font-black text-lg">
                  CBM
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg text-white">CBM Academy</h3>
                  <p className="text-xs text-zinc-400 font-medium">New Delhi Center & Admissions Office</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-zinc-300 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1E1E1E]/80 border border-[#2A2A2A]">
                  <MapPin className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Address:</strong>
                    <span>{ACADEMY_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1E1E1E]/80 border border-[#2A2A2A]">
                  <Phone className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Phone / Admissions:</strong>
                    <a href={`tel:${ACADEMY_INFO.contactNumber}`} className="hover:text-[#FF6B00] transition-colors">
                      {ACADEMY_INFO.contactNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1E1E1E]/80 border border-[#2A2A2A]">
                  <Mail className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Email Support:</strong>
                    <a href={`mailto:${ACADEMY_INFO.email}`} className="hover:text-[#FF6B00] transition-colors">
                      {ACADEMY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1E1E1E]/80 border border-[#2A2A2A]">
                  <Clock className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Counseling Hours:</strong>
                    <span>Mon - Sat: 9:30 AM to 7:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919811234567?text=Hi%20CBM%20Academy,%20I%20would%20like%20to%20enquire%20about%20the%20AI%20Digital%20Marketing%20Course.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1E1E1E] hover:bg-[#25D366]/20 border border-[#25D366]/40 hover:border-[#25D366] text-white font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Chat directly on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Side: Sleek Form with Glowing Orange Focus Rings */}
          <div className="lg:col-span-7">
            <div className="bento-card p-8 sm:p-10 bg-[#121212] border-2 border-[#2A2A2A] hover:border-[#FF6B00]/40 rounded-[28px] shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display font-black text-2xl text-white">
                      Enquiry Received Successfully!
                    </h3>
                    <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                      Thank you <strong className="text-white">{formData.name}</strong>. Our Admissions Team from CBM Academy New Delhi will contact you shortly on <strong className="text-[#FF6B00]">{formData.phone}</strong> with the syllabus brochure & batch schedule.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white text-xs font-bold px-6 py-2.5 rounded-xl border border-[#2A2A2A]"
                    >
                      Submit Another Enquiry
                    </button>
                    <a
                      href="#courses"
                      className="bg-[#FF6B00] text-black text-xs font-bold px-6 py-2.5 rounded-xl"
                    >
                      Browse Courses
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="flex items-center justify-between pb-2 border-b border-[#2A2A2A]">
                    <h3 className="font-display font-extrabold text-xl text-white">
                      Admissions Enquiry Form
                    </h3>
                    <span className="text-[11px] font-mono text-[#FF6B00] bg-[#FF6B00]/15 px-2.5 py-0.5 rounded font-bold">
                      Limited Seat Allocation
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300 block">
                        Full Name <span className="text-[#FF6B00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-[#1E1E1E] border border-[#2A2A2A] focus:border-[#FF6B00] rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300 block">
                        Phone / WhatsApp Number <span className="text-[#FF6B00]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98100 00000"
                        className="w-full bg-[#1E1E1E] border border-[#2A2A2A] focus:border-[#FF6B00] rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300 block">
                        Email Address <span className="text-[#FF6B00]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full bg-[#1E1E1E] border border-[#2A2A2A] focus:border-[#FF6B00] rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                      />
                    </div>

                    {/* Preferred Mode */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300 block">
                        Preferred Learning Mode
                      </label>
                      <select
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value as any })}
                        className="w-full bg-[#1E1E1E] border border-[#2A2A2A] focus:border-[#FF6B00] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                      >
                        <option value="Offline New Delhi">Offline Center (South Extension, Delhi)</option>
                        <option value="Live Online">Live Interactive Online Batch</option>
                        <option value="Hybrid">Hybrid (Delhi Classroom + Live Recordings)</option>
                      </select>
                    </div>
                  </div>

                  {/* Course Interested In */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-300 block">
                      Course Interested In
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full bg-[#1E1E1E] border border-[#2A2A2A] focus:border-[#FF6B00] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                    >
                      <option value="Pro Digital Marketing Course (AI-Integrated)">
                        Pro Digital Marketing Master Program (AI-Integrated)
                      </option>
                      <option value="Performance Marketing & Google Ads Masterclass">
                        Performance Marketing & Google Ads Masterclass
                      </option>
                      <option value="AI Content & Social Media Strategy">
                        AI Content & Social Media Growth Strategy
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-300 block">
                      Message / Specific Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Interested in weekend batch timing and installment fee structure."
                      className="w-full bg-[#1E1E1E] border border-[#2A2A2A] focus:border-[#FF6B00] rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                    />
                  </div>

                  {/* Full-width Solid Orange Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF6B00] hover:bg-[#FF5500] text-black font-extrabold text-sm py-4 rounded-xl transition-all duration-200 shadow-xl shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
                        <span>Submitting Enquiry...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-[10px] text-zinc-500 text-center">
                    🔒 Your details are secure. We respect your privacy and never send spam.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
