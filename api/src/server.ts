require('dotenv').config();
import { userRoutes } from "./routes";

const cors = require('cors');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`O servidor está rodando em http://localhost:${PORT}`);
});

