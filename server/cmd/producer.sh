kafka-producer-perf-test \
    --topic CLICKSTREAM_CODES \
    --throughput 2 \
    --producer-props bootstrap.servers=localhost:9092 \
    --payload-file server/cmd/ksql/error_data.json \
    --num-records 1000 &