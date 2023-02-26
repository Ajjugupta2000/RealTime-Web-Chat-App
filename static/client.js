const socket=io()

// const form=document.getElementById('send');
const messageinput=document.getElementById('messageinp');
const messagecontainer=document.querySelector(".container");
const button =document.getElementById('btn');

let audio=new Audio('message4.mp3');

let username="";
do{
    username=prompt("Enter your name to join");
}while(username=="")

socket.emit('new-user-joined',username);

function append(message,position){
    const inpmessage=document.createElement('div')
    inpmessage.innerHTML=message;
    inpmessage.classList.add('message');
    inpmessage.classList.add(position);
    messagecontainer.append(inpmessage);
    if(position=='left')
    audio.play();
}

socket.on('user-joined',name=>{
    append(`<b>${name.toUpperCase()}</b> joined the chat`,'right')
    // audio.play();
})


button.addEventListener('click',(event)=>{
    event.preventDefault()
    const sendmessage=messageinput.value;
    append(`<b>YOU</b>:${sendmessage}`,'right')
    socket.emit('send', sendmessage)
    messageinput.value=''
})

socket.on('receive', data=>{
    append(`<b>${data.name.toUpperCase()}</b>:${data.message}`,'left')
})