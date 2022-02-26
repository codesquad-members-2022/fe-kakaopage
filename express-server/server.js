
import ejs from 'ejs';
import  express from 'express';
import cors from 'cors';
import * as path from "path";
import logger from 'morgan';
import { fileURLToPath } from 'url';
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

app.get('/', (req,res)=>{
    res.render('doc.html');
})

app.listen(PORT, ()=>console.log(`listening to http://localhost:${PORT}`));