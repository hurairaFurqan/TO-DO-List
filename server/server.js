require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

const dbConnect = require("./utils/dbConnect");
const userRouter = require("./routers/user.router")
const authRouter = require("./routers/auth.router");
const path = require("path");
const winston = require("winston");

winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyprint: true }),
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
)
process.on("unhandledRejection", (error) => {
    throw error
})

winston.add(new winston.transports.File({ filename: "logfile.log" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build");
console.log(buildPath);
app.use(express.static(buildPath));

app.use(cors({
    "origin": "*"
}));
dbConnect();




app.use('/api/todos', require('./routers/todo.router'));

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("*", (req, res) => {
    res.status(500).json(`Internal Server Error at ${req}`)
})

app.listen(8000, () => {
    console.log(`Server is listening at Port 8000`);
})