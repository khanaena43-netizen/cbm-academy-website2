import React, { useState } from 'react';
import { AI_WORKFLOW_STEPS } from '../data/cbmData';
import { Cpu, Zap, ArrowRight, Bot, Sparkles, Copy, Check, Play, Terminal } from 'lucide-react';

interface AISectionProps {
  onOpenEnquire: (source?: string) => void;
}

export const AISection: React.FC<AISectionProps> = ({ onOpenEnquire }) => {
  const [selectedStepId, setSelectedStepId] = useState<string>(AI_WORKFLOW_STEPS[0].id);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const activeStep = AI_WORKFLOW_STEPS.find(s => s.id === selectedStepId) || AI_WORKFLOW_STEPS[0];

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <section id="ai-edge" className="py-20 bg-[#0D0D0D] relative border-t border-[#2A2A2A] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF6B00]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#FF6B00]/40 text-xs font-bold text-[#FF6B00]">
            <Cpu className="w-3.5 h-3.5" /> 2026 Marketing Paradigm Shift
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Digital Marketing Is Changing.<br />
            <span className="text-gradient-orange">Learn With AI.</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Traditional digital marketing is slow. At CBM Academy, you learn how to connect autonomous AI tools to complete 10 days of work in 10 minutes.
          </p>
        </div>

        {/* Dynamic Connected Workflow Line Bar */}
        <div className="mb-12 relative">
          
          {/* Subtle animated connecting line in background */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#2A2A2A] -translate-y-1/2 -z-0">
            <div className="h-full bg-gradient-to-r from-[#FF6B00] via-[#FF5500] to-[#FF8800] w-full animate-pulse opacity-60" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {AI_WORKFLOW_STEPS.map((step, idx) => {
              const isSelected = selectedStepId === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedStepId(step.id)}
                  className={`p-4 rounded-2xl border transition-all text-center flex flex-col items-center justify-between gap-2 group relative overflow-hidden ${
                    isSelected
                      ? 'bg-[#1E1E1E] border-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.25)] scale-105'
                      : 'bg-[#121212] border-[#2A2A2A] hover:border-[#FF6B00]/40'
                  }`}
                >
                  <div className="flex items-center justify-between w-full text-[10px] font-mono text-zinc-500">
                    <span>0{idx + 1}</span>
                    <span className="text-[#FF6B00] font-bold">{step.speedMultiplier}</span>
                  </div>

                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                    isSelected ? 'bg-[#FF6B00] text-black' : 'bg-[#1E1E1E] text-zinc-300 group-hover:text-white'
                  }`}>
                    <Bot className="w-4 h-4" />
                  </div>

                  <span className={`text-xs font-bold transition-colors ${
                    isSelected ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                  }`}>
                    {step.stepName}
                  </span>

                  {/* Connected pulse dot */}
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping mt-1" />
                  )}
                </button>
              );
            })}
          </div>

        </div>

        {/* Selected AI Stage Inspector Card */}
        <div className="bento-card bg-[#121212] border-2 border-[#2A2A2A] p-6 sm:p-10 rounded-[28px] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Step Overview & Traditional vs AI Comparison */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-3">
                <span className="bg-[#FF6B00] text-black font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                  {activeStep.stepName}
                </span>
                <span className="text-xs text-zinc-400 font-medium">
                  {activeStep.tagline}
                </span>
                <span className="bg-[#1E1E1E] text-[#FF6B00] border border-[#FF6B00]/30 text-xs px-3 py-1 rounded-full font-bold ml-auto">
                  {activeStep.speedMultiplier}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                How AI Transforms <span className="text-[#FF6B00]">{activeStep.stepName}</span>
              </h3>

              {/* Comparison Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Traditional Method */}
                <div className="bg-[#1E1E1E]/50 border border-red-900/30 p-4 rounded-xl space-y-2">
                  <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-wider block">
                    ❌ Old / Traditional Method
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {activeStep.tradMethod}
                  </p>
                </div>

                {/* AI Integrated Method */}
                <div className="bg-[#1E1E1E] border border-green-500/30 p-4 rounded-xl space-y-2">
                  <span className="text-[10px] font-mono text-green-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#FF6B00]" /> ✅ CBM AI-Integrated Workflow
                  </span>
                  <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                    {activeStep.aiMethod}
                  </p>
                </div>

              </div>

              {/* AI Tools Used Pills */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider block">
                  AI Tools Mastered in This Module:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeStep.aiTools.map((tool, idx) => (
                    <span key={idx} className="bg-[#1E1E1E] border border-[#FF6B00]/40 text-white font-semibold text-xs px-3.5 py-1.5 rounded-xl flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-[#FF6B00]" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Side: Interactive AI Prompt Sandbox Box */}
            <div className="lg:col-span-5">
              <div className="bg-black/80 border border-[#2A2A2A] rounded-2xl p-5 space-y-4 shadow-inner">
                
                <div className="flex items-center justify-between pb-3 border-b border-[#2A2A2A]">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <Terminal className="w-4 h-4 text-[#FF6B00]" />
                    <span>CBM Prompt Blueprint</span>
                  </div>
                  <button
                    onClick={() => handleCopyPrompt(activeStep.promptExample)}
                    className="text-xs text-zinc-400 hover:text-[#FF6B00] flex items-center gap-1 transition-colors"
                  >
                    {copiedPrompt ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-green-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-[#121212] p-4 rounded-xl border border-[#2A2A2A] font-mono text-xs text-zinc-300 leading-relaxed text-left select-all">
                  "{activeStep.promptExample}"
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-zinc-500 font-medium">
                    Taught in Batch Week 02
                  </span>
                  <button
                    onClick={() => onOpenEnquire(`ai_prompt_${activeStep.id}`)}
                    className="bg-[#FF6B00] hover:bg-[#FF5500] text-black font-bold text-xs px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5"
                  >
                    <span>Master This Prompt</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
