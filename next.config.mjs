/** @type {import('next').NextConfig} */
const nextConfig = {
 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        
      },
    ],
  },

};

export default nextConfig;
