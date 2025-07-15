require("dotenv").config();
const express = require("express");
const request = require("request");
const app = express();

const TARGET_URL = process.env.TARGET_URL;

if (!TARGET_URL) {
    console.error("❌ TARGET_URL not set in .env");
    process.exit(1);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use a direct function instead of path strings to avoid path-to-regexp issues
app.use((req, res) => {
    const targetUrl = TARGET_URL + req.originalUrl;

    console.log(
        `🔁 Redirecting ${req.method} ${req.originalUrl} → ${targetUrl}`
    );

    const options = {
        url: targetUrl,
        method: req.method,
        headers: {
            ...req.headers,
            host: new URL(TARGET_URL).host,
        },
        body: req.body,
        json: true,
    };

    request(options)
        .on("error", (err) => {
            console.error("🔥 Proxy error:", err);
            res.status(500).send("Internal Proxy Error");
        })
        .pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Proxy server listening on port ${PORT}`);
    console.log(`📡 Redirecting to ${TARGET_URL}`);
});
