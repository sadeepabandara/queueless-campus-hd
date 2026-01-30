# QueueLess Campus - Dockerized Version

## 🚀 How to Run the Application

### Step 1: Clone the Repository

```bash
git clone https://github.com/sadeepabandara/queueless-campus-hd.git
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
