import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    experimental: {
       staleTimes:{
        static: 30,
        dynamic: 180,
       }
    },
};

export default withNextIntl(nextConfig);
