const path = require("path");
const http = require("http");
const WebSocket = require("ws");
const express = require("express");
const app = express();
//const ws = new WebSocket("localhost:3333");
const server = require("http").createServer(app);
const ws = new WebSocket.server({ server: server });

const { Kafka, CompressionTypes, CompressionCodecs } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

app.get("/", function (req, res) {
  //console.log(__dirname);
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.use("/dist", express.static(path.join(__dirname, "../dist")));

ws.on("connection", function connection() {
  ws.send("hello this is the server");
  // kafka consumer
  const consumer = kafka.consumer({
    groupId: "test-group",
    fromBeginning: true,
  });
  consumer.connect();
  consumer.subscribe({ topic: "error_count" });
  consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(topic);
      console.log(partition);
      console.log({
        value: message.value.toString(),
      });
      ws.send(message.value.toString());
    },
  });
});

server.listen(3333, () => {
  console.log(`Server listening on port 3000`);
});
