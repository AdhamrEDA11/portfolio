import { MetadataRoute } from "next";
import { projects } from "@/lib/data";

const siteUrl = "https://adhamreda.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: new Date()
  }));

  return [{ url: siteUrl, lastModified: new Date() }, ...projectRoutes];
}
