import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { CoursesSection } from './components/CoursesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Curriculum } from './components/Curriculum';
import { AISection } from './components/AISection';
import { LearningProcess } from './components/LearningProcess';
import { Testimonials } from './components/Testimonials';
import { CareerSection } from './components/CareerSection';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

import { EnquiryModal } from './components/EnquiryModal';
import { BrochureModal } from './components/BrochureModal';
import { LeadDrawerModal } from './components/LeadDrawerModal';
import { EnquiryData } from './types';

export default function App() {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [enquireSource, setEnquireSource] = useState('general');
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isLeadsOpen, setIsLeadsOpen] = useState(false);
  const [enquiries, setEnquiries] = useState<EnquiryData[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cbm_enquiries');
      if (stored) {
        setEnquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to parse local stored enquiries', e);
    }
  }, []);

  const handleOpenEnquire = (source: string = 'general') => {
    setEnquireSource(source);
    setIsEnquireOpen(true);
  };

  const handleOpenCounsellor = () => {
    setEnquireSource('hero_counsellor_button');
    setIsEnquireOpen(true);
  };

  const handleAddEnquiry = (newEnquiry: EnquiryData) => {
    setEnquiries((prev) => [newEnquiry, ...prev]);
  };

  const handleClearEnquiries = () => {
    localStorage.removeItem('cbm_enquiries');
    setEnquiries([]);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-sans antialiased selection:bg-[#FF6B00] selection:text-black overflow-x-hidden">
      
      {/* Header Bar */}
      <Header
        onOpenEnquire={handleOpenEnquire}
        onOpenLeads={() => setIsLeadsOpen(true)}
        leadCount={enquiries.length}
      />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenEnquire={handleOpenEnquire}
          onOpenCounsellor={handleOpenCounsellor}
        />

        {/* Trust Metric Cards */}
        <TrustSection
          onOpenEnquire={handleOpenEnquire}
        />

        {/* Flagship Course Overview */}
        <CoursesSection
          onOpenEnquire={handleOpenEnquire}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* Why CBM Bento Grid */}
        <WhyChooseUs
          onOpenEnquire={handleOpenEnquire}
        />

        {/* Interactive Curriculum Timeline & Accordion */}
        <Curriculum
          onOpenEnquire={handleOpenEnquire}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* AI Workflow & Prompt Sandbox */}
        <AISection
          onOpenEnquire={handleOpenEnquire}
        />

        {/* 4-Step Practical Learning Model */}
        <LearningProcess
          onOpenEnquire={handleOpenEnquire}
        />

        {/* Testimonials */}
        <Testimonials
          onOpenEnquire={handleOpenEnquire}
        />

        {/* Career & Placement */}
        <CareerSection
          onOpenEnquire={handleOpenEnquire}
        />

        {/* Frequently Asked Questions */}
        <FAQ
          onOpenEnquire={handleOpenEnquire}
        />

        {/* Contact Form & Location Map Info */}
        <ContactForm
          onAddEnquiry={handleAddEnquiry}
          defaultSource="contact_form"
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenEnquire={handleOpenEnquire}
      />

      {/* Modals & Drawers */}
      <EnquiryModal
        isOpen={isEnquireOpen}
        onClose={() => setIsEnquireOpen(false)}
        source={enquireSource}
        onAddEnquiry={handleAddEnquiry}
      />

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      <LeadDrawerModal
        isOpen={isLeadsOpen}
        onClose={() => setIsLeadsOpen(false)}
        enquiries={enquiries}
        onClearEnquiries={handleClearEnquiries}
      />

    </div>
  );
}
