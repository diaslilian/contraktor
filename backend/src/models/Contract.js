import Sequelize, { Model } from 'sequelize';

class Contract extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        initial_date: Sequelize.DATE,
        final_date: Sequelize.DATE,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'file_id', as: 'file' });
    this.belongsToMany(models.Part, {
      through: 'PartContract',
      foreignKey: 'contract_id',
      as: 'parts',
    });
  }
}

export default Contract;
