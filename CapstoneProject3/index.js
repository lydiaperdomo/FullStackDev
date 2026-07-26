import express from "express";

const app = express();
const port = 3000;
const posts = [];



app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index", { posts: posts });
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  const newPost = {
  id: String(Date.now()),
  title,
  content
};

posts.push(newPost);

  res.redirect("/");
});

app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (post) {
    res.render("post", { post: post });
  } else {
    res.status(404).send("Post not found");
  }
});

 app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find(p => p.id === req.params.id);

  if (!post) return res.status(404).send("Post not found");

  res.render("edit", { post });
});

app.post("/posts/:id/edit", (req, res) => {
  const post = posts.find(p => p.id === req.params.id);

  if (!post) return res.status(404).send("Post not found");

  post.title = req.body.title;
  post.content = req.body.content;

  res.redirect("/");
});


app.post("/posts/:id/delete", (req, res) => {
  console.log("DELETE ROUTE HIT:", req.params.id);

  const postId = req.params.id;
  console.log("POSTS:", posts);
console.log("ID FROM URL:", req.params.id);


  const index = posts.findIndex(p => String(p.id) === String(postId));

  console.log("INDEX FOUND:", index);

  if (index === -1) {
    return res.status(404).send("Post not found");
  }

  posts.splice(index, 1);

  res.redirect("/");
});

