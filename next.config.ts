import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /**
   * Stamped once per build and inlined. Reading the clock at render time would
   * instead report whenever a page was regenerated, which drifts on the ISR
   * routes and disagrees with the fully static ones.
   */
  env: {
    BUILD_TIMESTAMP: new Date().toISOString(),
  },
  reactStrictMode: true,
  typedRoutes: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["anujsinghwp.localhost", "anujdataworld.local"],
  devIndicators: false,
  experimental: {
    // Rewrite barrel imports to deep imports so a single icon doesn't pull the
    // whole package into the module graph. Next already optimizes lucide-react,
    // @tabler/icons-react, date-fns and lodash-es by default; these are the
    // heavy icon packages this app uses that are NOT on that default list.
    optimizePackageImports: [
      "@hugeicons/react",
      "@hugeicons/core-free-icons",
      "@phosphor-icons/react",
      "@remixicon/react",
    ],
    agentUpgrade: "latest",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  compiler:
    process.env.NODE_ENV === "production"
      ? {
          removeConsole: {
            exclude: ["error"],
          },
        }
      : undefined,
  async redirects() {
    return [
      {
        source: "/blog/writing-effect-inspired-by-apple",
        destination: "/blog/apple-hello-effect",
        permanent: true,
      },
      {
        source: "/blog/work-experience",
        destination: "/blog/work-experience-component",
        permanent: true,
      },
      {
        source: "/blog/theme-switcher-component",
        destination: "/blog/theme-switcher",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/#experience",
        permanent: true,
      },
      {
        source: "/blocks/:path*",
        destination: "/#experience",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
