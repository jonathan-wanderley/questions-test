import express from "express";
import "express-async-errors";
import "dotenv/config";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import routes from "./routes";
import { ErrorHandler } from "./middlewares/errorHandler";


import "./oauth2-loader";

const app = express();
const port = process.env.PORT || 3000;

app.use(session({
  secret: 'todolist',
  saveUninitialized: false,
  resave: false,
  cookie: {
      maxAge: 24 * 60 * 60 * 100
  }
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use(routes);
app.use(ErrorHandler);

app.get('/test', (req, res) => { res.json({ test: 'ok' }) })

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
