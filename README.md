# RadioCareSync

### Scheduler Requirements

* [Docker](https://www.docker.com/).
* [Docker Compose](https://docs.docker.com/compose/install/).

### Frontend Requirements

* Node.js (with `npm`).

### Backend Requirements
* JDK 17+
* PostgreSQL
* Maven

## Starting the application

### Backend:

* Use `docker-compose up -d` to start the PostgreSQL server
* `mvn spring-boot:run`

Database path: http://localhost:5655 

Backend application path: http://localhost:8285

### Frontend:

```bash
npm start
npm run build
```

Frontend application server: http://localhost:5173

### Scheduler:

```bash
docker-compose up -d
```

Scheduler server path: http://localhost:8000


