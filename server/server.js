const express = require("express");
const app = express();
const cors = require("cors");

const dbConnect = require("./utils/dbConnect");
const userRouter = require("./routers/user.router")
const authRouter = require("./routers/auth.router");
const path = require("path");



dbConnect();

app.use(express.json());

const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build");
console.log(buildPath);
app.use(express.static(buildPath));

app.use(cors({
    "origin": "*"
}));




app.use('/api/todos', require('./routers/todo.router'));

app.use("/auth", authRouter);
app.use("/users", userRouter);


app.listen(8000, () => {
    console.log(`Server is listening at Port 8000`);
})