module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "2345",
    DB: "tesdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };