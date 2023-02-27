/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		locales: ['en-US'],
		defaultLocale: 'en-US',
	},
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['cdn.sanity.io'],
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
