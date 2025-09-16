/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
	output: 'export', // enable static export (to out/)
	assetPrefix: isProd ? '/react-search-filter/' : undefined,
	basePath: isProd ? '/react-search-filter' : undefined,
};

export default nextConfig;
