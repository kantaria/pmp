module.exports = {
  apps: [
    {
      name: '',
      port: '',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env_production: {
        NODE_ENV: 'production',
        HOST: '',
        PORT: '',
      },
    },
  ],
};
