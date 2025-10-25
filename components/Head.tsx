import Head from "next/head";

export default function Header() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>
        Christian Onyeka - Market Analyst, Forex Trader & AutoTips Podcast Host
      </title>
      <meta
        name="title"
        content="Christian Onyeka - Market Analyst, Forex Trader & AutoTips Podcast Host"
      />
      <meta
        name="description"
        content="Christian Onyeka is a seasoned market analyst and Forex trader with 8+ years of experience. Host of AutoTips Podcast, field care supervisor, and SEO specialist offering trading insights and investment strategies."
      />
      <meta
        name="keywords"
        content="Christian Onyeka, Forex trader, market analyst, AutoTips Podcast, trading strategies, investment tips, financial education, forex trading, market analysis, derivatives trading, SEO specialist, healthcare supervisor, content creator"
      />
      <meta name="author" content="Christian Onyeka" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://christianonyeka.com/" />
      <meta
        property="og:title"
        content="Christian Onyeka - Market Analyst, Forex Trader & AutoTips Podcast Host"
      />
      <meta
        property="og:description"
        content="Expert market analyst with 8+ years in Forex trading. Host of AutoTips Podcast sharing trading insights with 50K+ global audience. Specializing in derivatives, risk management, and financial education."
      />
      <meta
        property="og:image"
        content="https://christianonyeka.com/og-image.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Christian Onyeka Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://christianonyeka.com/" />
      <meta
        name="twitter:title"
        content="Christian Onyeka - Market Analyst, Forex Trader & AutoTips Podcast Host"
      />
      <meta
        name="twitter:description"
        content="Expert market analyst with 8+ years in Forex trading. Host of AutoTips Podcast sharing trading insights with 50K+ global audience."
      />
      <meta
        name="twitter:image"
        content="https://christianonyeka.com/twitter-image.jpg"
      />
      <meta name="twitter:creator" content="@christianonyeka" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#10b981" />
      <meta name="format-detection" content="telephone=no" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://christianonyeka.com/" />

      {/* Alternate Languages (if applicable) */}
      <link rel="alternate" hrefLang="en" href="https://christianonyeka.com/" />

      {/* Schema.org Structured Data for Person */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Christian Onyeka",
          url: "https://christianonyeka.com",
          image: "https://christianonyeka.com/profile-image.jpg",
          jobTitle: "Market Analyst and Forex Trader",
          description:
            "Seasoned market analyst and Forex trader with nearly eight years of experience in market analysis and trading.",
          knowsAbout: [
            "Forex Trading",
            "Market Analysis",
            "Derivatives Trading",
            "Investment Strategies",
            "Risk Management",
            "Financial Education",
            "SEO",
            "Healthcare Management",
          ],
          sameAs: [
            "https://linkedin.com/in/christianonyeka",
            "https://twitter.com/christianonyeka",
            "https://instagram.com/christianonyeka",
          ],
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "Financial Markets",
          },
        })}
      </script>

      {/* Schema.org Structured Data for PodcastSeries */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PodcastSeries",
          name: "AutoTips Podcast",
          description:
            "In-depth trading insights and investment strategies for traders worldwide",
          url: "https://christianonyeka.com/podcast",
          author: {
            "@type": "Person",
            name: "Christian Onyeka",
          },
          genre: ["Finance", "Investment", "Education"],
          inLanguage: "en",
        })}
      </script>

      {/* Schema.org Structured Data for ProfessionalService */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Christian Onyeka - Market Analysis & Trading",
          image: "https://christianonyeka.com/service-image.jpg",
          url: "https://christianonyeka.com",
          telephone: "+1-XXX-XXX-XXXX",
          priceRange: "$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Global",
            addressCountry: "Worldwide",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "0",
            longitude: "0",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
          },
          sameAs: [
            "https://linkedin.com/in/christianonyeka",
            "https://twitter.com/christianonyeka",
          ],
        })}
      </script>

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Favicon and App Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}
