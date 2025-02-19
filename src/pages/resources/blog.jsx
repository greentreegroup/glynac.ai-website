import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for routing

export function Blog() {
  const [posts, setPosts] = useState([]); // Initially empty
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: null,
  });
  const [isCreatingPost, setIsCreatingPost] = useState(false); // Track whether the user is creating a new post

  // Load posts from localStorage when the component mounts
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    if (savedPosts) {
      setPosts(savedPosts); // Set posts to saved data if it exists
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPostId = posts.length + 1;
    const newPostData = {
      ...newPost,
      id: newPostId,
      date: new Date().toLocaleDateString(),
      author: "You", // You can change this to any name or get it from a logged-in user
    };

    const updatedPosts = [...posts, newPostData];
    setPosts(updatedPosts); // Update state to trigger localStorage update

    setNewPost({
      title: "",
      excerpt: "",
      content: "",
      image: null,
    });

    setIsCreatingPost(false); // After submitting, stop creating post
  };

  const handleCreatePostButtonClick = () => {
    setIsCreatingPost(true); // Show the form when the button is clicked
  };

  const handleCancel = () => {
    setIsCreatingPost(false); // Go back to the original state and show the "Create Post" button
    setNewPost({
      title: "",
      excerpt: "",
      content: "",
      image: null,
    }); // Optionally clear the form inputs as well
    localStorage.removeItem("postImage"); // Remove image from localStorage if canceled
  };

  const handleImageChange = (event) => {
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    setNewPost({
      ...newPost,
      image: imageUrl,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 space-y-10">
        {/* "Create Post" Button */}
        {!isCreatingPost && (
          <button
            onClick={handleCreatePostButtonClick}
            className="w-full p-3 bg-green-600 text-white rounded-lg"
          >
            Create Post
          </button>
        )}

        {/* New Post Form */}
        {isCreatingPost && (
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
                ></textarea> {/* Excerpt is no longer required */}
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
                {newPost.image && (
                  <div className="mt-4">
                    <img src={newPost.image} alt="Preview" className="w-32 h-32 object-cover" />
                  </div>
                )}
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-600 text-white rounded-lg"
                >
                  Submit Post
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="w-full p-3 bg-red-600 text-white rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Blog List */}
        {posts
          .slice() // Create a shallow copy of the posts array to avoid mutating the original array
          .reverse() // Reverse the posts array to show the most recent post first
          .map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-32 h-32 object-cover rounded-lg mr-6"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-semibold text-gray-800">
                    <Link to={`/post/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mt-2">{post.excerpt}</p>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>By {post.author} | {post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Blog;
