import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import test from './test.js';

const app = express();
const port = process.env.PORT || 3000;



app.get('/',(req,res)=>{
  res.send('Hello From Server Side!!££$$');
})

app.get('/api/user',(req,res)=>{
  const testJson = JSON.stringify(test);
res.send(testJson);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });