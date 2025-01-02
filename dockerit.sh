sudo docker build --tag fantasy_sim .
echo "Current Docker images:"
sudo docker ps -a
sudo docker run -it fantasy_sim
