module.exports = {
  development: {
    // complete your knexfile
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: './data/project-book.db3'
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  },
  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: './data/test.db3'
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  }
};
