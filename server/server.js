const http = require("http");
const express = require("express");
const logging = require("./config/logging");
const path = require("path");
const config = require("./config/config");

require("dotenv").config();

/**
 * TODO:
 * - set up cors to secure access
 */

// server config ------------------------------------------------------------------------------------------
const NAMESPACE = "SERVER";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection ------------------------------------------------------------------------------------------
n;

// logging each request
app.use((req, res, next) => {
    logging.info(NAMESPACE, `Method - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on("finish", () => {
        logging.info(
            NAMESPACE,
            `Method - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${req.statusCode}]`
        );
    });
    next();
});

// serving static file ------------------------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, "../web", "build")));
app.use(express.static("public"));

// api routing ------------------------------------------------------------------------------------------
const sampleRoute = require("./routes/sample");

app.use("/api/sample", sampleRoute);
// api routing end ------------------------------------------------------------------------------------------

// error handling
app.use((req, res) => {
    const error = new Error("Path not found");
    res.status(400).json({ message: error.message });
});

// redirect to index
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../web", "build", "index.html"));
});

// listening to server ------------------------------------------------------------------------------------------
const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => {
    logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`);
});
