const express =require('express')
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app=express()
app.use(express.json());
app.use(cors());

const Client = new MongoClient('mongodb+srv://admin1:admin1@cluster0.wyowjiq.mongodb.net/?retryWrites=true&w=majority');
Client.connect();
const db = Client.db('councelling');
const col = db.collection('userrr');
col.insertOne({'student':"345"})
app.post('/register',(req,res)=>{
    col.insertOne(req.body)
    console.log(req.body)
    res.send("data inserted successfully")
})
app.get('/',(req,res)=>{
res.send('<center><h1>hello swaroop</h1></center>')
})

app.get('/about',(req,res)=>{
    res.send('<center><h1>hello swaroop</h1></center>')
})


  
app.listen(8080,()=>{console.log('express server is running')})