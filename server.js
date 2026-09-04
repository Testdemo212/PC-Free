import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Serve static assets from project root
app.use(express.static(__dirname, {
  extensions: ['html', 'htm']
}));

// Route helpers for clean URLs
app.get('/quickstart', (req, res) => {
  res.sendFile(path.join(__dirname, 'quickstart.html'));
});

app.get('/compare', (req, res) => {
  res.sendFile(path.join(__dirname, 'Compare.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'faq.html'));
});

app.get('/docs', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs.html'));
});

// Fallback to index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
