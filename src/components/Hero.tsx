import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, Zap, Cpu, Play, ShieldCheck, BarChart2, MessageSquare, Bot } from 'lucide-react';
import { ACADEMY_INFO } from '../data/cbmData';

interface HeroProps {
  onOpenEnquire: (source?: string) => void;
  onOpenCounsellor: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquire, onOpenCounsellor }) => {
  const [activeTab, setActiveTab] = useState<'roi' | 'ai' | 'live'>('roi');
  const [campaignBudget, setCampaignBudget] = useState(25000); // ₹25,000

  // Interactive ROI calculation
  const estLeads = Math.round((campaignBudget / 100) * 1.8);
  const estRevenue = Math.round(campaignBudget * 4.2);

  const aiToolsPills = [
    { name: 'ChatGPT 5', tag: 'AI Copy' },
    { name: 'Claude 3.7', tag: 'Strategy' },
    { name: 'Midjourney v6', tag: 'Creatives' },
    { name: 'SurferSEO', tag: 'GEO Ranking' },
    { name: 'Meta AI Ads', tag: 'Advantage+' },
    { name: 'Zapier', tag: 'Automations' },
  ];

  return (
    <section id="home" className="relative pt-8 pb-20 lg:pt-16 lg:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background Radial Orange Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B00]/10 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF5500]/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Hero Copy & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1E1E1E] border border-[#FF6B00]/30 shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B00]"></span>
              </span>
              <span className="text-xs font-semibold text-zinc-200">
                New Delhi's #1 AI-Powered Digital Marketing Institute
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                Master Digital Marketing.<br />
                <span className="text-gradient-orange drop-shadow-sm">
                  Build With AI.
                </span><br />
                Grow Your Career.
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed pt-2">
                Learn modern Digital Marketing with AI, practical projects, real-world tools, and career-focused training at <strong className="text-white font-semibold">CBM Academy</strong> in New Delhi.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#courses"
                className="bg-[#FF6B00] hover:bg-[#FF5500] text-black font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 group"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCounsellor}
                className="bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white hover:text-[#FF6B00] border border-white/20 hover:border-[#FF6B00] font-bold text-sm sm:text-base px-7 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <MessageSquare className="w-4 h-4 text-[#FF6B00]" />
                <span>Talk to a Counsellor</span>
              </button>
            </div>

            {/* Key Trust Highlights Bullet Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#2A2A2A]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span className="text-xs text-zinc-300 font-medium">100% Practical AI Workflows</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span className="text-xs text-zinc-300 font-medium">25+ Live Brand Projects</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span className="text-xs text-zinc-300 font-medium">Guaranteed Career Guidance</span>
              </div>
            </div>

            {/* Quick Stat Bar */}
            <div className="flex items-center gap-6 pt-2 text-xs text-zinc-400">
              <div>
                <span className="font-display font-bold text-lg text-white block">3,200+</span>
                <span>Graduates Trained</span>
              </div>
              <div className="w-px h-8 bg-[#2A2A2A]" />
              <div>
                <span className="font-display font-bold text-lg text-white block">4.9 ★</span>
                <span>Rating in New Delhi</span>
              </div>
              <div className="w-px h-8 bg-[#2A2A2A]" />
              <div>
                <span className="font-display font-bold text-lg text-[#FF6B00] block">Max 15</span>
                <span>Students per Batch</span>
              </div>
            </div>

          </div>

          {/* Right Column - Bento Visual Preview / Interactive AI Marketing Dashboard Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Glow frame behind visual */}
            <div className="absolute -inset-1 rounded-[24px] bg-gradient-to-r from-[#FF6B00]/40 via-transparent to-[#FF5500]/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />

            <div className="bento-card p-6 border border-[#2A2A2A] shadow-2xl relative overflow-hidden bg-[#121212]/90">
              
              {/* Header Bar of the Mock Dashboard */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A]">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-zinc-400 font-mono ml-2">CBM-AI-Marketing-Suite.v2026</span>
                </div>
                <div className="flex items-center gap-1 bg-[#1E1E1E] p-1 rounded-lg border border-[#2A2A2A]">
                  <button
                    onClick={() => setActiveTab('roi')}
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                      activeTab === 'roi' ? 'bg-[#FF6B00] text-black font-bold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    ROI Calc
                  </button>
                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                      activeTab === 'ai' ? 'bg-[#FF6B00] text-black font-bold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    AI Stack
                  </button>
                </div>
              </div>

              {/* Dynamic Interactive Panel */}
              <div className="py-5 space-y-5">
                
                {activeTab === 'roi' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-400 font-medium">Interactive Ad Spend Simulator</span>
                      <span className="text-xs font-mono text-[#FF6B00] font-bold">₹{campaignBudget.toLocaleString()} / mo</span>
                    </div>

                    {/* Range Slider */}
                    <div>
                      <input
                        type="range"
                        min="10000"
                        max="100000"
                        step="5000"
                        value={campaignBudget}
                        onChange={(e) => setCampaignBudget(Number(e.target.value))}
                        className="w-full h-1.5 bg-[#2A2A2A] rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
                      />
                      <div className="flex justify-between text-[10px] text-zinc-500 mt-1 font-mono">
                        <span>₹10,000</span>
                        <span>₹50,000</span>
                        <span>₹1,00,000</span>
                      </div>
                    </div>

                    {/* Simulated Results Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="bg-[#1E1E1E] p-3 rounded-xl border border-[#2A2A2A]">
                        <span className="text-[10px] text-zinc-400 block">Est. High-Intent Leads</span>
                        <span className="font-display font-extrabold text-lg text-white flex items-center gap-1.5 mt-0.5">
                          {estLeads} Leads <TrendingUp className="w-3.5 h-3.5 text-green-400 inline" />
                        </span>
                        <span className="text-[9px] text-zinc-500 block">via AI Target Personas</span>
                      </div>
                      <div className="bg-[#1E1E1E] p-3 rounded-xl border border-[#2A2A2A]">
                        <span className="text-[10px] text-zinc-400 block">Projected Revenue Pipeline</span>
                        <span className="font-display font-extrabold text-lg text-[#FF6B00] block mt-0.5">
                          ₹{estRevenue.toLocaleString()}
                        </span>
                        <span className="text-[9px] text-zinc-500 block">4.2x ROAS Benchmark</span>
                      </div>
                    </div>

                    {/* SVG Animated ROI Graph Curve */}
                    <div className="bg-[#1E1E1E]/50 p-3 rounded-xl border border-[#2A2A2A] relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] text-zinc-400 font-mono">Live Campaign Growth Curve</span>
                        <span className="text-[10px] text-green-400 font-semibold flex items-center gap-1">
                          <Zap className="w-3 h-3" /> +340% Performance
                        </span>
                      </div>
                      <svg viewBox="0 0 300 60" className="w-full h-14 overflow-visible">
                        <defs>
                          <linearGradient id="orangeGlow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0 50 Q 50 40, 100 25 T 200 15 T 300 5 L 300 60 L 0 60 Z"
                          fill="url(#orangeGlow)"
                        />
                        <path
                          d="M 0 50 Q 50 40, 100 25 T 200 15 T 300 5"
                          fill="none"
                          stroke="#FF6B00"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <circle cx="300" cy="5" r="4" fill="#FF6B00" className="animate-ping" />
                        <circle cx="300" cy="5" r="3" fill="#FFFFFF" />
                      </svg>
                    </div>
                  </div>
                )}

                {activeTab === 'ai' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-300 font-semibold">15+ AI Tools Taught at CBM</span>
                      <span className="text-[10px] bg-[#FF6B00]/20 text-[#FF6B00] px-2 py-0.5 rounded font-bold">2026 Stack</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {aiToolsPills.map((tool, idx) => (
                        <div key={idx} className="bg-[#1E1E1E] p-2.5 rounded-lg border border-[#2A2A2A] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Bot className="w-3.5 h-3.5 text-[#FF6B00]" />
                            <span className="text-xs font-semibold text-white">{tool.name}</span>
                          </div>
                          <span className="text-[9px] text-zinc-400 bg-black/40 px-1.5 py-0.5 rounded">{tool.tag}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 bg-[#1E1E1E] rounded-xl border border-[#FF6B00]/30 text-xs text-zinc-300 flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                      <p className="text-[11px] leading-relaxed">
                        Learn how to build <strong className="text-white">Custom GPT Agents</strong> that write 1,000-word SEO blogs, analyze ad metrics, and draft social copy in seconds.
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Floating Floating Badge Overlay */}
              <div className="pt-3 border-t border-[#2A2A2A] flex items-center justify-between text-[11px] text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
                  <span>Delhi Classroom + Live Online</span>
                </div>
                <button
                  onClick={() => onOpenEnquire('hero_demo_button')}
                  className="text-[#FF6B00] font-bold hover:underline flex items-center gap-1"
                >
                  Book Free Demo <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
