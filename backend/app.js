import express from "express";
import cors from "cors";
import DBconnection from "./config/mongoDB.js";
import dotenv from "dotenv";
import toppingRoutes from "./routes/toppings.routes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en puerto", process.env.PORT);
})
DBconnection();

let corsOptions = {
    methods:["GET","POST","PUT","DELETE"]
}
app.use(cors(corsOptions));

app.use("/top",toppingRoutes);



