import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/index.js";
dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: 'https://jellyfish-app-rm9ih.ondigitalocean.app' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);



app.listen(8080, function () {
    console.log('listening on *:5000');
});