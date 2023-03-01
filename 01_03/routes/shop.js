import express from "express";
import path from "path";
import url from "url";

const filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

const router = express.Router();

router.get("/" , (req, res, next) => {
    res.sendFile(path.join(__dirname, "../" ,"views", "shop.html"))
});


export default router;