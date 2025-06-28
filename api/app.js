import express from "express";

import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";

const app = express();

app.use('/api/user', userRoute);
app.use('/api/post', postRoute);

app.use('/api/test', (req, res) => {
    res.json({
        message: 'test'
    });
});

app.use('/api/auth/register', (req, res) => {
    res.json({
        message: 'test'
    });
});

app.use('/api/auth/login', (req, res) => {
    res.json({
        message: 'test'
    });
});

app.use('/api/auth/logout', (req, res) => {
    res.json({
        message: 'test'
    });
});

app.use('/api/post', (req, res) => {
    res.json({
        message: 'test'
    });
});

app.listen(8800, () => {
    console.log("Server is running on http://localhost:8800");
});