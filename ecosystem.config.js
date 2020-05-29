module.exports = {
  // https://pm2.io/docs/runtime/reference/ecosystem-file/

  apps : [
    {
      name: "acordo-site",
      script: "npm start",
      node_args: "nvm use 12.8.0",
      error_file: "../acordo-site/log/error.log",
      out_file: "../acordo-site/log/access.log",      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }
]
}
