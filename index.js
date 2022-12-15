import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { bookroutes } from './routes.js';

const app = express();

dotenv.config();

const Port = process.env.PORT || 5000;

const ConnectionDB = async () => {
    try {
        mongoose.connect(process.env.MongoDB_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB connected')
    } catch (err) {
        console.log(err)
    }
}
await ConnectionDB();

app.get('/', (req, res) => {
    res.send('Hello World from books');
})

app.use(cors());

app.use(express.json());

app.use("/books", bookroutes); // router is the variable from routes.js

app.listen(Port, () => { console.log(`Server is running on port ${Port}`) });
