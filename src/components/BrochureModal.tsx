import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-md bg-[#121212] border-2 border-[#2A2A2A] rounded-[24px] p-6 sm:p-8 shadow-2xl z-10 text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#1E1E1E] text-zinc-400 hover:text-white border border-[#2A2A2A]"
        >
          <X className="w-5 h-5" />
        </button>

        {isDownloaded ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center mx-auto">
              <Download className="w-6 h-6 animate-bounce" />
            </div>

            <h3 className="font-display font-bold text-xl text-white">
              Syllabus Prospectus Sent!
            </h3>

            <p className="text-xs text-zinc-300">
              The 2026 CBM Academy AI-Integrated Digital Marketing Prospectus has been sent to <strong className="text-white">{email}</strong> and your WhatsApp.
            </p>

            <button
              onClick={onClose}
              className="bg-[#FF6B00] text-black font-bold text-xs px-6 py-2.5 rounded-xl mt-2"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1E1E1E] border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Download Prospectus</h3>
                <span className="text-[11px] text-zinc-400">Detailed 2026 Curriculum & Day-by-day Timetable</span>
              </div>
            </div>

            <form onSubmit={handleDownload} className="space-y-3 pt-2">
              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98100 00000"
                  className="w-full bg-[#1E1E1E] border border-[#2A2A2A] focus:border-[#FF6B00] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className="w-full bg-[#1E1E1E] border border-[#2A2A2A] focus:border-[#FF6B00] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6B00] hover:bg-[#FF5500] text-black font-extrabold text-xs py-3 rounded-xl transition-all shadow flex items-center justify-center gap-2 mt-2"
              >
                <Download className="w-4 h-4" />
                <span>Get Instant Prospectus PDF</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
