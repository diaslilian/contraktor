import mongoose from 'mongoose';

// estrutura visualizacao contrato
const PreviewSchema = new mongoose.Schema({
  // dados do contrato
  title: String,
  numberCont: Number,
  startDate: String,
  expiryDate: String,

  // dados das partes
  name: String,
  lastname: String,
  email: String,
  cpf: Number,
  phone: Number,
});

export default mongoose.model('Preview', PreviewSchema);
