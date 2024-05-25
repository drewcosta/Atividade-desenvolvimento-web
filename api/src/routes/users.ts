import express, { Express, Request, Response } from 'express';
import { connectToDB } from '../db';
import { ObjectId } from 'mongodb';

const router = express.Router();


router.get('/users', async (req: Request, res: Response) => {
  try {
    const db = await connectToDB();
    const users = await db.collection("users").find({}).toArray();

    res.json({ message: 'Funcionando!' });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({ error: `Falha na requisição` });
  }
});

router.get('/users/:id?', async (req: Request, res: Response) => {
  try {
    const db = await connectToDB();
    const collection = await db.collection("users");

    const query = { _id: new ObjectId(req.params.id) };
    const user = await collection.findOne(query);

    if (!user) {
      return res.status(404).json({ error: `Usuário não encontrado` });
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/users', async (req: Request, res: Response) => {
  try {
    const newUser = req.body;

    const db = await connectToDB();
    const collection = await db.collection("users");

    const users = await collection.insertOne(newUser);

    res.status(204).send(users);
  } catch (error) {
    res.status(500).json({ error: `Erro ao adicionar usuário` });
  }
});

router.put('/user/:id', async (req: Request, res: Response) => {
  try {
    const updateUser = req.body;

    const db = await connectToDB();
    const collection = await db.collection("users");

    const query = { _id: new ObjectId(req.params.id) };
    const user = await collection.updateOne(query, { $set: updateUser });

    res.status(200).send(user);
  } catch (error) {
    res.status(500).json({ error: `Erro ao atualizar dados do usuário` });
  }
});

router.delete('/user/:id', async (req: Request, res: Response) => {
  try {
    const db = await connectToDB();
    const collection = await db.collection("users");

    const query = { _id: new ObjectId(req.params.id) };
    const user = await collection.deleteOne(query);

    res.status(200).send(user);
  } catch (error) {
    res.status(500).json({ error: `Erro ao atualizar dados do usuário` });
  }
});

export default router;
