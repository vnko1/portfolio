module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "npm start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: "62.72.20.238",
      ref: "origin/main",
      repo: "https://github.com/vnko1/portfolio.git",
      path: "/var/www/portfolio",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      // ssh_options: "ForwardAgent=yes",
    },
  },
};
