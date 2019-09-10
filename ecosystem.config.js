module.exports = {
  apps : [
      {
        name: "creativetensions",
        script: "./app.js",
        watch: true,
        env: {
            "PORT": 3000,
            "NODE_ENV": "development"
        },
        env_production: {
            "PORT": 8081,
            "NODE_ENV": "production",
        }
      }
  ]
};
