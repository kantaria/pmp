module.exports = {
  apps: [
    {
      name: '',
      port: '',
      script: './.output/server/index.mjs',
      exec_mode: 'cluster',
      instances: 'max',
      autorestart: true,
      watch: false,
      env_production: {
        NODE_ENV: 'production',
        HOST: '',
        PORT: '',
      },
    },
  ],
};
