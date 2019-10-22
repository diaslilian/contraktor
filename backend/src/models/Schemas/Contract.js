import mongoose from 'mongoose';

// estrutura do cadastro contrato
const ContractSchema = new mongoose.Schema({
  title: String,
  numberCont: Number,
  startDate: String,
  expiryDate: String,
  document: String,
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
  },
  contract: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contract',
  },
});

export default mongoose.model('Contract', ContractSchema);
