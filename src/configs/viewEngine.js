import express from "express";

/**
 * express app
 */

const configViewsEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}

export default configViewsEngine;