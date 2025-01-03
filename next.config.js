module.exports = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true // Use `false` for temporary redirects
      }
    ]
  }
}
