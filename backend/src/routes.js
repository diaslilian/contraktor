import express from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import ContractController from './controllers/ContractController';
import FileController from './controllers/FileController';
import PartController from './controllers/PartController';

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/parts', PartController.store);
routes.get('/parts', PartController.index);

routes.post('/contracts', ContractController.store);
routes.get('/contracts', ContractController.index);
routes.delete('/contracts/:id/exclude', ContractController.delete);

routes.post('/files', upload.single('document'), FileController.store);

export default routes;
