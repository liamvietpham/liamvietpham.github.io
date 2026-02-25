import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/utils/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = getSiteUrl();

    const lastModified = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

    return [
        {
            url: `${baseUrl}/`,
            lastModified,
            changeFrequency: "weekly",
            priority: 1
        }
    ];
}
