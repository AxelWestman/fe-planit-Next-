// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import { output } from "framer-motion/client";
import type { NextConfig } from "next";

const nextConfig = {
  //output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
} as unknown as NextConfig;

export default nextConfig;
