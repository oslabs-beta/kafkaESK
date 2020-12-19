# testing script; produce to the ERROR_LOG topic 1000 error log messasges from error-data 
kafka-producer-perf-test \
    --topic ERROR_LOG \
    --throughput 2 \
    --producer-props bootstrap.servers=localhost:9092 \
    --payload-file ./ksql/error-data.json \
    --num-records 1000 &