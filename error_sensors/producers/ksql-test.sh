#!/bin/bash
ksql http://localhost:8088 <<< "SHOW STREAMS;"