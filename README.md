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
    3.  docker run --rm -ti -v $PWD:/usr/src --network graduation_network --link sonarqube newtmitch/sonar-scanner \
    sonar-scanner \
    -Dsonar.host.url=http://sonarqube:9000 \
    -Dsonar.login=6792eb48e8f89f43168abb332df99a140994e574 \
    -Dsonar.projectKey=angular_graduation_frontend \
    -Dsonar.projectVersion=1 \
    -Dsonar.projectBaseDir=/usr/src \
    -Dsonar.sources=.

3. Code coverage of angular project
    1.  [guide](https://www.youtube.com/watch?v=fbRF2wVKbvM)

# TROUBLE-SHOOTING

1. Error: ENOSPC: System limit for number of file watchers reached, watch
    1.  https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached

# TO-FO

1. test
    1.  min 13 const has the value that they are suppose to have [reference](https://youtu.be/1mgB-aCXG-k?t=818)
    2.  min 14 testing the functions
    3.  min 18 sif they are callin certain method using the spy, he even mention calling an api, calling databases, dannmmm thats amazing)
    4.  avoid certain libraries to get into PROD (because test is for local enviroment and deployment pipeline)

