kafka-topics --create --topic error_count --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-topics --create --topic 404_count --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-topics --create --topic 405_count --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-topics --create --topic 406_count --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-topics --create --topic 407_count --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-producer-perf-test \
    --topic error_count \
    --throughput 2 \
    --producer-props bootstrap.servers=localhost:9092 \
    --payload-file server/cmd/ksql/error-count-data.json \
    --num-records 1000 &
