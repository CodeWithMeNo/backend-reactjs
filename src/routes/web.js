import express from "express";

const router = express.Router();
const initWebRoute = (app) => {
    router.get("/", (req, res) => {
        res.send("hsdgvjhs");
    })
    return app.use("/", router)
}
export default initWebRoute;