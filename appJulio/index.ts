//https://blog.logrocket.com/typescript-with-node-js-and-express/
import express from 'express';
// rest of the code remains same
const app = express();
const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server 2 :)'));
app.get('/julio/json', (req, res) => res.json({'julio': 'Holi'}));
app.get('/julio/html', (req, res) => res.sendFile('html/1.html', { root: __dirname }));
app.get('*', (req, res) => res.send('404'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});