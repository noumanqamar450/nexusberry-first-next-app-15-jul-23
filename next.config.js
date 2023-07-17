/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'next-blog-starter.vercel.app',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
