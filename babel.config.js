module.exports = {
  env: {
    cjs: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
      ],
    },

    es: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
        '@babel/preset-react',
      ],
    },

    test: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
      ],
    },
  },

  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ],
};
