import Contract from '../models/Contract';
import File from '../models/File';
import Part from '../models/Part';

export default {
  async index(req, res) {
    const contracts = await Contract.findAll({
      attributes: ['id', 'title', 'initial_date', 'final_date'],
      include: [
        {
          model: File,
          as: 'file',
          attributes: ['id', 'name', 'path', 'url'],
        },
        {
          model: Part,
          as: 'parts',
        },
      ],
    });

    return res.json(contracts);
  },

  async delete(req, res) {
    const { id } = req.params;

    const contract = await Contract.findByPk(id);

    if (!contract) {
      return res.status(400).json({ error: 'contracts not found' });
    }

    await contract.destroy();

    return res.json({ message: 'ok' });
  },

  async store(req, res) {
    const { title, initial_date, final_date, file_id, parts } = req.body;

    const contract = await Contract.create({
      title,
      initial_date,
      final_date,
      file_id,
    });

    if (parts && parts.length > 0) {
      contract.setParts(parts);
    }

    return res.json(contract);
  },
};
