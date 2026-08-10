import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '100mb',
        }
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'covers.openlibrary.org' },
            { 
                protocol: 'https', 
                hostname: '**.vercel-storage.com'  // ← ** برای match کردن همه subdomain ها
            },
        ]
    }
};

export default nextConfig;