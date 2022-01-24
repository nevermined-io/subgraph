#!/usr/bin/env bash

for d in ./subgraphs/*
do
    (cd "$d" && yarn)
done