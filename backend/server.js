const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow frontend access
app.use(express.json()); // Parse JSON requests

let posts = [
  {
    id: 1,
    title: "The Ultimate Guide to Web Development",
    excerpt: "Web development is an exciting field...",
    content: "Full article content goes here...",
    date: "February 17, 2025",
    author: "John Doe",
    image: "https://via.placeholder.com/800x400",
  },
  {
    id: 2,
    title: "Understanding JavaScript ES6 Features",
    excerpt: "JavaScript ES6 introduced a wide range of new features...",
    content: "Full article content goes here...",
    date: "February 10, 2025",
    author: "Jane Smith",
    image: "https://via.placeholder.com/800x400",
  },
];

// GET all posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// POST new post
app.post("/api/posts", (req, res) => {
  const { title, excerpt, content, image } = req.body;
  
  // Basic validation
  if (!title || !excerpt || !content) {
    return res.status(400).json({ error: "Title, excerpt, and content are required." });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    excerpt,
    content,
    image: image || "https://via.placeholder.com/800x400", 
    date: new Date().toLocaleDateString(),
    author: "You",
  };

  posts.push(newPost);
  console.log("New post added:", newPost);
  res.status(201).json(newPost);
});

const PORT = process.env.PORT || 5001; // Change to 5001 or any available port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
