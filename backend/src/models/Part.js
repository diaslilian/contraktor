import Sequelize, { Model } from 'sequelize';

class Part extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        surname: Sequelize.STRING,
        cpf: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Contract, {
      through: 'PartContract',
      foreignKey: 'part_id',
      as: 'contract',
    });
  }
}

export default Part;
