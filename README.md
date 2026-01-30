# QueueLess Campus - Dockerized Version

**Student Name:** Sadeepa Bandara Marasinghe Mudiyanselage
**Student ID:** s224779675
**Unit:** SIT725 - Applied Software Engineering
**Task:** 8.2HD - Docker: End-to-End Application Deployment

---

## 📋 Project Overview

QueueLess Campus is a web-based appointment and queue management system designed for campus services. This is the Dockerized version of the group project, completed individually as part of the HD requirement.

### Features

- **Student Features:** Book appointments online, join virtual queues, view real-time wait times
- **Staff Features:** Manage appointments and queues through a unified dashboard
- **Real-time Updates:** Automatic wait-time calculations and queue position updates

---

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript, Nginx
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Cloud)
- **Containerization:** Docker, Docker Compose

---

## 📦 Prerequisites

Before running this application, ensure you have the following installed:

1. **Docker Desktop** (version 20.10 or higher)
    - Download from: https://www.docker.com/products/docker-desktop
    - Verify installation: `docker --version`

2. **Docker Compose** (usually included with Docker Desktop)
    - Verify installation: `docker-compose --version`

3. **Git** (to clone the repository)

---

## 🚀 How to Run the Application

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/queueless-campus-hd.git
cd queueless-campus-hd
```

### Step 2: Configure Environment Variables

**IMPORTANT:** This application requires a MongoDB Atlas connection string.

1. Create a `.env` file in the **root directory** of the project:

```bash
touch .env
```

2. Add your MongoDB connection string to the `.env` file:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/queueless?retryWrites=true&w=majority
PORT=8080
```

**Note for Markers:**
The MongoDB connection string is **NOT included** in this public repository for security reasons. The required `MONGO_URI` will be provided separately in the OnTrack submission comments.

**To obtain the connection string:**

- Check the OnTrack submission comments for the `MONGO_URI` value
- Copy it exactly as provided into your `.env` file
- Ensure there are no extra spaces or line breaks

### Step 3: Build and Start the Application

Run the following command from the project root directory:

```bash
docker-compose up --build
```

This command will:

- Build the Docker images for frontend and backend
- Start both containers
- Connect them to a shared network
- Map the required ports

**Expected Output:**

```
queueless-backend  | Server running on port 8080
queueless-backend  | MongoDB connected
queueless-frontend | Nginx started
```

### Step 4: Access the Application

Once the containers are running, access the application at:

- **Frontend:** http://localhost
- **Backend API:** http://localhost:8080
- **Student ID Endpoint:** http://localhost:8080/api/student

### Step 5: Verify Database Functionality

To verify the database connection is working:

1. Open http://localhost in your browser
2. Click "Book Appointment"
3. Fill in the form with test data:
    - Name: Test Student
    - Service: Student Services
    - Date: (any future date)
    - Time: (any time)
4. Click "Book Appointment"
5. You should see a success message
6. Navigate to "Staff Dashboard" to verify the appointment appears

---

## 🔍 Student ID Endpoint

As required for the HD task, a special endpoint has been added:

**Endpoint:** `GET /api/student`

**URL:** http://localhost:8080/api/student

**Expected Response:**

```json
{
    "name": "Sadeepa Bandara Marasinghe Mudiyanselage",
    "studentId": "s224779675"
}
```

You can test this in your browser or using curl:

```bash
curl http://localhost:8080/api/student
```

---

## 🛑 Stopping the Application

To stop the containers:

```bash
docker-compose down
```

To stop and remove all volumes (reset database):

```bash
docker-compose down -v
```

---

## 🗂️ Project Structure

```
queueless-campus-hd/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   └── .dockerignore
├── frontend/
│   ├── *.html
│   ├── *.css
│   ├── *.js
│   ├── nginx.conf
│   └── Dockerfile
├── docker-compose.yml
├── .env (create this)
├── .env.example
├── .gitignore
└── README.md
```

---

## 🔧 Troubleshooting

### Container won't start

- Check if ports 80 and 8080 are already in use
- Run: `docker-compose down` then `docker-compose up --build`

### MongoDB connection error

- Verify the `MONGO_URI` in `.env` is correct
- Ensure your IP address is whitelisted in MongoDB Atlas
- Check MongoDB Atlas cluster is running

### Cannot access application

- Wait 10-15 seconds after containers start
- Check containers are running: `docker ps`
- Check logs: `docker-compose logs -f`

### Port conflicts

If port 80 or 8080 is already in use, you can change them in `docker-compose.yml`:

```yaml
ports:
    - '3000:80' # Frontend on port 3000
    - '8081:8080' # Backend on port 8081
```

---

## 📸 Testing Checklist

- [ ] Application builds without errors
- [ ] Frontend accessible at http://localhost
- [ ] Backend API responds at http://localhost:8080
- [ ] `/api/student` endpoint returns correct student information
- [ ] Can book an appointment successfully
- [ ] Appointment appears in staff dashboard
- [ ] Can join virtual queue
- [ ] Queue position and wait time display correctly
- [ ] Database integration fully functional

---

## 📝 Configuration Details

### Environment Variables

- `MONGO_URI`: MongoDB Atlas connection string (required)
- `PORT`: Backend server port (default: 8080)

### Ports

- **Frontend:** Port 80 (mapped to host port 80)
- **Backend:** Port 8080 (mapped to host port 8080)

### Networks

- `queueless-network`: Bridge network connecting frontend and backend

---

## 🎓 Academic Information

**Unit:** SIT725 - Applied Software Engineering
**Institution:** Deakin University
**Year:** 2025
**Task:** 8.2HD - Individual Docker Deployment

**Group Project Team Members:**

- Sadeepa Bandara (Lead Developer)
- Dhwani Thakor (Frontend Developer)
- Pushpinder Singh (Junior Frontend Developer)

**Note:** While the original application was developed as a group project, this Dockerized version and deployment configuration is an individual submission for the HD task.

---

## 📧 Contact

For questions or support:

- **Student:** Sadeepa Bandara Marasinghe Mudiyanselage
- **Student ID:** s224779675
- **Email:** s224779675@deakin.edu.au

---

## 📄 License

This project was developed for educational purposes as part of SIT725 coursework at Deakin University.

---

**Last Updated:** January 2025
