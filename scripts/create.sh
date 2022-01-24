#!/usr/bin/env bash

for d in ./subgraphs/*
do
    (cd "$d" && graph create --node http://localhost:9020/ neverminedio/$(basename "$d"))
done