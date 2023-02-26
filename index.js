const express=require('express');
const app=express();
const http=require('http').createServer(app);

const port=3000;

app.use(express.static(__dirname + '/static'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

http.listen(port,()=>{
    console.log(`server running on port ${port}`)
})


const io=require("socket.io")(http)//import socket.io module

const users={};

io.on('connection', socket =>{
    socket.on('new-user-joined',name=>{
        console.log("user joined:",name); 
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    });
    console.log("hey we are connected") 
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
    });
})