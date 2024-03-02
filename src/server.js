import express from "express";
import configViewsEngine from "./configs/viewEngine";
import initWebRoute from "./routes/web";
require('dotenv').config();

// import "dotenv/config";

const app = express();

configViewsEngine(app);

initWebRoute(app);

const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//     console.log(`>>>Server running in host http://localhost:${PORT}`);
// })
try {
    app.listen(PORT, () => {
        console.log(`>>>Server running in host http://localhost:${PORT}`);
    });
} catch (error) {
    console.error('Error starting the server:', error);
}