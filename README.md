# KafkaESK
## **About:**

## **Prerequisites:**
- At the time of release, KafkaESK operates in conjunction with the Confluent Platform(version 6.0.0). Use these installation methods to quickly get a Confluent Platform development environment up and running on your local machine.

  - [Quick Start for Apache Kafka using Confluent Platform (Local)](https://docs.confluent.io/platform/current/quickstart/ce-quickstart.html#ce-quickstart)
  - [Quick Start for Apache Kafka using Confluent Platform (Docker)](https://docs.confluent.io/platform/current/quickstart/ce-docker-quickstart.html#ce-docker-quickstart)
- [Git](https://git-scm.com/downloads)
- Internet connectivity

## **Demo:**
For demonstration purposes, mock data is used to simulate a live stream of HTTP requests that end in error from user clicks. The KafkaESK tool will track this activity and render the incoming messages on multiple graphs. 

1. Install all NPM dependencies by running the following command while inside the cloned repo directory:

```bash
npm install
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
Troubleshoot: If you don't have permission to run the above command, run the this command first:
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
Kafka has a built-in framework called [Kafka Connect](https://docs.confluent.io/platform/current/connect/index.html) for writing sources and sinks that either continuously ingest data into Kafka or continuously ingest data in Kafka into external systems. The connectors themselves for different applications or data systems are federated and maintained separately from the main code base. An externally hosted list of connectors is maintained by Confluent at the [Confluent Hub](https://www.confluent.io/hub/). 

Kafka Connect is how you would do streaming integration between other systems and Kafka. Where you got data upstream that you want to get in from somewhere where its stored or being produced you want to get that into a Kafka topic. you got data in a kafka topic and you want to get it downstreamed to somewhere you want to store it. it's a framework and does all of the tricky things about that integration for you. It's just configuration fiiles. For a developer, you want to get data in from somewhere, you set up a json file that says get the data from this place and stream it into this topic. you want to get data from the topic, you say json file from this topic down to this place

### **How to Customize:**


## **Contributors:**

Ai Mi Bui | Brooke Luro | Chelsea Harris | Spencer Flohr

### **How to Contribute:**
We are happy to have contributions, whether for trivial cleanups or big new features!
### Reporting an Issue:
Reporting potential issues is more than welcome as a signifincant contribution to the project. All bugs, tasks or enhancements are tracked as [GitHub issues](https://github.com/oslabs-beta/kafkaESK/issues). Issues which may be a good start for first-time contributors are labeled with "good first issue".<br><br>
If you have a question or simply are not sure if it is really an issue or not, please [contact us]() first before creating a new ticket. 
### Becoming a Commiter:
We are always interested in adding new contributors. What we look for is a series of contributions, good taste, and an ongoing interest in the project. KafkaESK considers the following guidelines for promoting new commiters:
- Made significant contributions in areas such as design, code and/or documentation. The follow are some examples (list not exclusive):
  - Fixed critical bugs (including performance improvements).
  - Made major tech-debt cleanup.
  - Made major documentation improvements.
