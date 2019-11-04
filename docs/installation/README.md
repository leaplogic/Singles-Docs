# Installation
Singles can be downloaded or cloned from the [Singles repository](https://github.com/leaplogic/singles/tree/v3).  Before you begin, make sure your system has all the necessary requirements for local development.

## Local Environment

### Requirements
Singles uses [Docker](https://www.docker.com/get-started) to create the server environment to develop your project. First you will need to download the client docker software.

needs content (also need to explain composer set up here)



### Database
Edit the `docker-composer.yml` file in the root folder updating the database variables. *You don't have to changes these but you can as necessary*

```
    MYSQL_ROOT_PASSWORD=secret
    MYSQL_DATABASE=singles
    MYSQL_USER=root
    MYSQL_PASSWORD=secret
```

###  Containers
needs content (explanation)

#### Building the containers
To build the containers the first time, run
```bash
    docker-compose up --build -d    
```

#### Starting up containers 
To start the containers, run
```bash
    docker-compose up -d   
```
The `-d` argument is optional. It starts the container in detached mode which allows the containers to run in the background.

::: warning NOTE
You may need to run twice after first build
:::


#### Stop containers
To stop the containers, run
```bash
    docker-compose down
```

### Update Craft Database Config
Edit the `.env.php` file in the root of the project. Leave the `ENVIRONMENT` as `dev` for local development.  The database credentials are the same defaults as the Docker `.env` file defaults out of the box.

Since we are using Craft CMS 3 you will need to add a random generated user key with letters and numbers.

```PHP

    DB_DRIVER="mysql"
    // mysql-server represents the Docker MYSQL container name.
    DB_SERVER="mysql-server"
    DB_USER="docker"
    DB_PASSWORD="secret"
    DB_DATABASE="app"
    DB_SCHEMA="public"
    DB_TABLE_PREFIX="craft"
    DB_PORT="3306"

    ENVIRONMENT="dev"
    SECURITY_KEY="########################"

```

::: danger BE ADVISED
The port `3306` is the default port for MySQL and is often is in use by other local programs. Check out the [FAQ](/faq/craft3/#ports-in-use) if you're encountering problems with your ports.
:::

## Production Environment

### Server Requirements
Craft 3 has a list of [basic requirements](https://docs.craftcms.com/v3/requirements.html) that must be met.
needs content (any Singles specific requirements here)

### Environment Variables
In production you will need to add an `.env` file to the root folder of the site and update the `ENVIRONMENT` & database variables for the production environment. 

```PHP

    DB_DRIVER="mysql"
    // localhost most likely used for the server database
    DB_SERVER="localhost"
    DB_USER="database-user"
    DB_PASSWORD="database-password"
    DB_DATABASE="database-name"
    DB_SCHEMA="public"
    DB_TABLE_PREFIX="craft"
    DB_PORT="3306"
    // 'staging' or 'production'
    ENVIRONMENT="production"
    SECURITY_KEY="########################"

```

## Common Issues
needs content