import express, { Router } from "express";
import type { Request, Response } from 'express';

const app = express();

const PORT = 3000;

app.use(express.json());

const router = Router();


router.get('/', (req: Request, res: Response) => {
  req.headers.token = 'OK'
  res.status(200).json('OK')
});

app.use(router);

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));
