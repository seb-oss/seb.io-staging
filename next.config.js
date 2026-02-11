//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('./.nx-helpers/compiled.js')

/**
 * @type {import('./.nx-helpers/compiled.js').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  unstable_runtimeJS: true,
  experimental: {
    esmExternals: true,
    serverActions: {
      allowedOrigins: ['stg.seb.io', '*.seb.io'],
    },
  },
  browserDefaults: {
    preferClientOnly: true,
  },
  optimizePackageImports: ['@sebgroup/green-core'],
  transpilePackages: ['@babel/runtime'],
  output: 'export',
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  nx: {
    svgr: false,
  },
}

const plugins = [withNx]

module.exports = composePlugins(...plugins)(nextConfig)
