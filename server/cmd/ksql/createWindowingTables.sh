CREATE STREAM ERROR_STREAM
(
    CODE INTEGER
)
WITH (
    KAFKA_TOPIC = 'ERROR_LOG',
    VALUE_FORMAT = 'JSON'
);


CREATE TABLE window404_topic 
WITH (
    KAFKA_TOPIC = 'window404_topic',
    VALUE_FORMAT = 'JSON'
) AS
SELECT 
    CODE, COUNT(*)
FROM ERROR_STREAM WINDOW TUMBLING (SIZE 60 SECONDS)
WHERE CODE=404
GROUP BY CODE EMIT CHANGES;


CREATE TABLE window405_topic 
WITH (
    KAFKA_TOPIC = 'window405_topic',
    VALUE_FORMAT = 'JSON'
) AS
SELECT 
    CODE, COUNT(*)
FROM ERROR_STREAM WINDOW TUMBLING (SIZE 60 SECONDS)
WHERE CODE=405
GROUP BY CODE EMIT CHANGES;


CREATE TABLE window406_topic 
WITH (
    KAFKA_TOPIC = 'window406_topic',
    VALUE_FORMAT = 'JSON'
) AS
SELECT 
    CODE, COUNT(*)
FROM ERROR_STREAM WINDOW TUMBLING (SIZE 60 SECONDS)
WHERE CODE=406
GROUP BY CODE EMIT CHANGES;


CREATE TABLE window407_topic 
WITH (
    KAFKA_TOPIC = 'window407_topic',
    VALUE_FORMAT = 'JSON'
) AS
SELECT 
    CODE, COUNT(*)
FROM ERROR_STREAM WINDOW TUMBLING (SIZE 60 SECONDS)
WHERE CODE=407
GROUP BY CODE EMIT CHANGES;