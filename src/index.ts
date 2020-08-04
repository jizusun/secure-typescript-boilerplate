import express from 'express';
import { ProductsController } from './controllers/ProductsController';

const app = express();

// Set Up the controllers and routes
const productsController = new ProductsController();
productsController.route(app);

const test: boolean = '123';

const port: any = process.env.PORT || 3001;
app.listen(port, () => console.log(`On port ${port}`));
