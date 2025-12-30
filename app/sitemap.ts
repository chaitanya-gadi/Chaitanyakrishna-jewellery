import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_HOSTED_URL || 'http://localhost:3000';

    // Static routes for KRISHNA JEWELLERY
    const staticRoutes = [
        '/',
        '/rings',
        '/necklaces',
        '/earrings',
        '/bracelets',
        '/chokers',
        '/pendants',
    ];

    return staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 1.0,
    }));
}
