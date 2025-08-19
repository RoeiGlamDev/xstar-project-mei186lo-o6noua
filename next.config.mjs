

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // replace with your image domain
    formats: ['image/avif', 'image/webp']
},
  webpack(config) {
    
    return config;
  },
  experimental: {
    optimizeCss: true
}
};

export default nextConfig;