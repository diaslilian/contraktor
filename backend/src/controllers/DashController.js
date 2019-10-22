import Contract from '../models/Contract';

export default {
  async show(req, res) {
    const { person_id } = req.headers;

    const contracts = await Contract.find({ person: person_id });

    return res.json(contracts);
  },
};
