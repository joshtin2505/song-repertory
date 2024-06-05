/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'flowbite.s3.amazonaws.com',
        protocol: 'https',
        pathname: '/blocks/**'
      },
      {
        hostname: 'images.pexels.com',
        protocol: 'https',
        pathname: '/photos/**'
      }
    ]
  }
}

export default nextConfig
