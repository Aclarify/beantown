/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				// port: '',
				// pathname: '/account123/**',
			},
		],
	},
};

module.exports = nextConfig;
