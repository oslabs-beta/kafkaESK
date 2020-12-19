
# underlying topic with all error_logs

kafka-topics --create --topic ERROR_LOG --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

# topic to which ksqlDB will produce rolling count of all 404 error_logs 

kafka-topics --create --topic 404_ERROR_COUNT --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

# topic to which ksqlDB will produce rolling count of all 405 error_logs 

kafka-topics --create --topic 405_ERROR_COUNT --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

# topic to which ksqlDB will produce rolling count of all 406 error_logs 

kafka-topics --create --topic 406_ERROR_COUNT --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092

# topic to which ksqlDB will produce rolling count of all 407 error_logs 

kafka-topics --create --topic 407_ERROR_COUNT --replication-factor 1 --partitions 1 --bootstrap-server localhost:9092