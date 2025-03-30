import express from 'express';
import { createOder, getOders } from './controllers/oderController.js';

const oderRouter = express.Router();

// Route for creating an order
oderRouter.post("/", createOder);

// Route for getting orders
oderRouter.get("/", getOders);

export default oderRouter;