const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        library: {
            name: 'experience',
            type: 'umd'
        },
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}