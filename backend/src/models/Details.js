import { Model } from 'sequelize';

class Details extends Model {
  static init(sequelize) {
    super.init({}, { sequelize });
    return this;
  }
}

export default Details;
