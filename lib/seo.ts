import type { Metadata } from "next"

export const siteConfig = {
  name: "Swami Vivekananda Govt. College, Dalauda",
  shortName: "SVGC Dalauda",
  description:
    "Official website of Swami Vivekananda Government College, Dalauda — a premier government institution in Mandsaur district, Madhya Pradesh, offering undergraduate and postgraduate programmes in Arts, Science, and Commerce.",
  url: "https://www.svgcdalauda.in",
  ogImage: "https://www.svgcdalauda.in/og.png",
  creator: "@svgcdalauda",
  locale: "en_IN", 

  keywords: [
    "Swami Vivekananda Government College Dalauda",
    "SVGC Dalauda",
    "government college Dalauda",
    "college Mandsaur district",
    "Madhya Pradesh government college",
    "BA BSc BCom Dalauda",
    "higher education Mandsaur",
    "MP college admission",
    "सरकारी महाविद्यालय दलौदा",
    "स्वामी विवेकानंद महाविद्यालय",
  ],

  links: {
    website:   "https://www.svgcdalauda.in",
    facebook:  "https://www.facebook.com/svgcdalauda",
    twitter:   "https://twitter.com/svgcdalauda",
    instagram: "https://www.instagram.com/svgcdalauda",
  },

  address: {
    city:        "Dalauda",
    district:    "Mandsaur",
    state:       "Madhya Pradesh",
    country:     "India",
    pin:         "458667",
  },

  contact: {
    email: "govtcollegedaloda@gmail.com",
    phone: "7422299699",
  },

  org: {
    type:        "CollegeOrUniversity" as const, 
    founded:     "2018",
    affiliation: "Vikram University, Ujjain",
  },
}

export type SiteConfig = typeof siteConfig

// ─── Per-page metadata ────────────────────────────────────────────────────────

type MetadataProps = {
  title?:       string
  description?: string
  image?:       string
  path?:        string
  noIndex?:     boolean
}

export function createMetadata({
  title,
  description,
  image,
  path,
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const metaTitle       = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const metaDescription = description ?? siteConfig.description
  const metaImage       = image ?? siteConfig.ogImage
  const url             = `${siteConfig.url}${path ?? ""}`

  return {
    metadataBase: new URL(siteConfig.url),

    title:       metaTitle,
    description: metaDescription,
    keywords:    siteConfig.keywords,
    authors:     [{ name: siteConfig.name, url: siteConfig.url }],
    creator:     siteConfig.creator,
    applicationName: siteConfig.shortName,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:       metaTitle,
      description: metaDescription,
      url,
      siteName:    siteConfig.name,
      locale:      siteConfig.locale, // en_IN not en_US
      type:        "website",
      images: [{
        url:    metaImage,
        width:  1200,
        height: 630,
        alt:    metaTitle,
      }],
    },

    twitter: {
      card:        "summary_large_image",
      title:       metaTitle,
      description: metaDescription,
      images:      [metaImage],
      creator:     siteConfig.creator,
    },

    robots: {
      index:  !noIndex,
      follow: !noIndex,
      googleBot: {
        index:               !noIndex,
        follow:              !noIndex,
        "max-image-preview": "large",
        "max-snippet":       -1,
      },
    },

    icons: {
      icon:     "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple:    "/apple-touch-icon.png",
    },

    manifest: "/site.webmanifest",

    verification: {
      // google: "your-google-search-console-token",
    },

    other: {
      "geo.region":    "IN-MP",
      "geo.placename": `${siteConfig.address.city}, ${siteConfig.address.district}`,
    },
  }
}

export const organizationJsonLd = {
  "@context":   "https://schema.org",
  "@type":      siteConfig.org.type,
  name:         siteConfig.name,
  url:          siteConfig.url,
  logo:         `${siteConfig.url}/logo.png`,
  image:        siteConfig.ogImage,
  description:  siteConfig.description,
  foundingDate: siteConfig.org.founded,
  sameAs: [
    siteConfig.links.facebook,
    siteConfig.links.twitter,
    siteConfig.links.instagram,
  ],
  address: {
    "@type":          "PostalAddress",
    addressLocality:  siteConfig.address.city,
    addressRegion:    siteConfig.address.state,
    postalCode:       siteConfig.address.pin,
    addressCountry:   "IN",
  },
  memberOf: {
    "@type": "Organization",
    name:    siteConfig.org.affiliation,
  },
  ...(siteConfig.contact.email && { email: siteConfig.contact.email }),
  ...(siteConfig.contact.phone && { telephone: siteConfig.contact.phone }),
}