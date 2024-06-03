import express, { Express, Request, Response } from 'express';
import { connectToDB } from '../db';
import { ObjectId } from 'mongodb';

const router = express.Router();


router.get('/wishlist', async (req: Request, res: Response) => {
  try {
    const db = await connectToDB();
    const wishlist = await db.collection("wishlist").find({}).toArray();

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ error: `Falha na requisição` });
  }
});

router.get('/wishlist/:id?', async (req: Request, res: Response) => {
  try {
    const db = await connectToDB();
    const collection = await db.collection("wishlist");

    const query = { _id: new ObjectId(req.params.id) };
    const wishlistItem = await collection.findOne(query);

    if (!wishlistItem) {
      return res.status(404).json({ error: `Erro ao buscar produto da wishlist` });
    }

    res.status(200).json(wishlistItem);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/wishlist', async (req: Request, res: Response) => {
  try {
    const newItem = req.body;

    const db = await connectToDB();
    const collection = await db.collection("wishlist");

    const wishlist = await collection.insertOne(newItem);

    res.status(204).json(wishlist);
  } catch (error) {
    res.status(500).json({ error: `Erro ao adicionar o produto da wishlist` });
  }
});

router.put('/wishlist/:id', async (req: Request, res: Response) => {
  try {
    const updateItem = req.body;

    const db = await connectToDB();
    const collection = await db.collection("wishlist");

    const query = { _id: new ObjectId(req.params.id) };
    const wishlistItem = await collection.updateOne(query, { $set: updateItem });

    res.status(200).json(wishlistItem);
  } catch (error) {
    res.status(500).json({ error: `Erro ao atualizar o produto da wishlist` });
  }
});

router.delete('/wishlist/:id', async (req: Request, res: Response) => {
  try {
    const db = await connectToDB();
    const collection = await db.collection("wishlist");

    const query = { _id: new ObjectId(req.params.id) };
    const wishlistItem = await collection.deleteOne(query);

    res.status(200).json(wishlistItem);
  } catch (error) {
    res.status(500).json({ error: `Erro ao deletar o produto da wishlist` });
  }
});

export default router;
