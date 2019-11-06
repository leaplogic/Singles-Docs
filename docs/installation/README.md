 # Local Environment
 
This section will cover setup and requirements for Singles in your local environment. Before you begin, make sure your system meets all the requirements for local development.

## Requirements

### Docker
Singles uses [Docker](https://www.docker.com/get-started) to create the server environment to develop your project. First you will need to download the client docker software. 

### PHP & Composer
Singles relies on [Composer](https://getcomposer.org/) as a dependency manager and requires at least PHP 5.3.2+ to run.

For more information on installing PHP & Composer, see the following guides:

- [Windows ](https://www.jeffgeerling.com/blog/2018/installing-php-7-and-composer-on-windows-10)
- [Mac ](https://duvien.com/blog/installing-composer-mac-osx)
- [Ubuntu ](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-composer-on-ubuntu-18-04)

:::tip TIP
Not interested in installing PHP & Composer locally? Check out the [FAQ](/faq/craft3/#bypassing-installing-php-composer-locally) on how to use Composer on the docker instance to bypass this.
:::

## Installing
Singles can be downloaded or cloned from the [Singles repository](https://github.com/leaplogic/singles/tree/v3)

```bash
git clone https://github.com/leaplogic/singles.git
```

::: warning NOTE
Make sure you have the `v3` branch checked out by running `git checkout v3` in your repository's working directory.
:::

##  Containers
Singles relies on Docker containers for standardization between the different computing environments. 

Any time you are working with a Singles repository, you'll need to make sure you can build, start and stop containers. This section will cover the various container-related commands you'll need to be familiar with to get up and running.

### Building the containers
To build the containers the first time, run
```bash
docker-compose up --build -d    
```

This will build the instances using the respective Dockerfiles for each one. If all of the containers build successfully, it should also start up the containers.

::: warning BE ADVISED
The ports `3306` and `80` are default ports for MySQL and most web servers. These ports can often be in use by other local programs. Check out the [FAQ](/faq/craft3/#ports-in-use) if you're encountering problems with your ports.
:::

### Starting up containers 
To start the containers, run
```bash
docker-compose up -d   
```
The `-d` argument is optional. It starts the container in detached mode which allows the containers to run in the background.

::: warning NOTE
Sometimes, not all of the containers successfully start. You can check by running `docker ps`. To fix it, run the above command again.
:::


### Stopping the containers
To stop the containers, run
```bash
docker-compose down
```

### Bashing into a container
Sometimes, it is necessary to have shell access in a container. You can do that, by running 

```bash
docker exec -it singles_php_1 bash
```

where `singles_php_1` is the `NAME` of your singles_php image. To see a list of your running docker containers, you can run

```bash
docker ps
```

For more information on the `docker exec` command, check out the [Docker docs](https://docs.docker.com/engine/reference/commandline/exec/).

## Database
needs content
 - explain how singles ships with a starting database with a default user and some other features.
 - explain how the variables in docker-compose.yml correlate with the db settings in craft and how to change them
 ---- 

Edit the `docker-composer.yml` file in the root folder updating the database variables. *You don't have to changes these but you can as necessary*

```yml
MYSQL_ROOT_PASSWORD=secret
MYSQL_DATABASE=singles
MYSQL_USER=root
MYSQL_PASSWORD=secret
```

### Update Craft Database Config
Edit the `.env.php` file in the root of the project. Leave the `ENVIRONMENT` as `dev` for local development.  The database credentials are the same defaults as the Docker `.env` file defaults out of the box.

Since we are using Craft CMS 3, you will need to add a random generated user key with letters and numbers. Read more about it in the [Craft Docs](https://docs.craftcms.com/v3/installation.html#step-3-set-a-security-key).

```php
DB_DRIVER="mysql"
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

::: tip NOTE
`mysql-server` represents the Docker MYSQL container name that  what is used as the automatic DNS resolved name. Read more in the [Docker docs](https://docs.docker.com/network/bridge/).
:::


## Production Environment
This section covers how to set up Singles in a production environment. It's assumed that this environment is unix-based.

### Server Requirements
Craft 3 has a list of [basic requirements](https://docs.craftcms.com/v3/requirements.html) that must be met.

needs content
- define any Singles specific requirements
- explain server setup step-by-step as thoroughly as possible
- should we add a staging environment and the needed documentation for that?
---


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