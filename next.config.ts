import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		// Le immagini arrivano dal CDN di Sanity: serve l'allow-list esplicita
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				pathname: '/images/**',
			},
		],
		formats: ['image/avif', 'image/webp'],
	},
};

export default nextConfig;
