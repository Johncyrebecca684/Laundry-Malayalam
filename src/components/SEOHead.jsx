import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEOHead Component
 * Provides comprehensive SEO meta tags, Open Graph, Twitter Cards,
 * and structured data (JSON-LD Schema.org) for Nammude Laundry.
 *
 * Usage: <SEOHead section="home" />
 */

const BASE_URL = 'https://www.thenammudelaundry.com';
const SITE_NAME = 'Nammude Laundry – Nammude Laundry';
const OG_IMAGE = `${BASE_URL}/favicon.png`;
const PHONE = '+91 9944328471';
const EMAIL = 'contact@nammudelaundry.com';

// â”€â”€ Per-section SEO data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const seoData = {
  home: {
    title: 'Nammude Laundry – Self Income Generating Platform | Nammude Laundry Kerala',
    description:
      'Nammude Laundry is Kerala\'s #1 Self Income Generating Platform powered by LG commercial laundry technology. Start your own laundry business with complete setup, training & support. Nammude Laundry – earn independently today.',
    keywords:
      'self income generating platform, self income generating program Kerala, Nammude Laundry, Nammude Laundry, earn from home Kerala, laundry franchise Kerala, income generating business Kerala, laundry business income, LG laundry franchise, financial independence Kerala, self employment Kerala, laundry startup India',
    canonical: `${BASE_URL}/`,
  },
  about: {
    title: 'About Nammude Laundry – Self Income Generating Platform | Nammude Laundry',
    description:
      'Nammude Laundry is a self income generating platform transforming traditional dhobi skills into profitable laundry businesses. Powered by LG equipment, we create financial independence for families across Kerala.',
    keywords:
      'about self income generating platform, Nammude Laundry story, Nammude Laundry mission, laundry income Kerala, financial independence laundry, dhobi income platform, self employment laundry India',
    canonical: `${BASE_URL}/`,
  },
  vision: {
    title: 'Vision | Nammude Laundry – Self Income Platform for Kerala Communities',
    description:
      'Our vision: a self income generating platform that turns laundry skills into sustainable businesses. Nammude Laundry empowers every individual in Kerala to achieve financial independence through organized laundry entrepreneurship.',
    keywords:
      'self income platform vision, laundry entrepreneurship Kerala, community income platform, financial independence Kerala, self earning program India, organized laundry income',
    canonical: `${BASE_URL}/`,
  },
  whyNammude: {
    title: 'Why Nammude Laundry | Best Self Income Generating Platform in Kerala',
    description:
      'Why choose Nammude Laundry as your self income generating platform? Low investment, complete business support, modern LG machinery, social welfare focus, and proven income opportunity. Start generating income today.',
    keywords:
      'best self income platform Kerala, why Nammude Laundry, low investment income business, self generating income laundry, income opportunity Kerala, laundry franchise benefits',
    canonical: `${BASE_URL}/`,
  },
  training: {
    title: 'Training Program | Nammude Laundry Self Income Generating Platform',
    description:
      'Nammude Laundry\'s self income training program covers 7 modules: laundry machine operation, fabric care, shop management, hygiene, customer service, and profit strategies — all skills to generate steady income.',
    keywords:
      'self income training Kerala, laundry income training, earn from laundry training, skill development income Kerala, laundry business training program, commercial laundry income skills',
    canonical: `${BASE_URL}/`,
  },
  whoCanJoin: {
    title: 'Who Can Join | Nammude Laundry Self Income Generating Platform Kerala',
    description:
      'Nammude Laundry\'s self income generating platform is open to all — dhobi families, homemakers, differently-abled individuals, unemployed youth, and entrepreneurs. No experience needed. Start earning from laundry today.',
    keywords:
      'who can earn from laundry Kerala, self income for homemakers, dhobi income platform, differently abled income opportunity, youth income program Kerala, self employment no experience',
    canonical: `${BASE_URL}/`,
  },
  franchise: {
    title: 'Franchise | Nammude Laundry – Start Your Self Income Generating Business',
    description:
      'Start your self income generating laundry business with Nammude Laundry franchise. Get complete setup, store design, LG equipment, full training, marketing, and ongoing support. Begin earning independently.',
    keywords:
      'self income generating franchise, laundry franchise income Kerala, start income business Kerala, Nammude franchise earning, laundromat income business, LG laundry franchise income',
    canonical: `${BASE_URL}/`,
  },
  csrSupport: {
    title: 'CSR & Government Support | Nammude Laundry Income Platform Kerala',
    description:
      'Get financial assistance for your self income generating laundry business through Nammude Laundry\'s CSR partnerships, bank loans, government self-employment schemes, and skill development programs.',
    keywords:
      'self income government scheme Kerala, CSR income support laundry, government self employment Kerala, bank loan laundry income, skill development income program, financial aid laundry business',
    canonical: `${BASE_URL}/`,
  },
  contact: {
    title: 'Contact Nammude Laundry | Start Your Self Income Journey – Kerala',
    description:
      'Ready to start your self income generating journey with Nammude Laundry? Contact us at +91 9944328471 or contact@nammudelaundry.com. Based in Thiruvananthapuram, Kerala. Begin your income independence today.',
    keywords:
      'contact self income platform Kerala, Nammude Laundry contact, start income business Thiruvananthapuram, Nammude Laundry contact, laundry income inquiry Kerala',
    canonical: `${BASE_URL}/`,
  },
};

// â”€â”€ JSON-LD Structured Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nammude Laundry',
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
  name: 'Nammude Laundry – Nammude Laundry',
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
  name: 'Nammude Laundry Franchise & Business Setup',
  serviceType: 'Laundry Business Setup & Support',
  provider: {
    '@type': 'Organization',
    name: 'Nammude Laundry',
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
      name: 'About Nammude Laundry',
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

// â”€â”€ FAQ Schema — Self Income Generating Platform focused â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Self Income Generating Platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Self Income Generating Platform is a business model that helps individuals earn independently without relying on a traditional job. Nammude Laundry (Nammude Laundry) is Kerala\'s leading Self Income Generating Platform — it provides complete laundry business setup, LG commercial equipment, training, and ongoing support so anyone can start generating their own income through a professional laundry business.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Nammude Laundry a Self Income Generating Platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Nammude Laundry (Nammude Laundry) is a Self Income Generating Platform designed specifically for Kerala. It empowers traditional dhobi families, homemakers, differently-abled individuals, unemployed youth, and aspiring entrepreneurs to build their own laundry business and generate self income with low investment and complete support.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I generate self income through Nammude Laundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can generate self income through Nammude Laundry by joining their laundry franchise program. They provide complete business setup, LG commercial washing machines and dryers, 7-module hands-on training, marketing support, and ongoing mentorship. No prior experience is needed. Contact them at +91 9944328471 to start your self income journey.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Nammude Laundry Self Income Generating Program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Nammude Laundry Self Income Generating Program is a complete laundromat franchise initiative powered by Nammude Laundry. It includes store setup, LG equipment, branding, skill training, digital marketing, and CSR/government financial assistance — enabling anyone in Kerala to run their own laundry business and generate steady self income.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can join the Nammude Laundry Self Income Generating Platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Nammude Laundry Self Income Generating Platform is open to everyone — traditional dhobi families looking to modernize, homemakers seeking financial independence, differently-abled individuals wanting meaningful work, unemployed youth building their first business, and aspiring entrepreneurs. No prior experience or technical knowledge is required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Nammude Laundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nammude Laundry (also known as Nammude Laundry) is Kerala\'s Self Income Generating Platform for laundry businesses. It provides end-to-end franchise support powered by LG commercial laundry technology, enabling individuals to start their own profitable laundry business in Thiruvananthapuram and across Kerala, India.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much investment is needed to start with Nammude Laundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nammude Laundry is designed as a low-investment self income generating platform. Financial assistance is available through CSR programs, government self-employment schemes, and bank loans. Contact Nammude Laundry at +91 9944328471 for specific investment details and available funding options.',
      },
    },
    {
      '@type': 'Question',
      name: 'What equipment does Nammude Laundry provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nammude Laundry provides professional LG commercial equipment: the LG Direct Drive coin-operated washer, LG 10kg commercial dryer, LG Titan 15kg electric dryer, and LG gas dryer — all the machines needed to run a full self-income generating laundry business.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is financial assistance available for Nammude Laundry franchise?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Nammude Laundry partners with corporate CSR programs, banks, government self-employment schemes, and skill development programs to provide financial assistance and training to eligible candidates who want to join the self income generating platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Nammude Laundry located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nammude Laundry (Self Income Generating Platform) is headquartered in Thiruvananthapuram (Trivandrum), Kerala, India — pin code 695001. It serves entrepreneurs across all of Kerala.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I contact Nammude Laundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact Nammude Laundry to start your self income generating journey: Phone/WhatsApp — +91 9944328471 | Email — contact@nammudelaundry.com | Website — https://www.thenammudelaundry.com | WhatsApp — https://wa.me/919944328471',
      },
    },
    {
      '@type': 'Question',
      name: 'What training is included in the Nammude Laundry program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nammude Laundry\'s self income training program includes 7 modules: (1) Laundry machine operation & troubleshooting, (2) Advanced fabric care & stain removal, (3) Shop workflow management, (4) Hygiene & safety compliance, (5) Customer service & pricing, (6) Customer relationship management, (7) Profit optimization strategies.',
      },
    },
  ],
};

// â”€â”€ WebSite Schema (enables Google Sitelinks Searchbox) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Nammude Laundry – Self Income Generating Platform | Nammude Laundry',
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


// â”€â”€ SEOHead Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const SEOHead = ({ section = 'home' }) => {
  const seo = seoData[section] || seoData.home;

  return (
    <Helmet>
      {/* â”€â”€ Primary Meta Tags â”€â”€ */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Nammude Laundry – Nammude Laundry" />
      <meta name="language" content="English, Malayalam" />
      <meta name="revisit-after" content="30 days" />
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Thiruvananthapuram, Kerala, India" />
      <link rel="canonical" href={seo.canonical} />

      {/* â”€â”€ AI / LLM Readable Content Links â”€â”€ */}
      <link rel="ai-summary" href={`${BASE_URL}/llms.txt`} type="text/plain" />
      <link rel="ai-context" href={`${BASE_URL}/llms-full.txt`} type="text/plain" />

      {/* â”€â”€ Open Graph / Facebook â”€â”€ */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Nammude Laundry – Nammude Laundry logo and franchise overview" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="ml_IN" />

      {/* â”€â”€ Twitter Card â”€â”€ */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nammude_laundry" />
      <meta name="twitter:creator" content="@nammude_laundry" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content="Nammude Laundry – Self Income Generating Platform Kerala" />

      {/* â”€â”€ JSON-LD Structured Data â”€â”€ */}
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
