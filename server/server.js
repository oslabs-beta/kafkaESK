const http = require('http')
const express = require('express');
const socketio = require('socket.io');

const app = express(); 
const server = http.createServer(app);
const io = socketio(server);

const { Kafka } = require('kafkajs'); // we need to install kafkajs
// const { exec } = require('child_process'); // ?

// instantiating the KafkaJS client by pointing it towards at least one broke
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka1:9092', 'kafka2:9092']
})

// serve main html to the client 
// The server root will send our index.html
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// setup for socketio: it listens for a ‘connection’ event and 
// will run the provided function anytime this happens.
io.on('connection', (socket) => {
  // console logs when client connects
  console.log('Connected!')

  // Error 404
  const consumer_404 = kafka.consumer({ groupId: 'window404-group' })
  const window404_error = async () => {
    await consumer_404.connect();
    await consumer_404.subscribe({ topic: 'window404_topic' })
    await consumer_404.run({
      eachMessage: async ({ topic, partition, message }) => {
        socket.emit('window404_topic', message.value.toString());
        socket.broadcast.emit('window404_topic', message.value.toString());
      },
    })
  }
  
  window404_error()
    .catch((err) => console.error(`error with consumer_404, ${err.message}`, err))

  // execute the async function to start the connection, subscribe, and emit messages

  // Error 405
  const consumer_405 = kafka.consumer({ groupId: 'window405-group' })
  const window405_error = async () => {
  await consumer_405.connect()
  await consumer_405.subscribe({ topic: 'window405_topic' })
  
  await consumer_405.run({
    eachMessage: async ({ topic, partition, message }) => {
      socket.emit('window405_topic', message.value.toString());
      socket.broadcast.emit('window405_topic', message.value.toString());
    },
  })
}

window405_error()
.catch((err) => console.error(`error with consumer_405, ${err.message}`, err))

  // Error 406
  const consumer_406 = kafka.consumer({ groupId: 'window406-group' })
  const window406_error = async () => {
    await consumer_406.connect();
    await consumer_406.subscribe({ topic: 'window404_topic' })
    await consumer_406.run({
      eachMessage: async ({ topic, partition, message }) => {
        socket.emit('window406_topic', message.value.toString());
        socket.broadcast.emit('window406_topic', message.value.toString());
      },
    })
  }
  
  window406_error()
    .catch((err) => console.error(`error with consumer_406, ${err.message}`, err))
     
  // Error 407
  const consumer_407 = kafka.consumer({ groupId: 'window404-group' })
  const window407_error = async () => {
    await consumer_407.connect();
    await consumer_407.subscribe({ topic: 'window404_topic' })
    await consumer_407.run({
      eachMessage: async ({ topic, partition, message }) => {
        socket.emit('window407_topic', message.value.toString());
        socket.broadcast.emit('window407_topic', message.value.toString());
      },
    })
  }
  
  window407_error()
    .catch((err) => console.error(`error with consumer_407, ${err.message}`, err))
})

server.on('error', (err) => {
  console.log(err)
});

const PORT = 8080 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});