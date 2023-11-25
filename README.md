# RadioCareSync

## Scheduler Requirements

* [Docker](https://www.docker.com/).
* [Docker Compose](https://docs.docker.com/compose/install/).

* Start the application with Docker Compose:

```bash
docker-compose up -d
```

## Frontend Requirements

* Node.js (with `npm`).

## Frontend Requirements
* JDK 17+
* PostgreSQL


### Starting the application

## Backend:

* Use `docker-compose up -d` to start the PostgreSQL server
* ``

```bash
docker-compose up -d
```

* Now you can open your browser and interact with these URLs:

Frontend, built with Docker, with routes handled based on the path: http://localhost

Backend, JSON based web API based on OpenAPI: http://localhost/api/

Automatic interactive documentation with Swagger UI (from the OpenAPI backend): http://localhost/docs

Alternative automatic documentation with ReDoc (from the OpenAPI backend): http://localhost/redoc

PGAdmin, PostgreSQL web administration: http://localhost:5050

Flower, administration of Celery tasks: http://localhost:5555