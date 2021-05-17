const express = require("express");
const app = express();

const employee = require("./employee");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/employee", employee);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});
