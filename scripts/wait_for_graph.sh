#!/bin/bash

RETRY_COUNT=0
HTTP_CODE=0
API_URL=http://localhost:9020

until [ $HTTP_CODE -eq 200 ] || [ $RETRY_COUNT -eq 240 ]; do
  HTTP_CODE=$(curl -s -o /dev/null -w ''%{http_code}'' -X OPTIONS $API_URL)
  if [ $HTTP_CODE -eq 200 ]; then
    break
  fi
  printf "Waiting for the graph node api to be running at $API_URL\n"
  sleep 10
  let RETRY_COUNT=RETRY_COUNT+1
done

if [ $HTTP_CODE -ne 200 ]; then
  echo "Waited for more than two minutes, but the graph node api is still not running"
  exit 1
fi
