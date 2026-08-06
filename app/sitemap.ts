import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alimaqsoodahmed-portfolio.vercel.app",
      lastModified: new Date(),
    },
  ];
}