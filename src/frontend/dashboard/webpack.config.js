 
module.exports = (env, argv) => ({
  entry: './src/index.js',
  mode: argv.mode,
  module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              query: {
                modules: true
              }
            }
          ]
        },
      ]
    }
});
