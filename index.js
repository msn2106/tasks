const express = require('express');


const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  return res.end('<h1>Home Page</h1>')
})
app.listen(PORT, (error)=>{
  if(error) console.error(`tasks server error: ${error}`);
  console.log(`tasks server is running on PORT: ${PORT}`);
})