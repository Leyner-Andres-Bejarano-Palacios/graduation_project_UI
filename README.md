# angular_docker_frontend
Project created as a frotend adding docker to the angular guide project to make it more portable, the angular guide project is [this](https://youtu.be/G46fjVzQ7BQ?t=1968).

## how to make it run



1. Install [Docker](https://docs.docker.com/engine/install/).

2. Get the docker image that we will use as a angular remote server executing the command below

    1. execute the command "docker pull trion/ng-cli-karma"
    2. just for information, you can omit this, this is the source of the [image](https://hub.docker.com/r/trion/ng-cli-karma).

3. Something particular that we will do with this image is mount a docker [volume](https://docs.docker.com/storage/volumes/) using a folder from our local machine, pwd in the command below is a bash command to print our current location.

