const path = require('path')

// export default () => ({
//   webpack: (config, { stage }) => {
//     config.resolve.alias = {
//       ...(config.resolve.alias || {}),
//     //   '~_variables.sass': path.resolve(__dirname, 'src/_variables.sass')
//     }
//     config.resolve.modules = [
//       ...(config.resolve.modules || []),
//       // path.resolve(__dirname, 'node_modules/react-bulma-components/node_modules')
//     ]
//     console.log("webpack config", config)
//     return config
//   },
// })

import ExtractCssChunks from 'extract-css-chunks-webpack-plugin'

export default ({ includePaths = [], ...rest }) => ({
  webpack: (config, { stage }) => {
    let loaders = []

    const sassLoaderPath = require.resolve('sass-loader')

    const sassLoader = {
      loader: sassLoaderPath,
      options: { includePaths: ['src/', ...includePaths], ...rest },
    }
    const styleLoader = { loader: 'style-loader' }
    const cssLoader = {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        minimize: stage === 'prod',
        sourceMap: false,
      },
    }

    if (stage === 'dev') {
      // Dev
    //   loaders = [styleLoader, cssLoader, sassLoader]
    loaders = [ExtractCssChunks.loader, cssLoader, sassLoader]
    console.log("---> DEV, loaders: ", loaders)
    } else if (stage === 'node') {
      // Node
      // Don't extract css to file during node build process
      loaders = [cssLoader, sassLoader]
      console.log("---> NODE, loaders: ", loaders)
    } else {
      // Prod
      loaders = [ExtractCssChunks.loader, cssLoader, sassLoader]
      console.log("---> PROD, loaders: ", loaders)
    }

    config.module.rules[0].oneOf.unshift({
      test: /\.s(a|c)ss$/,
      use: loaders,
    })

    console.log("conf", config)
    return config
  },
})