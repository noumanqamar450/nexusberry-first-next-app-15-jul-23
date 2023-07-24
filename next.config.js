/** @type {import('next').NextConfig} */
const nextConfig = {
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
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
            },
        ],
        domains: ["res.cloudinary.com"],
    },
}

module.exports = nextConfig
