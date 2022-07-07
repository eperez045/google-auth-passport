import express from "express";
import { loginRouter } from "../routes/login.js";
import passport from "passport";
import "../middleware/google.js"

const app = express();
app.use(passport.initialize());

// MIDDLEWARES
app.use(express.json());
app.use("/auth", passport.authenticate("auth-google", {
    scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile'
    ],
    session:false,
}), loginRouter);


app.listen(3000, () => console.log("http://localhost:3000"));