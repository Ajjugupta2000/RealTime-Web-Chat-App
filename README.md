# RealTime-Web-Chat-App
Real-Time Chat is a web application that allows multiple users to have a private and public chat
Socket.IO is a versatile web application framework that enables real-time communication between multiple users through private and public chat features. With Socket.IO, you can create a custom chat application that can be tailored to your specific needs, whether it's for business, social, or educational purposes. The framework provides a reliable, efficient, and scalable solution for building real-time chat applications that can support large user bases and handle high volumes of traffic. With its robust API and extensive documentation, Socket.IO makes it easy to customize the chat application to suit your requirements and provide a seamless user experience.
# Tech Stack
## - Frontend:

1. HTML, CSS, and JavaScript for building the user interface.
2. jQuery to introduce engaging emoji features.
3. Socket.io client library to communicate with the server.
## - Backend:

1. Node.js, a JavaScript runtime for building server-side applications.
2. Express.js or other Node.js web frameworks for handling APIs and HTTP requests and responses.
3. Socket.io server library for handling real-time communication between clients and the server.

# How to Use
- Download or clone the repository    
   `git clone https://github.com/Ajjugupta2000/Realtime-Commenting-System.git`
- Install any dependencies required by the project by running the below command in the terminal   
   `npm install`   
   This command will install all the Node.js dependencies listed in the package.json file.
- Run command   
   `node server.js` or `nodemon server.js`
Note : first install nodemon by running command `npm nodemon`
- Open the application in your web browser by navigating to http://localhost:3000 or the appropriate URL provided by the application.
- To see real-time communication between two or more than two users, follow these steps:
   1. Open two or more tabs in your web browser with the same URL (e.g., http://localhost:3000).
   2. In each tab, enter a different username in prompt section to differentiate between the users.
   3. When a user types a message, the message should be sent to the server over the WebSocket connection.
   4. The server should broadcast the message to all connected clients, including the sender.
   5. Each client should receive the message and display it in the chat interface.
