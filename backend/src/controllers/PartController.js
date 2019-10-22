import Part from '../models/Part';
import Contract from '../models/Contract';

export default {
  async index(req, res) {
    const parts = await Part.findAll({
      attributes: ['id', 'name', 'surname', 'cpf', 'email', 'phone'],
      include: [
        {
          model: Contract,
          as: 'contract',
          attributes: ['contract_id'],
        },
      ],
    });
    return res.json(parts);
  },

  async store(req, res) {
    const { name, surname, email, cpf, phone, contract } = req.body;

    const part = await Part.create({
      name,
      surname,
      email,
      cpf,
      phone,
    });
    part.setContract(contract);

    return res.json(part);
  },
};
