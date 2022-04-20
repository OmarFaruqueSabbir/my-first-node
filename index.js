const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('I can code in node Js!!');
});

const users = [
    {id:1, name: 'Shahzad', email: 'shahzad@gmail.com', phone: '01788887777'},
    {id:2, name: 'Fahad', email: 'Fahad@gmail.com', phone: '01722227777'},
    {id:3, name: 'Nazif', email: 'nazif@gmail.com', phone: '01522223333'},
    {id:4, name: 'Zihad', email: 'Zihad@gmail.com', phone: '01344445555'},
    {id:5, name: 'Nihad', email: 'Nihad@gmail.com', phone: '01245455454'},
    {id:6, name: 'Tarin', email: 'tarin@gmail.com', phone: '01566667777'}
]

app.get('/users',(req,res)=>{
    //filter by query
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{

    }
    // console.log('query',req.query)
    res.send(users);
});
app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    // const id = req.params.id;
    // const user = users.find(u => u.id == id);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) =>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.get('/fruits',(req,res)=>{
    res.send(['mango','apple','banana','litchi','oranges']);
});



app.listen(port,()=>{
    console.log('listening to port',port);
})