import express from "express"
import mongoose from "mongoose"
import { dbUrl } from "./config"
import { registerHobbyRoute } from "./controller/hobbies-controller";
import { registerUserRoute } from "./controller/users-controller";

const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
})

registerHobbyRoute(app);
registerUserRoute(app);

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Connected"))
