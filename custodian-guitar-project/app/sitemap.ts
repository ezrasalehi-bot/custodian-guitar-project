import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com"; // TODO: replace after domain is live
  const routes = ["", "/inherited", "/submit", "/philosophy", "/what-we-seek", "/privacy", "/contact"];
  const now = new Date();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
