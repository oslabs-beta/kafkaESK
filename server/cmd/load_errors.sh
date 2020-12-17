kafka-topics --create --topic ERROR_LOG --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-topics --create --topic window404_topic --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-topics --create --topic window405_topic --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-topics --create --topic window406_topic --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-topics --create --topic window407_topic --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-producer-perf-test \
    --topic ERROR_LOG \
    --throughput 2 \
    --producer-props bootstrap.servers=localhost:9092 \
    --payload-file ./ksql/error-data.json \
    --num-records 1000 &
