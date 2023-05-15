# devops II

Documentary on how to install the project and launch it:

1- clone the project
2- do the command yarn or npm install in your terminal
3- cd into the folder lottery-chart and then into templates 
4- kubectl apply -f mongo-service.yaml
5- kubectl apply -f app-service.yaml
6- kubectl apply -f client-service.yaml
7- kubectl get services (to see the services running)
8- minikube service client-service (Be carefull to use the service name created) and everything should be running clean
