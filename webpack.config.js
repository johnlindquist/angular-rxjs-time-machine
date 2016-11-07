const webpack = require('webpack')
const config = {
    entry: {
        'app': [
            'core-js/es7/reflect',
            'zone.js/dist/zone',
            './src/app.ts'
        ]
    },
    output: {
        path: '/build',
        filename: 'app.bundle.js',
        publicPath: '/dev/'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require('./build/vendors-manifest.json'),
        })],
    module: {
        loaders: [
            {test: /\.(ts)$/, loader: 'awesome-typescript-loader'}
        ]
    }
}

module.exports = config;