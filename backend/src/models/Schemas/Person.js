import mongoose from 'mongoose';

// estrutura do cadastro da parte
const PersonSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  cpf: Number,
  phone: Number,
});

export default mongoose.model('Person', PersonSchema);
