const express = require('express');
const cors =require('cors');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000 ;

// middle war
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const users=[
    {id:"1",name:"nabila",email:"nabila@gmail.com"},
    {id:"2",name:"sabila",email:"sabila@gmail.com"},
    {id:"3",name:"kabila",email:"kabila@gmail.com"}
]

app.get('/',(req,res)=>{
    res.send("user managment server is runing on browser")
})
app.get('/users',(req,res)=>{
    res.send(users)
})
app.post('/users',(req,res)=>{
    console.log('post api is hitting');
    console.log(req.body);
    const newUser=req.body;
    newUser.id=users.length+1;
    users.push(newUser);
    res.send(newUser)
})


app.listen(port,()=>{
    console.log(`server is runing on port :${port}`)
})