# kafka-topics --create --topic ERROR_STREAM --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-topics --create --topic CLICKSTREAM_CODES --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

kafka-console-consumer --bootstrap-server localhost:9092 --topic CLICKSTREAM_CODES --from-beginning

kafka-producer-perf-test \
    --topic CLICKSTREAM_CODES \
    --throughput 2 \
    --producer-props bootstrap.servers=localhost:9092 \
    --payload-file server/cmd/ksql/error_data.json \
    --num-records 1000 &

