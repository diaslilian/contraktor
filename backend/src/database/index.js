import Sequelize from 'sequelize';

import Contract from '../models/Contract';
import File from '../models/File';
import Part from '../models/Part';

import configDatabase from '../config/database';

const models = [Contract, File, Part];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
