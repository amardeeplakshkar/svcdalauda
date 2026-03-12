import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: [
          "/api/",
          "/dashboard/",
          "/admin/",
        ],
      },
    ],
    sitemap: "https://svgcdalauda.in/sitemap.xml",
  }
}