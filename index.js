const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const router = express.Router();
const app = express();

//Enable body parser

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Set static folder
// app.use(express.static(path.join('index.html')));
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'))

app.use('/', router);
app.listen(port, () => console.log('Server started on port 5000'));
