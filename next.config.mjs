/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'flowbite.s3.amazonaws.com',
        protocol: 'https',
        pathname: '/blocks/**'
      }
    ]
  }
}

export default nextConfig
