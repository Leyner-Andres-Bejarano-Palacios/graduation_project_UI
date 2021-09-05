# angular_docker_frontend
Project created as a frotend adding docker to the angular guide project to make it more portable, the angular guide project is [this](https://youtu.be/G46fjVzQ7BQ?t=1968).

## how to make it run



1. Install [Docker](https://docs.docker.com/engine/install/).

2. Get the docker image that we will use as a angular remote server executing the command below

    1. execute the command "docker pull trion/ng-cli-karma"
    2. just for information, you can omit this, this is the source of the [image](https://hub.docker.com/r/trion/ng-cli-karma).

3. Something particular that we will do with this image is mount a docker [volume](https://docs.docker.com/storage/volumes/) using a folder from our local machine, pwd in the command below is a bash command to print our current location.

In our case the project name will be graduation-frontend.

The third command "ng serve" will get the angular app up and running

    1. docker run -u $(id -u) --rm -v "$PWD":/app trion/ng-cli-karma ng new  graduation-frontendcd 

    2. cd graduation-frontendcd

    3. docker run -p 4200:4200 -u $(id -u) --rm -v "$PWD":/app trion/ng-cli-karma ng serve --host 0.0.0.0

## how we develop(ed) the system

1. [min 47:34](https://youtu.be/G46fjVzQ7BQ?t=2854) In the case of the video guide, they are creating an angular project with four funcionalities, create, list all, list a single one and update. they are doing it for employees we will do it with task but from the frontend side it should be pretty similar 


2. [min 52:15](https://youtu.be/G46fjVzQ7BQ?t=3135) Adding bootstrap to the project, I will do it in the first way


