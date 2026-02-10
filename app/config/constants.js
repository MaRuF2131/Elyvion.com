// Constants and configuration
export const SITE_CONFIG = {
  name: 'Elyvion',
  title: 'Elyvion - Your Gateway to Earning Freedom',
  description:
    'Experience curated shopping made simple, secure, and seamless. Elyvion brings together creative excellence and performance-driven results.',
  url: 'https://elyvion-global.site',
  ogImage: '/logo/logo.png',
};

export const NAVIGATION = {
  header: [
    { name: 'Member Level', href: '/member-level', icon: 'badge' },
    { name: 'Help', href: '/help', icon: 'help' },
    { name: 'Customer Service', href: '/customer-service', icon: 'headset' },
  ],
  bottom: [
    { name: 'Home', href: '/', icon: 'home' },
    { name: 'Services', href: '/services', icon: 'services' },
    { name: 'Campaign', href: '/campaign', icon: 'campaign' },
    { name: 'History', href: '/history', icon: 'history' },
    { name: 'Account', href: '/account', icon: 'account' },
  ],
};

export const SERVICES = [
  {
    id: 'influencer',
    title: 'Influencer',
    description:
      'We deliver brand awareness and direct-response Influencer & Creator campaigns',
    icon: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="64" height="64" rx="12" fill="black"/><g stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="24" r="5"/><path d="M22 46V42C22 38.6863 24.6863 36 28 36H36C39.3137 36 42 38.6863 42 42V46"/><circle cx="18" cy="26" r="4"/><path d="M12 46V43C12 40.7909 13.7909 39 16 39H18"/><circle cx="46" cy="26" r="4"/><path d="M52 46V43C52 40.7909 50.2091 39 48 39H46"/></g></svg>`,
    features: [
      'End-to-end Campaign Management',
      'Brand Awareness and Direct-Response Objectives',
      'Content Creators for UGC Content',
      'Wrap Reports and Analysis',
    ],
  },
  {
    id: 'social',
    title: 'Social',
    description:
      'We grow cult-like social communities with platform-specific social strategies',
    icon: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="64" height="64" rx="12" fill="black"/><g stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="14" width="24" height="36" rx="3"/><line x1="28" y1="18" x2="36" y2="18"/><line x1="30" y1="44" x2="34" y2="44"/></g></svg>`,
    features: [
      'Social Strategy',
      'Channel and Community Management',
      'Social-first Content Creation',
      'Social Listening & Insights',
    ],
  },
  {
    id: 'paid',
    title: 'Paid',
    description:
      'We deliver performance-driven Paid Social and Paid Search campaigns',
    icon: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="64" height="64" rx="12" fill="black"/><g stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M42 22C46.4183 22 50 20.6569 50 19C50 17.3431 46.4183 16 42 16C37.5817 16 34 17.3431 34 19"/><path d="M50 19V31"/><ellipse cx="28" cy="24" rx="14" ry="5"/><path d="M14 24V40C14 42.7614 20.268 45 28 45C35.732 45 42 42.7614 42 40V24"/><path d="M14 32C14 34.7614 20.268 37 28 37C35.732 37 42 34.7614 42 32"/><path d="M28 29V40"/><path d="M26 31.5H28.5C29.8807 31.5 31 32.6193 31 34C31 35.3807 29.8807 36.5 28.5 36.5H27.5C26.1193 36.5 25 37.6193 25 39C25 40.3807 26.1193 41.5 27.5 41.5H30"/></g></svg>`,
    features: [
      'Paid Social & Paid Search',
      'Full-Funnel Media Strategy',
      'Planning, Buying, Creative, Analytics, Testing and more.',
      'Feed Optimisation & Shopping',
    ],
  },
  {
    id: 'creative',
    title: 'Creative',
    description:
      'Delivering outstanding Creative across Video, Design and Motion',
    icon: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="64" height="64" rx="12" fill="black"/><g stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="18" y="14" width="28" height="36" rx="2"/><line x1="18" y1="26" x2="46" y2="26"/><line x1="18" y1="38" x2="46" y2="38"/><line x1="26" y1="14" x2="26" y2="50"/><line x1="38" y1="14" x2="38" y2="50"/><line x1="22" y1="20" x2="22.01" y2="20" stroke-width="3"/><line x1="22" y1="32" x2="22.01" y2="32" stroke-width="3"/><line x1="22" y1="44" x2="22.01" y2="44" stroke-width="3"/><line x1="42" y1="20" x2="42.01" y2="20" stroke-width="3"/><line x1="42" y1="32" x2="42.01" y2="32" stroke-width="3"/><line x1="42" y1="44" x2="42.01" y2="44" stroke-width="3"/></g></svg>`,
    features: [
      'Organic & Paid Social Video',
      'UGC to High-Production',
      'Creative Strategy, Art Direction & Campaigns',
      'Motion Design, Animation and Graphics',
    ],
  },
];

export const AWARDS = [
  'Best Large Social Agency (2023, 2024)',
  'Best Direct Response Campaign',
  'Best Integrated Paid Media Campaign',
  'Best Use of Facebook & Instagram Ads',
];

export const BRANDS = [
  { name: 'Lumene', logo: '/brands/company1.png' },
  { name: 'Neptune', logo: '/brands/Easyjet-Holidays-Ciyzil3W.png' },
  { name: 'Verylazy', logo: '/brands/Lumene-Logo-Bo_hRYRn.png' },
  { name: 'Passenger', logo: '/brands/Neptune-logo-Cbk0LK7l.jpg' },
  {
    name: 'Premier Inn',
    logo: '/brands/NEW-Very-Lazy-logos_black-DLr25dWp.png',
  },
  {
    name: 'Uniqlo',
    logo: '/brands/Passenger-Logo-Rectangle-Outline-Box-V2-Black-CAfMuM_n.png',
  },
  { name: 'Acai', logo: '/brands/Premier-Inn-D26Ark0T.png' },
  { name: 'HJ Crimes', logo: '/brands/UNIQLO_logo-C0xzmNex.png' },
  { name: 'Arla', logo: '/brands/Untitled-design-24-DLjQVW1W.png' },
  { name: 'Arla', logo: '/brands/company1.png' },
];
