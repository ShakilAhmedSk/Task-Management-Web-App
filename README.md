# 📝 My Todo App

A full-stack simple Todo Application built with:
- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Spring Boot (Java)
- **Database:** MySQL

---

## 🚀 Project Structure

```
/frontend  -> React app (Vite)
/backend   -> Spring Boot app
```

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

## 🖥️ Frontend Setup (React + Vite)

### Prerequisites:
- Node.js installed (Recommended: version 18+)
- npm or yarn installed

### Steps:

```bash
cd frontend   # move into the frontend folder
npm install   # install all dependencies
npm run dev   # start the Vite development server
```

- The frontend app will be running at: **http://localhost:5173**

---

## ⚙️ Backend Setup (Spring Boot)

### Prerequisites:
- JDK 17+ installed
- Maven installed
- MySQL running locally

### Steps:

1. Create a MySQL database:

```sql
CREATE DATABASE springboot_db;
```

2. Confirm your backend database configuration in:

```bash
backend/src/main/resources/application.properties
```

Your `application.properties` should look like:

```properties
spring.application.name=todo

# DB Connection
spring.datasource.url=jdbc:mysql://localhost:3306/springboot_db
spring.datasource.username=root
spring.datasource.password=

# Hibernate Config
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# Server Port (optional)
server.port=8080

# MySQL Driver
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

3. Start the Spring Boot server:

```bash
cd backend   # move into the backend folder
./mvnw spring-boot:run   # for Linux/macOS
# or
mvnw.cmd spring-boot:run # for Windows
```

- The backend will run at: **http://localhost:8080**

---

## 🛠️ API Endpoints (Backend)

| Method | Endpoint               | Description         |
|:------:|:-----------------------:|:-------------------:|
| POST   | `/api/todos`             | Create a new Todo    |
| GET    | `/api/todos`             | Get all Todos        |
| GET    | `/api/todos/{id}`        | Get Todo by ID       |
| DELETE | `/api/todos/{id}`        | Delete Todo by ID    |

---

## 📦 Tech Stack

- React (Vite)
- Tailwind CSS
- Spring Boot
- MySQL
- Java 17
- Maven

---

## 📄 License

This project is licensed for educational and learning purposes.

---

