import express from 'express';
import { createServer as createViteServer } from 'vite';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database('database.sqlite');

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT
  );

  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS preorders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    color TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed initial settings if empty
const settingsCount = db.prepare('SELECT COUNT(*) as count FROM settings').get() as { count: number };
if (settingsCount.count === 0) {
  const defaultSettings = [
    ['siteName', 'Be Left Angel'],
    ['siteDescription', '천연염색 턱받이 프리오더 오픈'],
    ['primaryColor', '#7a8266'], // Muted Olive
    ['secondaryColor', '#d4b8b1'], // Muted Pink
    ['fontFamily', 'Noto Serif KR'],
    ['heroImage', 'https://picsum.photos/seed/natural-dye/1920/1080?blur=2'],
    ['heroTitle', '자연을 담은 색, 우리 아이를 위한 천연염색 턱받이'],
    ['heroSubtitle', 'Be Left Angel 프리오더 한정 수량 오픈'],
  ];
  const insertSetting = db.prepare('INSERT INTO settings (key, value) VALUES (?, ?)');
  db.transaction(() => {
    for (const [key, value] of defaultSettings) {
      insertSetting.run(key, value);
    }
  })();
}

// Seed initial posts if empty
const postsCount = db.prepare('SELECT COUNT(*) as count FROM posts').get() as { count: number };
if (postsCount.count === 0) {
  const insertPost = db.prepare('INSERT INTO posts (title, content, image_url) VALUES (?, ?, ?)');
  insertPost.run(
    '천연염색의 매력',
    '자연에서 얻은 재료로 정성껏 물들인 턱받이는 아이의 피부에 자극을 주지 않습니다. 시간이 지날수록 자연스럽게 변하는 색감의 깊이를 느껴보세요.',
    'https://picsum.photos/seed/fabric/800/600'
  );
  insertPost.run(
    '프리오더 안내',
    '이번 프리오더는 한정 수량으로 진행됩니다. 올리브, 인디핑크, 차콜, 베이지 4가지 컬러 중 선택하실 수 있습니다. 제작 기간은 약 2주 소요됩니다.',
    'https://picsum.photos/seed/baby/800/600'
  );
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/settings', (req, res) => {
    const settings = db.prepare('SELECT * FROM settings').all() as { key: string; value: string }[];
    const settingsObj = settings.reduce((acc, curr) => {
      acc[curr.key] = curr.value;
      return acc;
    }, {} as Record<string, string>);
    res.json(settingsObj);
  });

  app.put('/api/settings', (req, res) => {
    const settings = req.body;
    const updateSetting = db.prepare('INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)');
    db.transaction(() => {
      for (const [key, value] of Object.entries(settings)) {
        updateSetting.run(key, String(value));
      }
    })();
    res.json({ success: true });
  });

  app.get('/api/posts', (req, res) => {
    const posts = db.prepare('SELECT * FROM posts ORDER BY created_at DESC').all();
    res.json(posts);
  });

  app.post('/api/posts', (req, res) => {
    const { title, content, image_url } = req.body;
    const result = db.prepare('INSERT INTO posts (title, content, image_url) VALUES (?, ?, ?)').run(title, content, image_url);
    res.json({ id: result.lastInsertRowid, title, content, image_url });
  });

  app.delete('/api/posts/:id', (req, res) => {
    db.prepare('DELETE FROM posts WHERE id = ?').run(req.params.id);
    res.json({ success: true });
  });

  app.get('/api/preorders', (req, res) => {
    const preorders = db.prepare('SELECT * FROM preorders ORDER BY created_at DESC').all();
    res.json(preorders);
  });

  app.post('/api/preorders', (req, res) => {
    const { name, email, phone, color, quantity } = req.body;
    const result = db.prepare('INSERT INTO preorders (name, email, phone, color, quantity) VALUES (?, ?, ?, ?, ?)').run(name, email, phone, color, quantity);
    res.json({ id: result.lastInsertRowid, success: true });
  });

  app.put('/api/preorders/:id/status', (req, res) => {
    const { status } = req.body;
    db.prepare('UPDATE preorders SET status = ? WHERE id = ?').run(status, req.params.id);
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
