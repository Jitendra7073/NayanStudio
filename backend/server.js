const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const mailRoutes = require("./routes/mailRoutes");
const postRoutes = require("./routes/postRoutes"); 
const http = require("http"); // Import HTTP module for WebSocket support
const { Server } = require("socket.io"); // Import Socket.IO

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// FRONTEND URL
// const BASE_URL = "http://localhost:3000"
const BASE_URL = "https://nayanstudio.onrender.com"

// Middleware
app.use(express.json());
app.use(cors({ origin: BASE_URL }));

// Integrate Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: BASE_URL,
    methods: ["GET", "POST"],
  },
});

// Pass Socket.IO instance to routes
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Routes
app.use("/api/inquiry", mailRoutes);
app.use("/api/posts", postRoutes);

// Handle WebSocket connections
io.on("connection", (socket) => {
  
  socket.on("disconnect", () => {
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
