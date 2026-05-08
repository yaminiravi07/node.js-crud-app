# Node.js CRUD Application on Kubernetes

## Project Overview

This project is a containerized full-stack CRUD application developed using Node.js, Express.js, PostgreSQL, Docker, and Kubernetes (Minikube).

The application supports complete CRUD operations and demonstrates container orchestration, scaling, and load testing in a Kubernetes environment.

---

## Technologies Used

* Node.js
* Express.js
* PostgreSQL
* Docker
* Kubernetes
* Minikube
* k6
* Locust

---

## Features

* Create, Read, Update, Delete operations
* PostgreSQL database integration
* Docker containerization
* Kubernetes deployment and service configuration
* Kubernetes scaling with multiple pods
* Load testing using k6 and Locust
* Modern frontend dashboard UI
* Dark mode and search functionality

---

## Project Structure

```text
node-crud-app/
│
├── backend/
│   └── server.js
│
├── frontend/
│   └── index.html
│
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── postgres.yaml
│
├── tests/
│   ├── loadtest.js
│   └── locustfile.py
│
├── Dockerfile
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Running the Application

### Install dependencies

```bash
npm install
```

### Start Minikube

```bash
minikube start
```

### Build Docker image

```bash
docker build -t node-crud-app .
```

### Deploy PostgreSQL

```bash
kubectl apply -f k8s/postgres.yaml
```

### Deploy Application

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

### Access Application

```bash
minikube service node-service --url
```

---

## Load Testing

### k6

```bash
k6 run tests/loadtest.js
```

### Locust

```bash
locust
```

Open:

```text
http://localhost:8089
```

---

## Team Members

* Sivamani Kumar Velpula (100005998)
* Meenakshy Kattungal Roshan (100006980)
* Yamini Ravi (100006007)

---

## Project Objectives

* Learn Kubernetes deployment concepts
* Implement containerized microservice architecture
* Perform load and stress testing
* Analyze scalability and performance behavior
* Demonstrate DevOps workflows using Minikube
