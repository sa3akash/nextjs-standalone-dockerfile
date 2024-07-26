module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
          },
        ],
      },

      async headers() {
        return [
          {
            source: '/(.*)', // Apply to all routes
            headers: [
              {
                key: 'Content-Security-Policy',
                value: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://jsonplaceholder.typicode.com; media-src 'self' data:;", // Add 'media-src' to allow media sources and data URIs
              },
            ],
          },
        ];
      },
}