const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const cors = require("cors");
const morgan = require("morgan");
const { Kafka, CompressionTypes, CompressionCodecs } = require("kafkajs"); // we need to install kafkajs
const SnappyCodec = require("kafkajs-snappy");
// const { exec } = require('child_process'); // ?

CompressionCodecs[CompressionTypes.Snappy] = SnappyCodec;

// instantiating the KafkaJS client by pointing it towards at least one broke
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092", "localhost:9092"],
});

app.use(cors());
app.use(morgan("combined"));
// serve main html to the client
// The server root will send our index.html
app.get("/", function (req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.use("/dist", express.static(path.join(__dirname, "../dist")));

io.on("connection", (socket) => {
  socket.emit(
    "anything",
    "Websockets full duplex protocol established. Begin streaming data from Kafka cluster..."
  );

  // 404 consumer
  const consumer_404 = kafka.consumer({
    groupId: "group404",
    fromBeginning: true,
  });
  consumer_404.connect();
  consumer_404.subscribe({ topic: "404_ERRORS_PER_MIN" });
  consumer_404.run({
    eachMessage: async ({ topic, partition, message }) => {
      socket.broadcast.emit("404_ERRORS_PER_MIN", message.value.toString());
    },
  });

  // 405 consumer
  const consumer_405 = kafka.consumer({
    groupId: "group405",
    fromBeginning: true,
  });
  consumer_405.connect();
  consumer_405.subscribe({ topic: "405_ERRORS_PER_MIN" });
  consumer_405.run({
    eachMessage: async ({ topic, partition, message }) => {
      socket.broadcast.emit("405_ERRORS_PER_MIN", message.value.toString());
    },
  });

  // 406 consumer
  const consumer_406 = kafka.consumer({
    groupId: "group406",
    fromBeginning: true,
  });
  consumer_406.connect();
  consumer_406.subscribe({ topic: "406_ERRORS_PER_MIN" });
  consumer_406.run({
    eachMessage: async ({ topic, partition, message }) => {
      socket.broadcast.emit("406_ERRORS_PER_MIN", message.value.toString());
    },
  });

  // 407 consumer
  const consumer_407 = kafka.consumer({
    groupId: "group407",
    fromBeginning: true,
  });
  consumer_407.connect();
  consumer_407.subscribe({ topic: "407_ERRORS_PER_MIN" });
  consumer_407.run({
    eachMessage: async ({ topic, partition, message }) => {
      socket.broadcast.emit("407_ERRORS_PER_MIN", message.value.toString());
    },
  });
});

// const consumer = kafka.consumer({ groupId: 'test-group' })

// consumer.connect()
// consumer.subscribe({ topic: 'error_count', fromBeginning: true })

// consumer.run({
//   eachMessage: async ({ topic, partition, message }) => {
//     console.log({
//       value: message.value.toString(),
//     })
//   },
// })

// const consumer = kafka.consumer({ groupId: 'test-group' })

// consumer.connect()
// consumer.subscribe({ topic: 'error_count', fromBeginning: true })

// consumer.run({
//   eachMessage: async ({ topic, partition, message }) => {
//     console.log({
//       value: message.value.toString(),
//     })
//   },
// })

// const consumer = kafka.consumer({ groupId: 'test-group' })

// consumer.connect()
// consumer.subscribe({ topic: 'error_count', fromBeginning: true })

// consumer.run({
//   eachMessage: async ({ topic, partition, message }) => {
//     console.log({
//       value: message.value.toString(),
//     })
//   },
// })

// // setup for socketio: it listens for a ‘connection’ event and
// // will run the provided function anytime this happens.
// io.on('connection', (socket) => {
//   // console logs when client connects
//   // test code
//   const testString = "Hello client, this is server";
//   console.log('Websockets is connected!')
//   socket.emit('anything',testString);

//   // Error 404
//   const consumer_404 = kafka.consumer({ groupId: "window404-group" });
//   const window404_error = async () => {
//     await consumer_404.connect();
//     await consumer_404.subscribe({ topic: "404_count" });
//     await consumer_404.run({
//       eachMessage: async ({ topic, partition, message }) => {
//         socket.emit('404_count', message.value.toString());
//         socket.broadcast.emit('404_count', message.value.toString());

//         console.log("A new message in 404_count:", message);
//       },
//     })
//   }
//   console.log("this is right before window404_error");
//   window404_error()
//     .catch((err) => console.error(`error with consumer_404, ${err.message}`, err))

//   // execute the async function to start the connection, subscribe, and emit messages

//   // Error 405
//   const consumer_405 = kafka.consumer({
// 		groupId: "window405-group",
// 		fromOffset: 0,
// 	});
//   const window405_error = async () => {
//   await consumer_405.connect()
//   await consumer_405.subscribe({ topic: "405_count"});

//   await consumer_405.run({
//     eachMessage: async ({ topic, partition, message }) => {

//       console.log("A new message in 405_count:", message);

//       socket.emit("405_count", message.value.toString());
// 			socket.broadcast.emit("405_count", message.value.toString());
// 		},
//   })
// }

// window405_error()
// .catch((err) => console.error(`error with consumer_405, ${err.message}`, err))

//   // Error 406
//   const consumer_406 = kafka.consumer({ groupId: 'window406-group' })
//   const window406_error = async () => {
//     await consumer_406.connect();
//     await consumer_406.subscribe({ topic: "406_count" );
//     await consumer_406.run({
//       eachMessage: async ({ topic, partition, message }) => {

//         console.log("A new message in 406_count:", message);

//         socket.emit('406_count', message.value.toString());
//         socket.broadcast.emit('406_count', message.value.toString());
//       },
//     })
//   }

//   window406_error()
//     .catch((err) => console.error(`error with consumer_406, ${err.message}`, err))

//   // Error 407
//   const consumer_407 = kafka.consumer({
// 		groupId: "window407-group",
// 		fromOffset: 0,
// 	});
//   const window407_error = async () => {
//     await consumer_407.connect();
//     await consumer_407.subscribe({ topic: '407_count' })
//     await consumer_407.run({
//       eachMessage: async ({ topic, partition, message }) => {

//       console.log("A new message in 407_count:", message);

// 				socket.emit("407_count", message.value.toString());
// 				socket.broadcast.emit("407_count", message.value.toString());
// 			},
//     })
//   }

//   window407_error()
//     .catch((err) => console.error(`error with consumer_407, ${err.message}`, err))

// })

server.on("error", (err) => {
  console.log(err);
});

const PORT = 3333 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
