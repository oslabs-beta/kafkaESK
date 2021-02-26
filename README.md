<center>

![](client/images/kafkaesk-logo-readme.png)

</center>

## **About:**
KafkaESK, currently in Beta, is an event-driven monitoring tool that can consume messages from Apache Kafka clusters and display the aggregated data on a dashboard for analysis and maintenance.<br> Used in a pipeline that includes **Apache Kafka Connect** (for writing sources and sinks that either ingests the entire database and stream table updates to Kafka topics or continuously delivers data from the topics into external systems) and **ksqlDB** (for stream processing that enables executing continuous computations over an unbounded stream of events), KafkaESK can incrementally update in real-time as events arrive.<br> 
This powerful tool can be used to digest live data from IoT/smart sensor technology, machine performance, and even website activity such as clickstreams.
<br>

### Stretch Features Include:
- User ability to dynamically customize data charts directly on the dashboard
- Integrating a terminal into the dashboard GUI that will allow interaction with the ksqlDB CLI to: 
  - craft materialized views over streams 
  - receive real-time push updates 
  - pull current state on demand
  - transform, filter, aggregate, and join collections 
  - push and pull queries
- Caching of previously ran queries
- Time machine capability

## **Prerequisites:**
- Docker version 1.11 or later is [installed and running](https://docs.docker.com/engine/install/).
- At the time of release, KafkaESK operates in conjunction with the Confluent Platform(version 6.0.0). Use these installation methods to quickly get a Confluent Platform development environment up and running on your local machine.

  - [Quick Start for Apache Kafka using Confluent Platform (Local)](https://docs.confluent.io/platform/current/quickstart/ce-quickstart.html#ce-quickstart)
  - [Quick Start for Apache Kafka using Confluent Platform (Docker)](https://docs.confluent.io/platform/current/quickstart/ce-docker-quickstart.html#ce-docker-quickstart)
- [Git](https://git-scm.com/downloads)
- Internet connectivity

## **Demo:**
For demonstration purposes, mock data is used to simulate a live stream of HTTP requests that end in error from user clicks. The KafkaESK tool will track this activity and render the incoming messages on multiple graphs. 
<br>
<br>

<center> 

![](client/images/kafkaESK-demo4.gif)

</center>
<br>
1. Run the following command while inside the cloned repo directory:

```bash
docker run -d -p 8080:8080 -p 3333:3333 --name kafka kafkaesk
```

2. Open a terminal and launch the Confluent Platform using the Confluent CLI `confluent local services start` command. This command starts all of the Confluent Platform components, including Kafka, ZooKeeper, Schema Registry, HTTP REST Proxy for Kafka, Kafka Connect, ksqlDB, and Control Center.

```bash
confluent local services start
```
Your output should resemble:

```bash
Starting Zookeeper
Zookeeper is [UP]
Starting Kafka
Kafka is [UP]
Starting Schema Registry
Schema Registry is [UP]
Starting Kafka REST
Kafka REST is [UP]
Starting Connect
Connect is [UP]
Starting KSQL Server
KSQL Server is [UP]
Starting Control Center
Control Center is [UP]
```
3. Run the following command to start the ksqlDB CLI and connect to a ksqlDB server:
```bash
ksql
```
- After the ksqlDB CLI starts, your terminal should resemble the following:
```bash
    ===========================================
    =       _              _ ____  ____       =
    =      | | _____  __ _| |  _ \| __ )      =
    =      | |/ / __|/ _` | | | | |  _ \      =
    =      |   <\__ \ (_| | | |_| | |_) |     =
    =      |_|\_\___/\__, |_|____/|____/      =
    =                   |_|                   =
    =  Event Streaming Database purpose-built =
    =        for stream processing apps       =
    ===========================================

Copyright 2017-2020 Confluent Inc.

CLI v6.0.0, Server v6.0.0 located at http://localhost:8088

Having trouble? Type 'help' (case-insensitive) for a rundown of how things work!

ksql> 
```
- Open the `statements.ksql` file in a code editor and walk through each section via the ksqlDB CLI. 
- Copy and paste each statement into ksqlDB and run. Ensure each is successful. 

4. In a fresh terminal, run the producer script:
- Make sure you are in the KafkaESK directory, then run the script in your terminal:
```bash
./producer.sh
```
Troubleshoot: If you don't have permission to run the above command, run this command first:
```bash
chmod +x ./producer.sh
```
- Alternatively, you can copy and paste the contents of the `producer.sh` file into the terminal and run it:
```bash
kafka-producer-perf-test \
    --topic CLICKSTREAM_CODES \
    --throughput 2 \
    --producer-props bootstrap.servers=localhost:9092 \
    --payload-file server/cmd/ksql/error_data.json \
    --num-records 1000 &
```
1. Run the start script:
``` bash 
npm start
```

## **Connect from an External Source:**
Create connections from within ksqlDB by utilizing the Apache Kafka built-in framework, [Kafka Connect](https://docs.confluent.io/platform/current/connect/index.html), to integrate systems by both pulling data into Kafka and pushing it downstream.
<br>

Resources:

- [Why Kafka Connect?](https://confluent.buzzsprout.com/186154/1265780-why-kafka-connect-ft-robin-moffatt)
- An externally hosted list of connectors is maintained by Confluent at the [Confluent Hub](https://www.confluent.io/hub/). 
- Checkout other integration tools within the Kafka [ecosystem](https://cwiki.apache.org/confluence/display/KAFKA/Ecosystem).  

### **How to Customize:**
Then, do complex property graph analysis by cleansing and preparing the data with ksqlDB and stream it to KafkaESK. You can also calculate rolling aggregates by building tables from the streams directly in ksqlDB. 
<br>

Cleansing and Preparing within KafkaESK Checklist:
- [ ] edit the producer script 
- [ ] edit the consumer script
- [ ] replace `error_data.json` with any static/mock data to test 
- [ ] edit `statements.sql` to reflect your streams and tables
- [ ] in `server.js`, replace all variable names, group IDs, and topic names within the socket connection. This way, the Kafka Consumer can consume the intended messages.
  
```javascript
const consumer = kafka.consumer({
    groupId: "test-group", 
    fromBeginning: true,
  });
  consumer_404.connect();
  consumer_404.subscribe({ topic: "your-topic" });
  consumer_404.run({
    eachMessage: async ({ topic, partition, message }) => {
      socket.broadcast.emit("your-topic", message.value.toString()); 
    },
  });
```
- [ ] in each component that live in the `client` directory, replace within the socket event listeners the correct event name. (The event name can be referenced from `server.js`. They should be the corresponding topic names.)

```javascript
  socket.on('your-topic', (data) => { 
  })
```

## **Contributors:**

Ai Mi Bui | Brooke Luro | Chelsea Harris | Spencer Flohr

### **How to Contribute:**
We are happy to have contributions, whether for trivial cleanups or big new features!
### Reporting an Issue:
Reporting potential issues are more than welcome as a significant contribution to the project. All bugs, tasks, or enhancements are tracked as [GitHub issues](https://github.com/oslabs-beta/kafkaESK/issues). Issues that may be a good start for first-time contributors are labeled with "good first issue".<br><br>
If you have a question or simply are not sure if it is really an issue or not, please [contact us]() first before creating a new ticket. 
### Becoming a Committer:
We are always interested in adding new contributors. What we look for is a series of contributions, good taste, and an ongoing interest in the project. KafkaESK considers the following guidelines for promoting new committers:
- Made significant contributions in areas such as design, code, and/or documentation. The following are some examples (list not exclusive):
  - Fixed critical bugs (including performance improvements).
  - Made major tech-debt cleanup.
  - Made major documentation improvements.

## License
MIT License
