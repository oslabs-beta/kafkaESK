#create a master topic ERROR_LOG

kafka-topics --create --topic ERROR_LOG --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-topics --create --topic 404_ERRORS --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-topics --create --topic 405_ERRORS --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-topics --create --topic 406_ERRORS --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-topics --create --topic 407_ERRORS --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-producer-perf-test \
    --topic ERROR_LOG \
    --throughput 2 \
    --producer-props bootstrap.servers=localhost:9092 \
    --payload-file server/cmd/ksql/error-data.json \
    --num-records 1000 &

   

