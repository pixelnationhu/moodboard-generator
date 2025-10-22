
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import fs from "fs";
import path from "path";
import https from "https";


const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


app.get("/proxy", async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).json({ error: "❌ Hiányzó URL paraméter" });
    }

    console.log("🔗 Kép lekérése proxyval:", url);

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        Accept: "image/*,*/*",
      },
    });

    if (!response.ok) {
      console.error("⚠️ Hiba a kép letöltése közben:", response.status);
      return res
        .status(response.status)
        .json({ error: "Kép letöltési hiba" });
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";
    const buffer = Buffer.from(await response.arrayBuffer());

    res.set({
      "Content-Type": contentType,
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    });

    res.send(buffer);
  } catch (err) {
    console.error("❌ Proxy hiba:", err);
    res.status(500).json({ error: "Szerver oldali proxy hiba történt." });
  }
});


const __dirname = path.resolve();
const keyPath = path.join(__dirname, "key.pem");
const certPath = path.join(__dirname, "cert.pem");

let server;

if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
  console.log("🔒 HTTPS módban indul a proxy szerver...");
  const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
  };
  server = https.createServer(options, app);
} else {
  console.log("⚠️ Nem található HTTPS tanúsítvány — HTTP módban indul.");
  server = app;
}


server.listen(PORT, () => {
  console.log(`🚀 Proxy szerver fut: https://localhost:${PORT}`);
});
