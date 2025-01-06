#!/bin/bash
sudo docker build --tag fantasy-sim .

./dockerAwait.sh & sudo docker run -it -p 8080:8080 fantasy-sim

#./dockerAwait.sh

# sudo docker build --tag fantasy-sim . && sudo docker run -it -p 8080:8080 fantasy-sim
