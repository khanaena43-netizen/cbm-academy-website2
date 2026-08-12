import React from 'react';
import { EnquiryData } from '../types';
import { X, Database, Trash2, Phone, Mail, Clock, MapPin, UserCheck } from 'lucide-react';

interface LeadDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  enquiries: EnquiryData[];
  onClearEnquiries: () => void;
}

export const LeadDrawerModal: React.FC<LeadDrawerModalProps> = ({
  isOpen,
  onClose,
  enquiries,
  onClearEnquiries,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-[#121212] border-2 border-[#2A2A2A] rounded-[24px] p-6 sm:p-8 shadow-2xl z-10 text-left max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40 flex items-center justify-center font-bold">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-xl text-white">Submitted Lead Enquiries</h3>
              <p className="text-xs text-zinc-400">Stored locally in browser session ({enquiries.length} Enquiries)</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {enquiries.length > 0 && (
              <button
                onClick={onClearEnquiries}
                className="p-2 rounded-xl bg-red-950/40 text-red-400 hover:bg-red-900/60 border border-red-800/40 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Clear test enquiries"
              >
                <Trash2 className="w-4 h-4" /> Clear All
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#1E1E1E] text-zinc-400 hover:text-white border border-[#2A2A2A]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* List Body */}
        <div className="py-4 overflow-y-auto space-y-3 flex-1">
          {enquiries.length > 0 ? (
            enquiries.map((item) => (
              <div
                key={item.id}
                className="bg-[#1E1E1E] border border-[#2A2A2A] p-4 rounded-xl space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#FF6B00] bg-[#FF6B00]/15 px-2 py-0.5 rounded font-bold">
                      {item.id}
                    </span>
                    <strong className="text-white text-sm">{item.name}</strong>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono">{item.createdAt}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-zinc-300 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#FF6B00]" /> {item.phone}
                  </span>
                  <span className="flex items-center gap-1.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-[#FF6B00]" /> {item.email}
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-[#FF6B00]">
                    <MapPin className="w-3.5 h-3.5" /> {item.mode}
                  </span>
                </div>

                <div className="pt-2 border-t border-[#2A2A2A]/60 flex items-center justify-between text-zinc-400">
                  <span>Course: <strong className="text-white">{item.course}</strong></span>
                  {item.message && <span className="italic truncate max-w-[200px]">"{item.message}"</span>}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-zinc-400 space-y-2">
              <UserCheck className="w-8 h-8 text-zinc-600 mx-auto" />
              <p className="text-xs">No enquiries submitted yet in this session.</p>
              <p className="text-[11px] text-zinc-500">
                Click any "Enquire Now" or submit the contact form on the website to test lead capture.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
