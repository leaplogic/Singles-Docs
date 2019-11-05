---
title: FAQ (latest)
---

# Common Issues & Workarounds
This section covers common issues and workarounds for [Singles v3](https://github.com/leaplogic/singles/tree/v3). Singles v2 FAQ can be found [here](/faq/craft2/).

## Docker Build Errors
needs content

## Ports in Use
By default, `docker-compose.yml` configures the web server and MySQL services to run locally on the default ports. It's not uncommon for other local programs and services to block up these ports and it's often necessary to point the docker containers to interface with other open local ports.

First, let's look at a snippet of `docker-compose.yml` where the ports are being set.

``` yml{6,17}
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


## Bypassing PHP & Composer locally 

You can bypass relying on PHP & Composer locally by bashing into the PHP instance and installing the dependencies on the machine. This is especially useful if you're having trouble installing/configuring PHP on Windows or don't want to enable some required PHP libraries required for Composer.

To begin, make sure the containers are up and running 

```bash
docker ps
```

which should output your running containers and should look something like

```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES
fb375a8fc127        singles_php         "docker-php-entrypoi…"   5 seconds ago       Up 3 seconds        0.0.0.0:9000->9000/tcp              singles_php_1
2ebf3ce48448        mysql:5.7           "docker-entrypoint.s…"   5 seconds ago       Up 3 seconds        33060/tcp, 0.0.0.0:3306->3306/tcp   singles_mysql-server_1
6aaa917fcdf0        singles_nginx       "nginx"                  5 seconds ago       Up 3 seconds        0.0.0.0:80->80/tcp                  singles_nginx_1
```

Once you've verified your containers are running, you can bash directly into the php service by running

```bash
docker exec -it singles_php_1 bash
```

where `singles_php_1` is the `NAME` of your singles_php image.

After bashing into the instance, by default, you should be dropped into the document root of singles, `/var/www/`. From there, install the dependencies laid out in the composer.json by running

```bash
composer install
```

After installation completes, you can exit the shell.
```bash
exit
```

Composer has now installed the required packages and set up autoloading that's required for Singles to run!