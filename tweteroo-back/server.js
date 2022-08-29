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

server.post('/tweets', (req, res) => {
  tweet.push(req.body);

  res.send("OK");
});

server.get('/tweets', (req, res) => {
  const lastTweets = tweet.slice(-10);

  lastTweets.forEach(tweet => {
    const userObject = user.find(user => user.username === tweet.username);
    tweet.avatar = userObject.avatar;
  });
  
  res.send(lastTweets);
});

server.listen(5000, () => console.log("Listening on port 5000"));

