import express from "express";
import morgan from "morgan";
import {join, dirname} from "path";
import {fileURLToPath} from "url";

//Routes
import indexRoutes from './src/routes/index.js';

// Initialize express
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//Settings
app.set("port", process.env.PORT || 8080);
app.set("views", join(__dirname, "views"));
app.set('view engine', "ejs");

//middlewares
app.use(morgan("dev"));

//routes
app.use(indexRoutes);

//static files
app.use(express.static(join(__dirname, "public")));


//Listening the Server
app.listen(app.get("port"));
console.log("Server on port", app.get("port"));

