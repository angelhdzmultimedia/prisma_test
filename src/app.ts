import express, { Application } from 'express';

const app: Application = express();
app.use(express.json({}));

const posts = [
  {
    titulo: 'Post #1',
    id: Date.now() + 1,
    favoritos: [],
  },
  {
    titulo: 'Post #2',
    id: Date.now() + 2,
    favoritos: [],
  },
  {
    titulo: 'Post #3',
    id: Date.now() + 3,
    favoritos: [],
  },
];

const favoritos = [];

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.patch('/posts', (req, res) => {
  const body = req.body;
  const post = posts.find((item) => item.id === body.id);
  const index = posts.indexOf(post);
  posts[index] = { ...body };
  console.log(`Patched: ${JSON.stringify(post)}`);
});

app.use(express.static('public'));

app.listen(3000, () => {});
