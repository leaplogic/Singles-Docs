# Introduction

Craft Singles provides a basis to quickly spin up a Craft CMS project for Leap Logic clients.

## Local Development
Singles uses [Docker](https://www.docker.com/get-started) to create the server environment to develop your project. First you will need to download the client docker software.

#### Database
Edit the `.env` file in the Docker folder updating the database variables. *You don't have to changes these but you can if you must*

```
    MYSQL_ROOT_PASSWORD=secret
    MYSQL_DATABASE=singles
    MYSQL_USER=root
    MYSQL_PASSWORD=secret
```

#### Build containers
```bash
    cd docker
    docker-compose up --build -d    
```

#### Start up containers **you may need to run twice after first build*
```bash
    cd docker
    docker-compose up -d   
```

#### Stop containers
```bash
    cd docker
    docker-compose down
```

#### Update Craft Database Config
Edit the `.env.php` file in the root of the project. Leave the `CRAFT_ENVIRONMENT` as `local` for local development.  The database credentials are the same defaults as the Docker `.env` file defaults, *unless you changed them* 😉 . 

```PHP
    $craftEnvVars = array(
        'CRAFT_ENVIRONMENT' => 'local',
        // mysql-server represents the Docker MYSQL container name.
        'DB_HOST' => 'mysql-server',
        'DB_NAME' => 'singles',
        'DB_USER' => 'root',
        'DB_PASS' => 'secret',
```

## Production
In production you will need to add an `.env.php` file to the root folder of the site and update the `CRAFT_ENVIRONMENT` & database variables for the production environment. 

```PHP
    $craftEnvVars = array(
        // 'staging' or 'production'
        'CRAFT_ENVIRONMENT' => 'production',
        // localhost most likely used for the server database
        'DB_HOST' => 'localhost',
        'DB_NAME' => 'database-name',
        'DB_USER' => 'database-user',
        'DB_PASS' => 'database-password',
```