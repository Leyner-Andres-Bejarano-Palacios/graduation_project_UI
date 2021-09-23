# angular_docker_frontend
Project created as a frotend adding docker to the angular guide project to make it more portable, the angular guide project is [this](https://youtu.be/G46fjVzQ7BQ?t=1968).

## how to make it run



1. Install [Docker](https://docs.docker.com/engine/install/).

2. Get the docker image that we will use as a angular remote server executing the command below

    1. execute the command "docker pull trion/ng-cli-karma"
    2. just for information, you can omit this, this is the source of the [image](https://hub.docker.com/r/trion/ng-cli-karma).

3. Something particular that we will do with this image is mount a docker [volume](https://docs.docker.com/storage/volumes/) using a folder from our local machine, pwd in the command below is a bash command to print our current location.In our case the project name will be graduation-frontend. The third command "ng serve" will get the angular app up and running

    1. docker run -u $(id -u) --rm -v "$PWD":/app trion/ng-cli-karma ng new  graduation-frontendcd 

    2. cd graduation-frontendcd

    3. docker run -p 4200:4200 --network graduation_network --name graduation-frontend -u $(id -u) --rm -v "$PWD":/app trion/ng-cli-karma ng serve --host 0.0.0.0

## how we develop(ed) the system

1. [min 47:34](https://youtu.be/G46fjVzQ7BQ?t=2854) In the case of the video guide, they are creating an angular project with four funcionalities, create, list all, list a single one and update. they are doing it for employees we will do it with task but from the frontend side it should be pretty similar 


2. [min 52:15](https://youtu.be/G46fjVzQ7BQ?t=3135) Adding bootstrap to the project, I will do it in the first way

3. [min 52:15](https://youtu.be/G46fjVzQ7BQ?t=3135) Creating the task typescript class 
    1.  I thought ng g class was a mistake, but no, "ng g class" is another way of saying "ng generate class" [reference](https://angular.io/cli/generate)
    2.  docker run -u $(id -u) --rm -v "$PWD":/app trion/ng-cli-karma ng g class task

4. [min 1:01:01](https://youtu.be/G46fjVzQ7BQ?t=3135) Creating the task-list component
    1.  docker run -u $(id -u) --rm -v "$PWD":/app trion/ng-cli-karma ng g c task-list

5. [min 1:14:01](https://youtu.be/G46fjVzQ7BQ?t=3135) Creating the task-list component
    1.  docker run -u $(id -u) --rm -v "$PWD":/app trion/ng-cli-karma ng g s task

6. [min 1:23:01](https://youtu.be/G46fjVzQ7BQ?t=3135) Getting data from backend
    1.  the part of getting data from database we will do it for the analitycal part of the project
    2.  so for getting data from the backend, I will need to put a tag in the docker image and put it in the graduation_network

7. [min 1:25:01](https://youtu.be/G46fjVzQ7BQ?t=3135) looks like I will need to have a different angular component for routing
    1.  according to [documentation](https://angular.io/tutorial/toh-pt5).
    2.  execute docker run -u $(id -u) --rm -v "$PWD":/app trion/ng-cli-karma ng generate module app-routing --flat --module=app
    3.  The rest of the modifications can be found in the same commit where these changes where added

8. [min 1:46:01](https://youtu.be/G46fjVzQ7BQ?t=3135) Adding the create-task component, including the data-biding concept.
    1.  creating component
    2.  docker run -u $(id -u) --rm -v "$PWD":/app trion/ng-cli-karma ng g c create-task

## visualizing every task

1. first I want to see what happen if I return a hashmap in postman
2. now let-s see if I can make a list out of that json-like json
    1.  docker run -u $(id -u) --rm -v "$PWD":/app trion/ng-cli-karma ng g c taskmap-list

# unittesting the frontend

1. initially executing unit-test
    1.  [guide](https://www.youtube.com/watch?v=1mgB-aCXG-k)
    2.   docker run -p 9876:9876 --network graduation_network --name graduation-frontend -u $(id -u) --rm -v "$PWD":/app trion/ng-cli-karma ng test

2. Analizing angular project using sonarQueue
    1.  [guide](https://www.youtube.com/watch?v=3dLVHViflys)
    2.  using sonar to analize a project like angular, without [maven](https://github.com/newtmitch/docker-sonar-scanner)
    3.  docker run --name sonarqube-non-maven \
    -p 9000:9000 \
    --rm -v "$PWD":/app \
    -v "$(pwd)/sonarqube_data":/opt/sonarqube/data \
    -v "$(pwd)/sonarqube_extensions":/opt/sonarqube/extensions \
    -v "$(pwd)/sonarqube_logs":/opt/sonarqube/logs \
    --network graduation_network \
    -d newtmitch/sonar-scanner

3. Code coverage of angular project
    1.  [guide](https://www.youtube.com/watch?v=fbRF2wVKbvM)
    2.  
docker run --name sonarqube-non-maven -d newtmitch/sonar-scanner
    99.  ./app/springboot-backend/mvnw  sonar:sonar -Dsonar.host.url=http://sonarqube:9000   -Dsonar.login=a5fd5b48e4e44e507d6068ee576b5bf82d94c207