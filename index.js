const express = require('express');

const app = express();
const PORT = 8000;

// setting up routes
app.use('/', require('./routes'));

// setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// setting up middlewares
app.use(express.urlencoded()); // used only for reading form data in structured format
app.use(express.static('assets'));

// starting the server
app.listen(PORT, (error)=>{
  if(error) console.error(`tasks server error: ${error}`);
  console.log(`tasks server is running on PORT: ${PORT}`);
})