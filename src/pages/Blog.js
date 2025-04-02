import React, { useState } from "react";

function Blog() {
  const [activePost, setActivePost] = useState(null);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Ultimate Guide to Web Development",
      excerpt:
        "Web development is an exciting and dynamic field that allows developers to create websites and web applications...",
      content: `
        Web development is an exciting and dynamic field that allows developers to create websites and web applications for users all around the world.
        `,
      date: "February 17, 2025",
      author: "John Doe",
      image: "https://via.placeholder.com/800x400",
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: null,
  });

  const handleClick = (id) => {
    setActivePost(activePost === id ? null : id);
  };

  const handleImageChange = (event) => {
    setNewPost({
      ...newPost,
      image: URL.createObjectURL(event.target.files[0]),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      title: newPost.title,
      excerpt: newPost.excerpt,
      content: newPost.content,
      image: newPost.image,
      date: new Date().toLocaleDateString(),
      author: "Anonymous",
    };

    try {
      const response = await fetch("http://localhost:5001/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log("Post submitted successfully!");
      } else {
        console.error("Failed to submit post");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setNewPost({ title: "", excerpt: "", content: "", image: null });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 space-y-10">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800">Create a New Post</h2>
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div>
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Excerpt</label>
              <textarea
                value={newPost.excerpt}
                onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Content</label>
              <textarea
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Image</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                accept="image/*"
              />
            </div>
            <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg">
              Submit Post
            </button>
          </form>
        </section>

      </div>
    </div>
  );
}

export default Blog;
