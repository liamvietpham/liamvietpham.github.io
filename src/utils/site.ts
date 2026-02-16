const DEFAULT_SITE_URL = "https://liamvietpham.github.io";

export function getSiteUrl(): string {
    const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    if (!raw) return DEFAULT_SITE_URL;

    try {
        const parsed = new URL(raw);
        return parsed.origin;
    } catch {
        return DEFAULT_SITE_URL;
    }
}
