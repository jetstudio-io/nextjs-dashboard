/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return process.env.NODE_ENV !== 'production' ? [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8200/:path*',
            },
            {
                source: '/media/:path*',
                destination: 'http://localhost:9000/:path*',
            },
        ] : []
    },
    images: {
        remotePatterns: process.env.NODE_ENV !== 'production' ? [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '',
                pathname: '/media/**',
            },
        ] : [
            {
                protocol: 'https',
                hostname: 'qa.myappdomain.au',
                port: '',
                pathname: '/media/**',
            },
        ],
    },
    experimental: {
        serverActions: {
            allowedOrigins: [
                'http://localhost:8200',
                'http://localhost:8201',
                'http://localhost:8202',
                'http://localhost:3000',
            ]
        }
    }
};

module.exports = nextConfig;
