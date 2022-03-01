import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url);
import ejs from 'ejs';
import  express from 'express';
import cors from 'cors';
import * as path from "path";
import logger from 'morgan';
import { fileURLToPath } from 'url';
const comics = require("./static/data/comics.json");
const images = require("./static/data/images.json");
const infographic = require("./static/data/infographic.json");
const menuicons = require("./static/data/menuIcons.json");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(cors())
app.use(logger());
app.use(express.static('static'));
app.set('views', __dirname + '/static');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

const PORT = 3000;

app.get('/comics', (req,res)=>{
    res.json(comics);
})
app.get('/images', (req,res)=>{
    res.json(images);
})
app.get('/infographic', (req,res)=>{
    res.json(infographic);
})
app.get('/menuicons', (req,res)=>{
    res.json(menuicons);
})
app.listen(PORT, ()=>console.log(`listening to http://localhost:${PORT}`));