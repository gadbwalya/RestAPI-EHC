const config = {
    user: 'root', //sql user
    password: '', //sql password
    server: 'localhost', //sql server name
    database: 'projects', //database name
    options: {
      trustedConnection: true,
      trustServerCertificate: true,
    },
    port: 1433
  }
  module.exports = config;