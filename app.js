import express from "express";
import bodyParser from "body-parser";
import indexRoutes from "./routes/index.js"; // Import routes

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs"); // Set EJS as the templating engine

app.use("/", indexRoutes); // Use routes

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
