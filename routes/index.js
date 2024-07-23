import express from "express";

const router = express.Router();

let posts = []; // Temporary storage for posts

router.get("/", (req, res) => {
    res.render("home", { posts: posts });
});

router.get("/new", (req, res) => {
    res.render("new");
});

router.post("/new", (req, res) => {
    const newPost = { id: Date.now().toString(), title: req.body.title, content: req.body.content };
    posts.push(newPost);
    res.redirect("/");
});

router.get("/edit/:id", (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    res.render("edit", { post: post });
});

router.post("/edit/:id", (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect("/");
});

router.post("/delete/:id", (req, res) => {
    posts = posts.filter(p => p.id !== req.params.id);
    res.redirect("/");
});

export default router;
