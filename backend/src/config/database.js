module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'contraktor',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
