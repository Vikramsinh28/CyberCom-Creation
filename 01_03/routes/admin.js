import express from "express";
import path from "path";
import url from "url";

const filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

const router = express.Router();

router.get("/add-product" , (req, res, next) => {
    res.sendFile(path.join(__dirname, "../" ,"views", "add-product.html"))
});

router.post("/add-product" , (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

export default router;