module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['babel-plugin-inline-import', {
      "extensions": [
        ".scss?inline",
      ]
    }]
  ]
}
