---
title: FAQ
sidebar: auto
---

# Frequently Asked Questions
This section covers frequently asked questions and problems for [Singles v3](https://github.com/leaplogic/singles/tree/v3). Singles v2 FAQ can be found [here](/faq/craft2/).

## Docker Build Errors
needs content

## Ports in Use
By default, `docker-compose.yml` configures the web server and MySQL services to run locally on the default ports. It's not uncommon for other local programs and services to block up these ports and it's often necessary to point the docker containers to interface with other open local ports.

First, let's look at a snippet of `docker-compose.yml` where the ports are being set.

``` yml{7,18}
nginx:
        build: "./docker/nginx"
        networks:
            - llnet
        ports:
            - 80:80
        volumes:
            - ./docker/nginx/nginx.conf:/etc/nginx/nginx.conf
            - ./log:/var/log/nginx
            - ./web:/var/www/web:cached

    mysql-server:
        image: mysql:5.7
        networks:
            - llnet
        ports:
            - "3306:3306"
```

To use a different port locally, change the first number in the port assignment from

``` yml
ports: 
    "3306:3306"
```
to
``` yml
ports: 
    "3310:3306"
```

In this example, the local port was changed to `3310` but, you can use any port you prefer. You can do the same thing for the nginx service port configuration.