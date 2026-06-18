import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEOHead Component
 * Provides comprehensive SEO meta tags, Open Graph, Twitter Cards,
 * and structured data (JSON-LD Schema.org) for Salavai Laundry.
 *
 * Usage: <SEOHead section="home" />
 */

const BASE_URL = 'https://www.thesalavailaundry.com';
const SITE_NAME = 'Salavai Laundry – Nammude Laundry';
const OG_IMAGE = `${BASE_URL}/favicon.png`;
const PHONE = '+91 9944328471';
const EMAIL = 'contact@nammudelaundry.com';

// ── Per-section SEO data ─────────────────────────────────────────────────────
const seoData = {
  home: {
    title: 'Salavai Laundry – Self Income Generating Platform | Nammude Laundry Kerala',
    description:
      'Salavai Laundry is Kerala\'s #1 Self Income Generating Platform powered by LG commercial laundry technology. Start your own laundry business with complete setup, training & support. Nammude Laundry – earn independently today.',
    keywords:
      'self income generating platform, self income generating program Kerala, Salavai Laundry, Nammude Laundry, earn from home Kerala, laundry franchise Kerala, income generating business Kerala, laundry business income, LG laundry franchise, financial independence Kerala, self employment Kerala, laundry startup India',
    canonical: `${BASE_URL}/`,
  },
  about: {
    title: 'About Salavai Laundry – Self Income Generating Platform | Nammude Laundry',
    description:
      'Salavai Laundry is a self income generating platform transforming traditional dhobi skills into profitable laundry businesses. Powered by LG equipment, we create financial independence for families across Kerala.',
    keywords:
      'about self income generating platform, Salavai Laundry story, Nammude Laundry mission, laundry income Kerala, financial independence laundry, dhobi income platform, self employment laundry India',
    canonical: `${BASE_URL}/#about`,
  },
  vision: {
    title: 'Vision | Salavai Laundry – Self Income Platform for Kerala Communities',
    description:
      'Our vision: a self income generating platform that turns laundry skills into sustainable businesses. Salavai Laundry empowers every individual in Kerala to achieve financial independence through organized laundry entrepreneurship.',
    keywords:
      'self income platform vision, laundry entrepreneurship Kerala, community income platform, financial independence Kerala, self earning program India, organized laundry income',
    canonical: `${BASE_URL}/#vision`,
  },
  whySalavai: {
    title: 'Why Salavai Laundry | Best Self Income Generating Platform in Kerala',
    description:
      'Why choose Salavai Laundry as your self income generating platform? Low investment, complete business support, modern LG machinery, social welfare focus, and proven income opportunity. Start generating income today.',
    keywords:
      'best self income platform Kerala, why Salavai Laundry, low investment income business, self generating income laundry, income opportunity Kerala, laundry franchise benefits',
    canonical: `${BASE_URL}/#why-salavai`,
  },
  training: {
    title: 'Training Program | Salavai Laundry Self Income Generating Platform',
    description:
      'Salavai Laundry\'s self income training program covers 7 modules: laundry machine operation, fabric care, shop management, hygiene, customer service, and profit strategies — all skills to generate steady income.',
    keywords:
      'self income training Kerala, laundry income training, earn from laundry training, skill development income Kerala, laundry business training program, commercial laundry income skills',
    canonical: `${BASE_URL}/#training`,
  },
  whoCanJoin: {
    title: 'Who Can Join | Salavai Laundry Self Income Generating Platform Kerala',
    description:
      'Salavai Laundry\'s self income generating platform is open to all — dhobi families, homemakers, differently-abled individuals, unemployed youth, and entrepreneurs. No experience needed. Start earning from laundry today.',
    keywords:
      'who can earn from laundry Kerala, self income for homemakers, dhobi income platform, differently abled income opportunity, youth income program Kerala, self employment no experience',
    canonical: `${BASE_URL}/#who-can-join`,
  },
  franchise: {
    title: 'Franchise | Salavai Laundry – Start Your Self Income Generating Business',
    description:
      'Start your self income generating laundry business with Salavai Laundry franchise. Get complete setup, store design, LG equipment, full training, marketing, and ongoing support. Begin earning independently.',
    keywords:
      'self income generating franchise, laundry franchise income Kerala, start income business Kerala, Salavai franchise earning, laundromat income business, LG laundry franchise income',
    canonical: `${BASE_URL}/#franchise`,
  },
  csrSupport: {
    title: 'CSR & Government Support | Salavai Laundry Income Platform Kerala',
    description:
      'Get financial assistance for your self income generating laundry business through Salavai Laundry\'s CSR partnerships, bank loans, government self-employment schemes, and skill development programs.',
    keywords:
      'self income government scheme Kerala, CSR income support laundry, government self employment Kerala, bank loan laundry income, skill development income program, financial aid laundry business',
    canonical: `${BASE_URL}/#csr-support`,
  },
  contact: {
    title: 'Contact Salavai Laundry | Start Your Self Income Journey – Kerala',
    description:
      'Ready to start your self income generating journey with Salavai Laundry? Contact us at +91 9944328471 or contact@nammudelaundry.com. Based in Thiruvananthapuram, Kerala. Begin your income independence today.',
    keywords:
      'contact self income platform Kerala, Salavai Laundry contact, start income business Thiruvananthapuram, Nammude Laundry contact, laundry income inquiry Kerala',
    canonical: `${BASE_URL}/#contact`,
  },
};

// ── JSON-LD Structured Data ──────────────────────────────────────────────────

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Salavai Laundry',
  alternateName: 'Nammude Laundry',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE,
    contactType: 'customer service',
    email: EMAIL,
    areaServed: 'IN',
    availableLanguage: ['English', 'Malayalam'],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61587104255575',
    'https://www.instagram.com/nammude_laundry/',
    'https://www.linkedin.com/company/nammude-laundry',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Thiruvananthapuram',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BASE_URL,
  name: 'Salavai Laundry – Nammude Laundry',
  description:
    'Laundry business setup & support service in Kerala, India. A Self Income Generating Platform empowering traditional dhobis, homemakers, and entrepreneurs with LG commercial laundry technology.',
  url: BASE_URL,
  telephone: PHONE,
  email: EMAIL,
  image: `${BASE_URL}/favicon.png`,
  logo: `${BASE_URL}/favicon.png`,
  priceRange: '₹₹',
  servesCuisine: null,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Thiruvananthapuram',
    addressLocality: 'Thiruvananthapuram',
    addressRegion: 'Kerala',
    postalCode: '695001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 8.5241,
    longitude: 76.9366,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61587104255575',
    'https://www.instagram.com/nammude_laundry/',
    'https://www.linkedin.com/company/nammude-laundry',
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Salavai Laundry Franchise & Business Setup',
  serviceType: 'Laundry Business Setup & Support',
  provider: {
    '@type': 'Organization',
    name: 'Salavai Laundry',
    url: BASE_URL,
  },
  description:
    'Complete laundry franchise setup including store design, branding, LG commercial equipment, full staff training, marketing support, digital marketing, and ongoing business guidance.',
  areaServed: {
    '@type': 'State',
    name: 'Kerala',
    addressCountry: 'IN',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Laundry Franchise Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Complete Business Setup',
          description: 'End-to-end laundry business setup including store design and branding',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'LG Commercial Equipment Supply',
          description: 'Professional LG washers and dryers for commercial laundry operations',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Training & Skill Development',
          description: 'Comprehensive hands-on training in laundry operations, fabric care, and business management',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marketing & Digital Support',
          description: 'Complete marketing support including digital marketing for laundry franchise owners',
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: BASE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About Salavai Laundry',
      item: `${BASE_URL}/#about`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Franchise Opportunity',
      item: `${BASE_URL}/#franchise`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Training Programs',
      item: `${BASE_URL}/#training`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Contact Us',
      item: `${BASE_URL}/#contact`,
    },
  ],
};

// ── FAQ Schema — Self Income Generating Platform focused ─────────────────────

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Self Income Generating Platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Self Income Generating Platform is a business model that helps individuals earn independently without relying on a traditional job. Salavai Laundry (Nammude Laundry) is Kerala\'s leading Self Income Generating Platform — it provides complete laundry business setup, LG commercial equipment, training, and ongoing support so anyone can start generating their own income through a professional laundry business.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Salavai Laundry a Self Income Generating Platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Salavai Laundry (Nammude Laundry) is a Self Income Generating Platform designed specifically for Kerala. It empowers traditional dhobi families, homemakers, differently-abled individuals, unemployed youth, and aspiring entrepreneurs to build their own laundry business and generate self income with low investment and complete support.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I generate self income through Salavai Laundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can generate self income through Salavai Laundry by joining their laundry franchise program. They provide complete business setup, LG commercial washing machines and dryers, 7-module hands-on training, marketing support, and ongoing mentorship. No prior experience is needed. Contact them at +91 9944328471 to start your self income journey.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Nammude Laundry Self Income Generating Program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Nammude Laundry Self Income Generating Program is a complete laundromat franchise initiative powered by Salavai Laundry. It includes store setup, LG equipment, branding, skill training, digital marketing, and CSR/government financial assistance — enabling anyone in Kerala to run their own laundry business and generate steady self income.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can join the Salavai Laundry Self Income Generating Platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Salavai Laundry Self Income Generating Platform is open to everyone — traditional dhobi families looking to modernize, homemakers seeking financial independence, differently-abled individuals wanting meaningful work, unemployed youth building their first business, and aspiring entrepreneurs. No prior experience or technical knowledge is required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Salavai Laundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salavai Laundry (also known as Nammude Laundry) is Kerala\'s Self Income Generating Platform for laundry businesses. It provides end-to-end franchise support powered by LG commercial laundry technology, enabling individuals to start their own profitable laundry business in Thiruvananthapuram and across Kerala, India.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much investment is needed to start with Salavai Laundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salavai Laundry is designed as a low-investment self income generating platform. Financial assistance is available through CSR programs, government self-employment schemes, and bank loans. Contact Salavai Laundry at +91 9944328471 for specific investment details and available funding options.',
      },
    },
    {
      '@type': 'Question',
      name: 'What equipment does Salavai Laundry provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salavai Laundry provides professional LG commercial equipment: the LG Direct Drive coin-operated washer, LG 10kg commercial dryer, LG Titan 15kg electric dryer, and LG gas dryer — all the machines needed to run a full self-income generating laundry business.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is financial assistance available for Salavai Laundry franchise?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Salavai Laundry partners with corporate CSR programs, banks, government self-employment schemes, and skill development programs to provide financial assistance and training to eligible candidates who want to join the self income generating platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Salavai Laundry located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salavai Laundry (Self Income Generating Platform) is headquartered in Thiruvananthapuram (Trivandrum), Kerala, India — pin code 695001. It serves entrepreneurs across all of Kerala.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I contact Salavai Laundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact Salavai Laundry to start your self income generating journey: Phone/WhatsApp — +91 9944328471 | Email — contact@nammudelaundry.com | Website — https://www.thesalavailaundry.com | WhatsApp — https://wa.me/919944328471',
      },
    },
    {
      '@type': 'Question',
      name: 'What training is included in the Salavai Laundry program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salavai Laundry\'s self income training program includes 7 modules: (1) Laundry machine operation & troubleshooting, (2) Advanced fabric care & stain removal, (3) Shop workflow management, (4) Hygiene & safety compliance, (5) Customer service & pricing, (6) Customer relationship management, (7) Profit optimization strategies.',
      },
    },
  ],
};

// ── WebSite Schema (enables Google Sitelinks Searchbox) ─────────────────────

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Salavai Laundry – Self Income Generating Platform | Nammude Laundry',
  url: BASE_URL,
  description: 'Kerala\'s Self Income Generating Platform for laundry businesses. Start earning independently with complete setup, LG equipment, training & support.',
  inLanguage: ['en-IN', 'ml-IN'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};


// ── SEOHead Component ────────────────────────────────────────────────────────

const SEOHead = ({ section = 'home' }) => {
  const seo = seoData[section] || seoData.home;

  return (
    <Helmet>
      {/* ── Primary Meta Tags ── */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Salavai Laundry – Nammude Laundry" />
      <meta name="language" content="English, Malayalam" />
      <meta name="revisit-after" content="30 days" />
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Thiruvananthapuram, Kerala, India" />
      <link rel="canonical" href={seo.canonical} />

      {/* ── AI / LLM Readable Content Links ── */}
      <link rel="ai-summary" href={`${BASE_URL}/llms.txt`} type="text/plain" />
      <link rel="ai-context" href={`${BASE_URL}/llms-full.txt`} type="text/plain" />

      {/* ── Open Graph / Facebook ── */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Salavai Laundry – Nammude Laundry logo and franchise overview" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="ml_IN" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nammude_laundry" />
      <meta name="twitter:creator" content="@nammude_laundry" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content="Salavai Laundry – Self Income Generating Platform Kerala" />

      {/* ── JSON-LD Structured Data ── */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
