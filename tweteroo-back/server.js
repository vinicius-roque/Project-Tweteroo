import express from 'express';
import cors from "cors";

const server = express(); 
server.use(express.json());
server.use(cors());

const user = [];
const tweet = [];

server.post('/sign-up', (req, res) => {
  const signUp = req.body;
  
  user.push(signUp);
  
  res.send("OK");
});

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.listen(5000, () => console.log("Listening on port 5000"));

