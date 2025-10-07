// index.js
import express from "express";

const app = express();
app.use(express.json());

// Simple build simulator (we'll replace this later with real logic)
app.post("/api/build", (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "Missing URL" });

  // Simulate success
  res.json({
    success: true,
    message: "Fake APK build complete!",
    download: "https://example.com/fake-app.apk"
  });
});

app.get("/", (req, res) => res.send("✅ Web2APK API is running!"));

app.listen(process.env.PORT || 3000, () =>
  console.log("Server running...")
);

