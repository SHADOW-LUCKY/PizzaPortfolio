/* DB conexion */
import mongoose from "mongoose";
 
const DBconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB conectada");
    } catch (error) {
        console.log(error);
    }
}