import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { eventRouter } from './routes/eventRouters';

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI as string)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api', eventRouter)


const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 