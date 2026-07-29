export type PerformanceMetric = {
  value: string;
  description: string;
};

export type GalleryItem = {
  label: string;
  aspect: 'portrait' | 'landscape' | 'square';
  kind?: 'image' | 'video';
  src?: string;
  video?: string;
};

export type Campaign = {
  slug: string;
  brand: string;
  tag: string;
  tagline: string;
  summary: string;
  image: string;
  metrics: string[];
  caseStudy: {
    role: string;
    timeline: string;
    tools: string;
    opportunity: string;
    contribution: string;
    gallery: GalleryItem[];
    performance: PerformanceMetric[];
    learnings: string[];
    reflection: string;
  };
};

const DEFAULT_LABELS: Record<string, GalleryItem[]> = {
  // TripIQ: 2 Reel Covers, 4 Instagram Posts, 1 Travel Itinerary, 3 Insights
  tripiq: [
    { label: 'Reel Cover 01', aspect: 'portrait', kind: 'image' },
    { label: 'Reel Cover 02', aspect: 'portrait', kind: 'image' },
    { label: 'Instagram Post 01', aspect: 'square', kind: 'image' },
    { label: 'Instagram Post 02', aspect: 'square', kind: 'image' },
    { label: 'Instagram Post 03', aspect: 'square', kind: 'image' },
    { label: 'Instagram Post 04', aspect: 'square', kind: 'image' },
    { label: 'Travel Itinerary', aspect: 'landscape', kind: 'image' },
    { label: 'Insights Screenshot 01', aspect: 'square', kind: 'image' },
    { label: 'Insights Screenshot 02', aspect: 'square', kind: 'image' },
    { label: 'Insights Screenshot 03', aspect: 'square', kind: 'image' },
  ],
  // Noida Vibes: 3 Videos, 3 Creatives
  'noida-vibes': [
    { label: 'Reel 01', aspect: 'portrait', kind: 'video' },
    { label: 'Reel 02', aspect: 'portrait', kind: 'video' },
    { label: 'Reel 03', aspect: 'portrait', kind: 'video' },
    { label: 'Creative 01', aspect: 'square', kind: 'image' },
    { label: 'Creative 02', aspect: 'square', kind: 'image' },
    { label: 'Creative 03', aspect: 'square', kind: 'image' },
  ],
  // AS Marketing: 4 Videos, 3 Creatives, 1 Presentation
  'as-marketing': [
    { label: 'Video 01', aspect: 'landscape', kind: 'video' },
    { label: 'Video 02', aspect: 'portrait', kind: 'video' },
    { label: 'Video 03', aspect: 'portrait', kind: 'video' },
    { label: 'Video 04', aspect: 'landscape', kind: 'video' },
    { label: 'Creative 01', aspect: 'portrait', kind: 'image' },
    { label: 'Creative 02', aspect: 'landscape', kind: 'image' },
    { label: 'Creative 03', aspect: 'portrait', kind: 'image' },
    { label: 'Presentation Design', aspect: 'landscape', kind: 'image' },
  ],
  // Freelance: 6 Videos
  freelance: [
    { label: 'Reel 01', aspect: 'landscape', kind: 'video' },
    { label: 'Reel 02', aspect: 'portrait', kind: 'video' },
    { label: 'Reel 03', aspect: 'landscape', kind: 'video' },
    { label: 'Reel 04', aspect: 'landscape', kind: 'video' },
    { label: 'Reel 05', aspect: 'landscape', kind: 'video' },
    { label: 'Reel 06', aspect: 'portrait', kind: 'video' },
  ],
};

const buildGallery = (slug: string): GalleryItem[] => DEFAULT_LABELS[slug] ?? [];

export const CAMPAIGNS: Campaign[] = [
  {
    slug: 'tripiq',
    brand: 'TripIQ',
    tag: 'Travel Company',
    tagline: 'Building a travel brand through content, design & community',
    summary:
      'Managed Instagram content, designed creatives, edited reels, planned content calendars, analysed performance and supported creator collaborations.',
    image:
      'https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: [
      'Managed TripIQ Instagram',
      '150+ creatives',
      'High-performing social content',
      'Weekly performance analysis',
    ],
    caseStudy: {
      role: 'Marketing Designer • Content Strategist • Community Management',
      timeline: '6 Months',
      tools: 'Canva • CapCut • Filmora • ChatGPT • Meta Insights',
      opportunity:
        'TripIQ is a growing travel brand that needed a consistent social media presence to attract travelers, build trust, and create engaging content that encouraged users to explore destinations and plan their trips.',
      contribution:
        'I managed TripIQ\'s complete content workflow, including planning monthly content calendars, designing social media creatives, editing reels, analysing content performance, responding to customer queries, supporting lead conversions, and collaborating with creators to strengthen the brand\'s online presence.',
      gallery: buildGallery('tripiq'),
      performance: [
        { value: '1', description: 'Instagram account managed' },
        { value: '150+', description: 'Creatives designed' },
        { value: '50+', description: 'Reels & short-form videos edited' },
        { value: 'Weekly', description: 'Content planning & performance analysis' },
      ],
      learnings: [
        'Valuable travel content outperformed promotional content.',
        'Consistency built stronger audience trust than frequent posting.',
        'Data-driven decisions improved content planning.',
        'Community engagement was as important as creative quality.',
      ],
      reflection:
        'This project taught me that content strategy is not about posting more — it is about posting with intent. Every creative needed a purpose, whether to inform, inspire, or drive saves. The data confirmed that consistency and curiosity win over volume.',
    },
  },
  {
    slug: 'noida-vibes',
    brand: 'Noida Vibes + Best of Delhi NCR',
    tag: 'City Discovery',
    tagline: 'Growing a local community through relatable content',
    summary:
      'Managed content across two local discovery Instagram pages, creating engaging posts and reels designed to increase reach, community engagement and content performance.',
    image:
      'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: [
      'Managed 2 Instagram pages',
      'Content Planning',
      'Social Media Management',
      'Performance Tracking',
    ],
    caseStudy: {
      role: 'Marketing Designer • Content Creator',
      timeline: '4 Months',
      tools: 'Canva • CapCut • Filmora • Meta Insights',
      opportunity:
        'Noida Vibes and Best of Delhi NCR aimed to build local communities by showcasing places, food, events, and experiences in a way that felt authentic, relatable, and worth sharing.',
      contribution:
        'I handled the complete content lifecycle, including researching ideas, planning content, designing posts, editing reels, publishing content, analysing insights, and coordinating creator collaborations to increase local engagement.',
      gallery: buildGallery('noida-vibes'),
      performance: [
        { value: '2', description: 'Instagram accounts managed' },
        { value: 'Consistent', description: 'Content publishing' },
        { value: 'Growing', description: 'Community engagement' },
        { value: 'Improved', description: 'Content performance through insights' },
      ],
      learnings: [
        'Hyperlocal content generated stronger engagement.',
        'Short-form videos consistently reached larger audiences.',
        'Community-focused storytelling encouraged more shares.',
        'Trends worked best when adapted to the brand\'s identity.',
      ],
      reflection:
        'This project taught me that people connect with content that reflects their own experiences. Building local communities wasn\'t about posting more. It was about creating content people genuinely wanted to save, share, and engage with.',
    },
  },
  {
    slug: 'as-marketing',
    brand: 'AS Marketing',
    tag: 'Agency Experience',
    tagline: 'Designing across brands at agency speed',
    summary:
      'Worked with multiple client brands designing social media creatives and editing short-form videos inside a digital marketing agency.',
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: ['Multiple industries', 'Social creatives', 'Video editing'],
    caseStudy: {
      role: 'Marketing Designer • Video Editor',
      timeline: '8 Months',
      tools: 'Canva • Figma • Premiere Pro • After Effects • ChatGPT',
      opportunity:
        'AS Marketing managed clients across multiple industries, each with different brand identities, audiences, and creative requirements. Every project demanded high-quality execution within tight agency timelines.',
      contribution:
        'I designed social media creatives, presentations, and marketing assets while editing promotional videos for multiple client brands. I collaborated with the creative team to deliver consistent visual communication that aligned with each client\'s objectives.',
      gallery: buildGallery('as-marketing'),
      performance: [
        { value: 'Multiple', description: 'Industries served' },
        { value: 'Fast-paced', description: 'Agency workflow' },
        { value: 'Consistent', description: 'Creative delivery' },
        { value: 'Adaptable', description: 'Across diverse brand styles' },
      ],
      learnings: [
        'Strong design systems improve consistency and efficiency.',
        'Understanding a brand\'s voice is as important as visual design.',
        'Collaboration leads to better creative outcomes.',
        'Meeting deadlines is essential in agency environments.',
      ],
      reflection:
        'Agency experience strengthened my adaptability. Working across different industries challenged me to switch between brand identities quickly while maintaining quality, creativity, and consistency under tight deadlines.',
    },
  },
  {
    slug: 'freelance',
    brand: 'Independent Client Projects',
    tag: 'Independent Projects',
    tagline: 'Helping small businesses build a stronger visual identity',
    summary:
      'Worked with creators and small businesses designing presentations, reel covers and social media assets.',
    image:
      'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: ['Multiple clients', 'Creative direction', 'Fast delivery'],
    caseStudy: {
      role: 'Freelance Marketing Designer',
      timeline: 'Ongoing',
      tools: 'Canva • Figma • CapCut • Filmora • ChatGPT',
      opportunity:
        'Freelancing allowed me to explore different industries, collaborate directly with clients, and strengthen my skills through real-world creative projects alongside my studies.',
      contribution:
        'I worked directly with clients to design social media creatives, presentations, promotional assets, and short-form videos. From understanding requirements to delivering final creatives, I managed each project independently while maintaining clear communication throughout the process.',
      gallery: buildGallery('freelance'),
      performance: [
        { value: 'Multiple', description: 'Client projects delivered' },
        { value: 'End-to-end', description: 'Project ownership' },
        { value: 'Strong', description: 'Client communication' },
        { value: 'Repeat', description: 'Client collaborations' },
      ],
      learnings: [
        'Great design starts with understanding client goals.',
        'Clear communication builds long-term client relationships.',
        'Reliable delivery is just as valuable as creative execution.',
        'Every project requires balancing creativity with practicality.',
      ],
      reflection:
        'Freelancing taught me ownership. Managing projects independently meant being responsible for every stage, from understanding the client\'s needs to delivering polished work on time. It strengthened my confidence, communication skills, and ability to solve creative problems independently.',
    },
  },
];
