import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_PATH = path.join(__dirname, 'dist');

// Serve static assets from dist
app.use(express.static(DIST_PATH, {
  maxAge: '1d',
  etag: true
}));

// SPA Fallback: Send index.html for all requests not matched by static assets
app.use((req, res) => {
  res.sendFile(path.join(DIST_PATH, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[AquaPure Server] Listening on port ${PORT}`);
});
