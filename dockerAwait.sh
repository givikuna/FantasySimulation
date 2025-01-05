#!/bin/bash
until nc -z localhost 8080; do
    sleep 0.1;
done;

ts-node run
