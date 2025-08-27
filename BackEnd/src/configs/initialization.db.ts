import { Sequelize } from 'sequelize';
const host = process.env.DB_HOST;
const port = Number(process.env.DB_PORT) || 3306;
const user = process.env.DB_USER_NAME || '';
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME || '';
const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
  port: port,
});
sequelize.sync({ alter: true });
const isDBRunning = async () => {
  console.log('connecting to database.');
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    return true;
  } catch (error) {
    console.error('Unable to connect to the database: \n', error);
    return;
  }
};

export { sequelize, isDBRunning };
