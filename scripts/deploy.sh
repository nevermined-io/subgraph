#!/usr/bin/env bash

for d in ./subgraphs/*
do
    (cd "$d" && graph deploy -l v0.0.1 --node http://localhost:9020/ --ipfs http://localhost:5001 neverminedio/$(basename "$d"))
done