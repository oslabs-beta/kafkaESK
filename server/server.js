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
  console.log('a user connected')

  // Error 400
  const consumer = kafka.consumer({ groupId: 'test-group' })

  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })

  // execute the async function to start the connection, subscribe, and emit messages

  // Error 401
  const consumer = kafka.consumer({ groupId: 'test-group' })

  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })
  // Error 404
  const consumer = kafka.consumer({ groupId: 'test-group' })

  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })

  // 
  // Error 407
  const consumer = kafka.consumer({ groupId: 'test-group' })

  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })
  // Error 408
  const consumer = kafka.consumer({ groupId: 'test-group' })

  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })
  */
})

server.on('error', (err) => {
  console.log(err)
});

const PORT = 8080 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});