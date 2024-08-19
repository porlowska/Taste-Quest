/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.spoonacular.com",
        port: "",
        pathname: "/recipes/**",
      },
      //   {
      //     protocol: "https",
      //     hostname: "www.foodista.com",
      //     port: "",
      //     pathname: "/recipe/**",
      //   },
    ],
  },
};

export default nextConfig;
