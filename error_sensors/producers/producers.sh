kafka-producer-perf-test \
    --topic ERROR_SENSORS \
    --throughput 2 \
    --producer-props bootstrap.servers=localhost:9092 \
    --payload-file ../data/error_sensors.json \
    --num-records 1000 &