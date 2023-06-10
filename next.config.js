/** @type {import('next').NextConfig} */




const nextConfig = {

    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {

        return config
    },
    env:{
        NEXT_PUBLIC_BACKEND: process.env.NEXT_PUBLIC_BACKEND
    }

}

module.exports = nextConfig
