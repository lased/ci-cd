import express from 'express';

const app = express();
const PORT = 3000;

app.get('/ping', (_, res) => {
  return res.json({ ok: 'backend' });
});

app.listen(PORT, () => {
  process.stdout.write(`Server is running on port ${PORT}`);
});
