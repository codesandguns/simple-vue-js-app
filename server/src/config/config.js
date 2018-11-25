module.exports = {
  port: process.env.PORT || 7070,
  db: {
    database: process.env.DB_NAME || "tabtracker",
    port: 27017,
    options: {
      useNewUrlParser: true
    }
  },
  authentication: {
    jwtSercret: process.env.JWT_SECRET || "secret"
  }
};
