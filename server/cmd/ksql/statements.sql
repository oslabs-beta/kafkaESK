---------------------------------------------------------------------------------------------------
-- Create sources:
---------------------------------------------------------------------------------------------------

CREATE STREAM CLICKSTREAM_CODES (
        CODE INTEGER,
        definition varchar
    ) with (
        kafka_topic = 'CLICKSTREAM_CODES',
        value_format = 'json'
    );

-- If topic was not created ahead of time for the stream, it will result in an error
-- However, ksqlDB gives a suggestion that wraps the creation of the topic, paritions, and replication in one

-- CREATE STREAM CLICKSTREAM_CODES (
--   CODE INTEGER, DEFINITION STRING
--   ) WITH (
--     KAFKA_TOPIC='CLICKSTREAM_CODES', 
--     PARTITIONS=2, 
--     REPLICAS=1, 
--     VALUE_FORMAT='json');

---------------------------------------------------------------------------------------------------
-- Build materialized table views:
---------------------------------------------------------------------------------------------------

CREATE TABLE 404_ERRORS_PER_MIN AS
    SELECT
        CODE,
        TIMESTAMPTOSTRING(WINDOWSTART, 'HH:mm:ss') as WINDOW_START,
        COUNT(CODE) AS COUNT
    FROM CLICKSTREAM_CODES WINDOW TUMBLING (size 10 seconds)
    WHERE CODE = 404
    GROUP BY CODE EMIT CHANGES;

-- Query with statement below to see the actual seconds (does not include the default WINDOWSTART/END):
-- SELECT TIMESTAMPTOSTRING(ROWTIME, 'HH:mm:ss'), CODE, COUNT
--       FROM 404_ERRORS_PER_MIN EMIT CHANGES;

CREATE TABLE 405_ERRORS_PER_MIN AS
    SELECT
        CODE,
        TIMESTAMPTOSTRING(WINDOWSTART, 'HH:mm:ss') as WINDOW_START,
        COUNT(CODE) AS COUNT
    FROM CLICKSTREAM_CODES WINDOW TUMBLING (size 10 seconds)
    WHERE CODE = 405
    GROUP BY CODE EMIT CHANGES;

-- SELECT TIMESTAMPTOSTRING(ROWTIME, 'HH:mm:ss'), CODE, COUNT
--       FROM 405_ERRORS_PER_MIN EMIT CHANGES;

CREATE TABLE 406_ERRORS_PER_MIN AS
    SELECT
        CODE,
        TIMESTAMPTOSTRING(WINDOWSTART, 'HH:mm:ss') as WINDOW_START,
        COUNT(CODE) AS COUNT
    FROM CLICKSTREAM_CODES WINDOW TUMBLING (size 10 seconds)
    WHERE CODE = 406
    GROUP BY CODE EMIT CHANGES;

-- SELECT TIMESTAMPTOSTRING(ROWTIME, 'HH:mm:ss'), CODE, COUNT
--       FROM 406_ERRORS_PER_MIN EMIT CHANGES;

CREATE TABLE 407_ERRORS_PER_MIN AS
    SELECT
        CODE,
        TIMESTAMPTOSTRING(WINDOWSTART, 'HH:mm:ss') as WINDOW_START,
        COUNT(CODE) AS COUNT
    FROM CLICKSTREAM_CODES WINDOW TUMBLING (size 10 seconds)
    WHERE CODE = 407
    GROUP BY CODE EMIT CHANGES;

-- SELECT TIMESTAMPTOSTRING(ROWTIME, 'HH:mm:ss'), CODE, COUNT
--       FROM 407_ERRORS_PER_MIN EMIT CHANGES;
