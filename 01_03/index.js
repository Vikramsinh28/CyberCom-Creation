import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import path from "path";
import url from "url";
import connection from "./config/connection.js"

const app = express();
const filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin" , adminRoutes);
app.use(shopRoutes);
app.use(connection)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
    }
);

