import express from "express";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRoute);
app.use('/api/post', postRoute);

app.use('/api/auth', authRoute)

app.listen(8800, () => {
    console.log("Server is running on http://localhost:8800");
});