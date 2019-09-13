# Introduction

Craft Singles provides a basis to quickly spin up a Craft CMS project for Leap Logic clients.

## Local Development
Singles uses [Docker](https://www.docker.com/get-started) to create the server environment to develop your project. First you will need to download the client docker software.

#### Database
Edit the `docker-composer.yml` file in the root folder updating the database variables. *You don't have to changes these but you can if you must*

```
    MYSQL_ROOT_PASSWORD=secret
    MYSQL_DATABASE=singles
    MYSQL_USER=root
    MYSQL_PASSWORD=secret
```

#### Build containers
```bash
    docker-compose up --build -d    
```

#### Start up containers **you may need to run twice after first build*
```bash
    docker-compose up -d   
```

#### Stop containers
```bash
    docker-compose down
```

#### Update Craft Database Config
Edit the `.env.php` file in the root of the project. Leave the `ENVIRONMENT` as `dev` for local development.  The database credentials are the same defaults as the Docker `.env` file defaults, *unless you changed them* 😉 . 
Since we are using Craft CMS 3 you will need to add a random generated user key with letters an numbers.

```PHP

    DB_DRIVER="mysql"
    // mysql-server represents the Docker MYSQL container name.
    DB_SERVER="mysql-server"
    DB_USER="docker"
    DB_PASSWORD="secret"
    DB_DATABASE="app"
    DB_SCHEMA="public"
    DB_TABLE_PREFIX=""
    DB_PORT="3306"

    ENVIRONMENT="dev"
    SECURITY_KEY="########################"

```

## Production
In production you will need to add an `.env` file to the root folder of the site and update the `ENVIRONMENT` & database variables for the production environment. 

```PHP

    DB_DRIVER="mysql"
    // localhost most likely used for the server database
    DB_SERVER="localhost"
    DB_USER="database-user"
    DB_PASSWORD="database-password"
    DB_DATABASE="database-name"
    DB_SCHEMA="public"
    DB_TABLE_PREFIX=""
    DB_PORT="3306"
    // 'staging' or 'production'
    ENVIRONMENT="production"
    SECURITY_KEY="########################"

```