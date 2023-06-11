import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import brandrouter from './routes/brand-routes';
import carrouter from './routes/carmodel-routes';
import stockrouter from './routes/stock-routes';
const app = express();

dotenv.config();
app.use(express.json());

app.use("/api/brand", brandrouter);
app.use("/api/carmodel", carrouter);
app.use("/api/stock", stockrouter)

mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));


app.listen(5000);

//bimskuy25