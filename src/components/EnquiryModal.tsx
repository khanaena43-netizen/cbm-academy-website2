import React, { useState } from 'react';
import { EnquiryData } from '../types';
import { X, Send, CheckCircle2, Sparkles, MessageSquare, Phone } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  onAddEnquiry?: (enquiry: EnquiryData) => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  source = 'modal',
  onAddEnquiry,
}) => {
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

  if (!isOpen) return null;

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
        message: formData.message || `Triggered via ${source}`,
        createdAt: new Date().toLocaleString(),
      };

      const existing = JSON.parse(localStorage.getItem('cbm_enquiries') || '[]');
      localStorage.setItem('cbm_enquiries', JSON.stringify([newEnquiry, ...existing]));

      if (onAddEnquiry) {
        onAddEnquiry(newEnquiry);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#121212] border-2 border-[#2A2A2A] rounded-[24px] p-6 sm:p-8 shadow-2xl overflow-hidden z-10 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#1E1E1E] text-zinc-400 hover:text-white border border-[#2A2A2A] hover:border-[#FF6B00] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-display font-black text-2xl text-white">
              Enquiry Submitted!
            </h3>

            <p className="text-xs text-zinc-300 leading-relaxed max-w-sm mx-auto">
              Thank you <strong className="text-white">{formData.name}</strong>. CBM Academy's Delhi Admissions team will contact you on <strong className="text-[#FF6B00]">{formData.phone}</strong> shortly.
            </p>

            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="bg-[#FF6B00] text-black font-bold text-xs px-6 py-2.5 rounded-xl shadow"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] text-[10px] font-mono font-bold mb-2">
                <Sparkles className="w-3 h-3" /> CBM Academy Admissions
              </div>
              <h3 className="font-display font-black text-2xl text-white">
                Reserve Seat / Request Callback
              </h3>
              <p className="text-xs text-zinc-400">
                Get 1-on-1 counseling, course fees structure, & upcoming Delhi batch dates.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300 block">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Priya Verma"
                  className="w-full bg-[#1E1E1E] border border-[#2A2A2A] focus:border-[#FF6B00] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-300 block">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98100 00000"
                    className="w-full bg-[#1E1E1E] border border-[#2A2A2A] focus:border-[#FF6B00] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-300 block">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="priya@example.com"
                    className="w-full bg-[#1E1E1E] border border-[#2A2A2A] focus:border-[#FF6B00] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300 block">Preferred Learning Mode</label>
                <select
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value as any })}
                  className="w-full bg-[#1E1E1E] border border-[#2A2A2A] focus:border-[#FF6B00] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                >
                  <option value="Offline New Delhi">Offline Center (South Extension, Delhi)</option>
                  <option value="Live Online">Live Interactive Online Batch</option>
                  <option value="Hybrid">Hybrid Mode</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300 block">Message / Note (Optional)</label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ask about batch timings or fees installment options."
                  className="w-full bg-[#1E1E1E] border border-[#2A2A2A] focus:border-[#FF6B00] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF6B00] hover:bg-[#FF5500] text-black font-extrabold text-xs py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Submit & Request Callback</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
