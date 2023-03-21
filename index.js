require("dotenv").config();
const mongoose = require("mongoose");

// Import npm packages
const express = require("express");
const cors = require("cors");

// Import Router Files
const categoryRoutes = require('./routes/category');
const userRoutes = require('./routes/users');

// Initializing express app
const app = express();

//  MiddeleWare
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use((req, res, next) => {
    console.log(`\nMETHOD -> ${req.method} \nENDPOINT -> ${req.path} \n`);
    next();
});

// Check Backend Status
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Backend" })
});

app.use('/category', categoryRoutes);
app.use('/users', userRoutes);

// Database Connection
const connection_url = `${process.env.MONGO_URI}/${process.env.MONGO_DB}`;
mongoose.connect(connection_url)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Backend is running on the port : ${process.env.PORT}`);
            console.log(`Database Connected -> ${connection_url}`);
        });
    })
    .catch((error) => {
        console.log("Error in Database Connecton -> ", error);
    });
