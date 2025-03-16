import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        unoptimized: true
    },
    output: "export",
    missingSuspenseWithCSRBailout: false,
    eslint: {
        ignoreDuringBuilds: true
    },
};

export default nextConfig;
