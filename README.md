# RadioCareSync

**Google Drive link with demo videos**: https://drive.google.com/drive/folders/1kOpGgwpA-GD1RYg0UoFPSE5Beh15bin1?usp=sharing

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

```bash
docker-compose up -d # start the PostgreSQL server
mvn spring-boot:run
```

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
docker build
docker-compose up -d
```

Scheduler server path: http://localhost:8000

## API documentation links

* Scheduler: http://localhost:8000/docs
* Backend: http://localhost:8285/swagger-ui/index.html

