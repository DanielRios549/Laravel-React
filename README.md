## About MiniCRM

MiniCRM is a web application made for study, which uses the following technologies:

- [Docker](https://www.docker.com/)
- [Laravel](https://laravel.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [ReactJS](https://reactjs.org/)
- [IneritaJS](https://inertiajs.com/)
- [ViteJS](https://vitejs.dev/)
- [Jest](https://jestjs.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)

---

## Project Setup

### In order to use the application, you need to setup the containers. First create them

```
docker compose create
```

### Now initialize them.

```
docker compose start
```

### Install the dependencies.

```
docker container exec minicrm-laravel composer install
```

### Create the database.

```
docker container exec minicrm-laravel php artisan migrate
```

## Stop the containers for this setup.

```
docker compose stop
```

## Install yarn globally.

```
npm install yarn -g
```

## Install the Node dependencies for the frontend application.

```
yarn install
```

---

## Running the project

### Before initialize the Node service for the frontend application, you need to start the containers, run the command everytime you start development. If you want to see the logs, just ommit the `-d` flag and run `yarn` from other terminal window.

```
docker compose up -d
```

### For develop the frontend, set the variable `ASSET_MODE` to `dev` and use the following command. This will run vite dev server.

```
yarn dev
```

### If a variable `ASSET_MODE` was either not available or be different from `dev`, you need to build the frontend using this command:

```
yarn build
```

## Running tests

### To run frontend tests use the command:

```
yarn test
```

### The project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
