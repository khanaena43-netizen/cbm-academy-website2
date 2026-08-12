import { CourseModule, FAQItem, Testimonial, AIWorkflowStep } from '../types';

export const ACADEMY_INFO = {
  name: 'CBM Academy',
  tagline: 'AI-Integrated Digital Marketing Academy',
  location: 'South Extension Part II, Ring Road, New Delhi - 110049',
  contactNumber: '+91 98112 34567',
  whatsappNumber: '+91 98112 34567',
  email: 'admissions@cbmacademy.in',
  rating: '4.9',
  totalGraduates: '3,200+',
  hiringPartners: '150+',
  highestPackage: '₹12.5 LPA',
  avgPackage: '₹5.8 LPA',
};

export const TRUST_METRICS = [
  {
    number: '25+',
    label: 'Practical Learning',
    description: 'Real brand campaigns, live budgets, and hands-on portfolio projects.',
    iconName: 'FolderKanban',
  },
  {
    number: '15+',
    label: 'AI Tools Integrated',
    description: 'ChatGPT 5, Claude 3.7, Midjourney, SurferSEO, Canva AI, and Zapier.',
    iconName: 'Cpu',
  },
  {
    number: '100%',
    label: 'Career Focused',
    description: 'Dedicated placement cell, agency tie-ups in Delhi-NCR, resume engineering.',
    iconName: 'Briefcase',
  },
  {
    number: '15 Max',
    label: 'Limited Batch Size',
    description: 'Small interactive groups ensuring 1-on-1 direct mentor feedback.',
    iconName: 'Users',
  },
];

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'dm-fundamentals',
    title: 'Digital Marketing Fundamentals & AI Strategy',
    shortDesc: 'Understand core marketing frameworks, buyer personas, and AI-assisted market research.',
    duration: 'Week 1-2',
    iconName: 'Compass',
    topics: [
      'Digital Marketing Ecosystem & 2026 Trends',
      'Customer Journey & Conversion Funnel Mapping',
      'Competitor Analysis with Perplexity & Claude',
      'Building High-Converting Buyer Personas',
      'AI Prompt Engineering for Marketing Frameworks'
    ],
    tools: ['Perplexity AI', 'Claude 3.7', 'ChatGPT 5', 'Google Trends'],
    practicalDeliverable: 'Comprehensive Brand Strategy Brief & AI-Researched Competitor Audit Matrix.'
  },
  {
    id: 'seo-ai',
    title: 'Advanced SEO & Generative Engine Optimization (GEO)',
    shortDesc: 'Master Google Search ranking, technical SEO, and optimization for AI Search (Perplexity/SGE).',
    duration: 'Week 3-4',
    iconName: 'Search',
    topics: [
      'Keyword Research & Intent Mapping with AI',
      'On-Page & Technical SEO Audits',
      'Generative Engine Optimization (GEO) for ChatGPT & Perplexity',
      'Programmatic SEO & High-DA Backlink Building',
      'Google Search Console & Schema Markup'
    ],
    tools: ['Ahrefs', 'SurferSEO', 'Google Search Console', 'Screaming Frog', 'ChatGPT SEO Agents'],
    practicalDeliverable: 'Live SEO Audit & Keyword Strategy for a Real Client Website.'
  },
  {
    id: 'wordpress-ecommerce',
    title: 'WordPress & No-Code E-commerce Development',
    shortDesc: 'Build fast, responsive, conversion-optimized websites and online stores without writing code.',
    duration: 'Week 5-6',
    iconName: 'Globe',
    topics: [
      'Domain, Hosting Setup & SSL Configuration',
      'Elementor Pro Page Building & Responsive Design',
      'WooCommerce Setup & Payment Gateway Integration (Razorpay)',
      'Landing Page UX/UI & High-Converting Copy structure',
      'Speed Optimization & Security Hardening'
    ],
    tools: ['WordPress', 'Elementor Pro', 'WooCommerce', 'Razorpay', 'WP Rocket'],
    practicalDeliverable: 'Fully Functional Live E-Commerce Store with Payment Integration.'
  },
  {
    id: 'google-ads',
    title: 'Google Ads & Performance Marketing',
    shortDesc: 'Run profitable Google Search, Shopping, Performance Max, and YouTube campaigns with real budgets.',
    duration: 'Week 7-8',
    iconName: 'Target',
    topics: [
      'Google Search Ads & Bidding Strategies',
      'Performance Max (PMax) & Shopping Campaigns',
      'Display & YouTube Video Ad Strategies',
      'Conversion Tracking with GTM & GA4',
      'AI Copy Generation for Google Responsive Search Ads'
    ],
    tools: ['Google Ads Manager', 'Google Tag Manager', 'GA4', 'Keyword Planner'],
    practicalDeliverable: 'Live Google Ads Campaign Launch with Real Ad Budget Allocation.'
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads (Facebook & Instagram) Mastery',
    shortDesc: 'Master audience targeting, creative testing, retargeting funnels, and scaling ad campaigns.',
    duration: 'Week 9-10',
    iconName: 'Share2',
    topics: [
      'Meta Business Suite & Ads Manager Setup',
      'CBO vs ABO Bidding & Custom Audiences',
      'High-CTR Ad Creatives & UGC Reel Frameworks',
      'Retargeting & Lookalike Audience Scaling',
      'Pixel Integration & Conversions API (CAPI)'
    ],
    tools: ['Meta Ads Manager', 'Meta Pixel Helper', 'Canva Pro', 'AdSpy'],
    practicalDeliverable: 'End-to-End Meta Ads Campaign with Creative Testing Architecture.'
  },
  {
    id: 'smm-content',
    title: 'Social Media Strategy & AI Visual Creation',
    shortDesc: 'Build organic brand presence, viral Reel frameworks, and AI-powered visual assets.',
    duration: 'Week 11-12',
    iconName: 'Instagram',
    topics: [
      'Content Calendar Creation with Notion & AI',
      'Viral Instagram Reels & LinkedIn Thought Leadership',
      'AI Image Generation (Midjourney & DALL-E 3)',
      'Canva Graphic Design & Video Editing (CapCut)',
      'Community Management & Growth Hacking'
    ],
    tools: ['Midjourney', 'Canva AI', 'CapCut', 'Buffer', 'ChatGPT Vision'],
    practicalDeliverable: '30-Day Social Media Campaign Assets & AI-Generated Brand Kit.'
  },
  {
    id: 'analytics-tracking',
    title: 'Web Analytics, GA4 & Data Storytelling',
    shortDesc: 'Track visitor behavior, build custom analytics dashboards, and calculate marketing ROI.',
    duration: 'Week 13-14',
    iconName: 'BarChart3',
    topics: [
      'Google Analytics 4 (GA4) Custom Events & Conversion Setup',
      'Google Tag Manager (GTM) Container Configuration',
      'Building Live Client Dashboards in Looker Studio',
      'E-commerce Tracking & Attribution Modeling',
      'Data-Driven Campaign Optimization'
    ],
    tools: ['GA4', 'Google Tag Manager', 'Looker Studio', 'Hotjar'],
    practicalDeliverable: 'Interactive Looker Studio Dashboard for Performance Marketing.'
  },
  {
    id: 'ai-automation',
    title: 'AI Marketing Automation & CRM Workflows',
    shortDesc: 'Automate lead scoring, email sequences, WhatsApp chatbots, and cross-platform workflows.',
    duration: 'Week 15-16',
    iconName: 'Zap',
    topics: [
      'Zapier & Make.com Automation Blueprints',
      'WhatsApp API & Chatbot Automation',
      'Email Marketing Automation (HubSpot / Mailchimp)',
      'AI Lead Nurturing & Automated CRM Pipelines',
      'Custom GPTs & Autonomous Marketing Agents'
    ],
    tools: ['Zapier', 'Make.com', 'ManyChat', 'HubSpot', 'Custom GPTs'],
    practicalDeliverable: 'Automated Lead-to-Sale WhatsApp & Email Funnel Setup.'
  }
];

export const AI_WORKFLOW_STEPS: AIWorkflowStep[] = [
  {
    id: 'step-1',
    stepName: 'Research & Insights',
    tagline: 'Deep Market Intelligence',
    aiTools: ['Perplexity AI', 'Claude 3.7'],
    tradMethod: '20+ hours browsing blogs, forums & manual competitor tracking.',
    aiMethod: '15-minute AI analysis summarizing audience pain points & competitor search gaps.',
    speedMultiplier: '10x Faster',
    promptExample: 'Analyze top 5 digital marketing institutes in Delhi. Extract audience pain points regarding placement and batch sizes, then generate a unique positioning matrix.'
  },
  {
    id: 'step-2',
    stepName: 'Content & Copywriting',
    tagline: 'High-Converting Copy',
    aiTools: ['ChatGPT 5', 'Claude 3.7'],
    tradMethod: 'Struggling with writer block; 3 days per ad copy iteration.',
    aiMethod: 'Generate 20 high-converting ad copy angles with PAS/AIDA frameworks in 60 seconds.',
    speedMultiplier: '15x Faster',
    promptExample: 'Write 5 Facebook Ad headlines using the PAS framework targeting Delhi professionals seeking career transition into AI Digital Marketing.'
  },
  {
    id: 'step-3',
    stepName: 'SEO & GEO Strategy',
    tagline: 'Search Engine Dominance',
    aiTools: ['SurferSEO', 'ChatGPT SEO'],
    tradMethod: 'Manual keyword clustering and slow content optimization.',
    aiMethod: 'Instant topic clusters, AI schema generation, and GEO optimization for Perplexity & Google SGE.',
    speedMultiplier: '8x Faster',
    promptExample: 'Generate JSON-LD Course Schema and semantic keyword clusters for Digital Marketing Course in Delhi.'
  },
  {
    id: 'step-4',
    stepName: 'Creative & Visuals',
    tagline: 'Hyper-Realistic Assets',
    aiTools: ['Midjourney v6', 'Canva AI'],
    tradMethod: 'Waiting weeks for graphic designers & stock image downloads.',
    aiMethod: 'Generate studio-grade ad banners & 4K product visuals directly from text prompts.',
    speedMultiplier: '20x Faster',
    promptExample: 'Hyper-realistic dark tech bento preview dashboard for digital marketing agency, vibrant electric orange accents, 8k resolution.'
  },
  {
    id: 'step-5',
    stepName: 'Ad Campaigns',
    tagline: 'Smart Media Buying',
    aiTools: ['Meta AI Ads', 'Google PMax'],
    tradMethod: 'Guesswork targeting & manual bid adjustments.',
    aiMethod: 'AI-driven dynamic creative optimization & automated audience lookalike modeling.',
    speedMultiplier: '5x Higher ROI',
    promptExample: 'Structure a Advantage+ campaign budget strategy for Delhi-NCR target audience.'
  },
  {
    id: 'step-6',
    stepName: 'Automation',
    tagline: '24/7 Hands-Free Ops',
    aiTools: ['Zapier', 'Make.com', 'ManyChat'],
    tradMethod: 'Manually calling leads 4 hours after form submit.',
    aiMethod: 'Instant WhatsApp AI chatbot qualification & automated CRM entry within 3 seconds.',
    speedMultiplier: '100% Automated',
    promptExample: 'Trigger Make.com scenario: New Facebook Lead -> Send WhatsApp Brochure PDF -> Create Lead in CRM.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Student testimonial will be added here.',
    role: 'Performance Marketer',
    company: 'Leading Delhi Growth Agency',
    batch: 'Batch of 2025',
    quote: 'Student testimonial will be added here.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Student testimonial will be added here.',
    role: 'E-Commerce Brand Founder',
    company: 'D2C Skincare Brand',
    batch: 'Batch of 2025',
    quote: 'Student testimonial will be added here.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Student testimonial will be added here.',
    role: 'SEO & AI Content Specialist',
    company: 'Tech Media Publication',
    batch: 'Batch of 2026',
    quote: 'Student testimonial will be added here.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  }
];

export const BENTO_WHY_US = [
  {
    title: 'AI-Integrated Learning',
    description: 'Learn to leverage ChatGPT 5, Midjourney, Claude, and Zapier to automate campaigns and work 10x faster than traditional marketers.',
    tag: '2026 Ready',
    colSpan: 'md:col-span-2',
    icon: 'Cpu',
  },
  {
    title: 'Practical Projects',
    description: 'Work on live ad accounts, real budgets, and actual brand websites—not just theoretical slides.',
    tag: '100% Hands-On',
    colSpan: 'md:col-span-1',
    icon: 'FolderKanban',
  },
  {
    title: 'Modern Curriculum',
    description: 'Updated quarterly to include Generative Engine Optimization (GEO), Meta Advantage+, and AI Chatbot funnels.',
    tag: 'Latest Tech',
    colSpan: 'md:col-span-1',
    icon: 'Sparkles',
  },
  {
    title: 'Small Batch Learning',
    description: 'Strictly limited to 15 students per batch. Maximum personal attention, direct Q&A, and customized mentorship.',
    tag: 'Max 15 Seats',
    colSpan: 'md:col-span-2',
    icon: 'Users',
  },
  {
    title: 'Experienced Trainers',
    description: 'Taught by active agency directors managing ₹10Cr+ in client ad spend across e-commerce, real estate, & SaaS.',
    tag: '10+ Yrs Exp',
    colSpan: 'md:col-span-2',
    icon: 'Award',
  },
  {
    title: 'Career Guidance',
    description: 'Resume building, portfolio setup, mock agency interviews, and direct hiring referrals in Delhi-NCR.',
    tag: 'Job Ready',
    colSpan: 'md:col-span-1',
    icon: 'TrendingUp',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What makes CBM Academy different from traditional coaching centers in Delhi?',
    answer: 'Unlike traditional institutes teaching outdated 2018 marketing theory, CBM Academy is an AI-Integrated Academy. You learn how to use modern AI models (ChatGPT, Midjourney, Claude, Zapier) to execute SEO, paid ads, content creation, and analytics 10x faster. We also cap batches at 15 students for true hands-on guidance.'
  },
  {
    id: 'faq-2',
    category: 'Eligibility',
    question: 'Do I need any prior coding or technical background to join?',
    answer: 'No prior technical or coding experience is required! Our program is designed from scratch, guiding you step-by-step through no-code website building, intuitive AI prompt engineering, and drag-and-drop marketing tools.'
  },
  {
    id: 'faq-3',
    category: 'Curriculum',
    question: 'What AI tools will I learn during the course?',
    answer: 'You will master 15+ industry-standard AI tools including ChatGPT 5, Claude 3.7, Midjourney v6, SurferSEO, Canva AI, Zapier, Make.com, ManyChat, and Google Gemini. You will learn prompt engineering, custom AI agent creation, and automated workflow design.'
  },
  {
    id: 'faq-4',
    category: 'Placement',
    question: 'Does CBM Academy guarantee job placement assistance?',
    answer: 'Yes! We provide 100% Career & Placement Assistance. This includes professional resume engineering, portfolio design with 25+ live project case studies, mock agency technical interviews, and direct hiring referrals to our network of 150+ Delhi-NCR agency partners.'
  },
  {
    id: 'faq-5',
    category: 'Mode',
    question: 'Are classes held Offline in Delhi or Live Online?',
    answer: 'We offer flexible learning modes: Offline Classroom training at our state-of-the-art South Extension center in New Delhi, as well as Live Interactive Online batches with recorded class backups and mentor support.'
  },
  {
    id: 'faq-6',
    category: 'Projects',
    question: 'Will I get to work on real ad campaigns with actual budgets?',
    answer: 'Absolutely. Every student works on real client projects, managing live Google Ads, Meta Ads accounts, and launching a live WordPress store. You graduate with a tangible portfolio link to show potential employers or freelance clients.'
  }
];

export const CAREER_HIGHLIGHTS = [
  {
    title: '100% Placement Assistance',
    desc: 'Dedicated career manager connects you with top agencies, startups, and MNCs in New Delhi, Gurgaon, and Noida.',
    iconName: 'Building2'
  },
  {
    title: 'Resume & LinkedIn Optimization',
    desc: 'Transform your CV into an AI-screened candidate profile that catches agency recruiters attention.',
    iconName: 'FileCheck'
  },
  {
    title: 'Portfolio with 25+ Case Studies',
    desc: 'Showcase live WordPress sites, ad campaign screenshots, GA4 dashboards, and AI content workflows.',
    iconName: 'FolderKanban'
  },
  {
    title: 'Freelance & Agency Setup Masterclass',
    desc: 'Learn how to pitch high-ticket clients, structure monthly retainers, and build a ₹1 Lakh+/month freelance business.',
    iconName: 'DollarSign'
  }
];
