import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate for routing

export function Blog() {
  const [posts, setPosts] = useState([]); // Initially empty
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: null,
  });
  const [isCreatingPost, setIsCreatingPost] = useState(false); // Track whether the user is creating a new post

  const navigate = useNavigate(); // For navigation

  // Load posts from localStorage when the component mounts
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    if (savedPosts) {
      setPosts(savedPosts); // Set posts to saved data if it exists
    }
  }, []);

  // Handle new post submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPostId = posts.length + 1;
    const newPostData = {
      ...newPost,
      id: newPostId,
      date: new Date().toLocaleDateString(),
      author: "You", // You can change this to any name or get it from a logged-in user
      likes: 0, // Initialize likes count
      liked: false, // Initialize liked state
    };

    const updatedPosts = [...posts, newPostData];
    setPosts(updatedPosts); // Update state to trigger localStorage update

    localStorage.setItem("posts", JSON.stringify(updatedPosts)); // Save to localStorage

    setNewPost({
      title: "",
      excerpt: "",
      content: "",
      image: null,
    });

    setIsCreatingPost(false); // After submitting, stop creating post
  };

  // Handle post like toggle
  const handleLikePost = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        post.liked = !post.liked; // Toggle liked state
        post.likes = post.liked ? post.likes + 1 : post.likes - 1; // Update like count based on liked state
      }
      return post;
    });

    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts)); // Save to localStorage
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts)); // Save to localStorage
  };

  const handleCommentRedirect = (postId) => {
    navigate(`/post/${postId}`); // Redirect to post page where comments are
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 space-y-10">
        {/* "Create Post" Button */}
        {!isCreatingPost && (
          <button
            onClick={() => setIsCreatingPost(true)}
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
                  onChange={(e) => {
                    const imageUrl = URL.createObjectURL(e.target.files[0]);
                    setNewPost({ ...newPost, image: imageUrl });
                  }}
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
                  onClick={() => setIsCreatingPost(false)}
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
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative"
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
                  <div className="flex items-center mt-4 space-x-4">
                    {/* Heart (Likes) */}
                    <button
                      onClick={() => handleLikePost(post.id)}
                      className="flex items-center text-black"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={post.liked ? "red" : "none"} // Toggle heart fill based on the liked state
                        stroke={post.liked ? "red" : "black"} // Toggle heart border color
                        className="w-6 h-6 stroke-2"
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        />
                      </svg>
                      <span className="ml-2">{post.likes}</span>
                    </button>
                    {/* Comments */}
                    <button
                      onClick={() => handleCommentRedirect(post.id)}
                      className="flex items-center text-black"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-6 h-6 stroke-2"
                      >
                        <path
                          d="M21 15c0-2.21-1.79-4-4-4H7c-2.21 0-4 1.79-4 4v4h16v-4z"
                        />
                      </svg>
                      <span className="ml-2">Comment</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Delete Post Button */}
              <button
                onClick={() => handleDeletePost(post.id)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
              >
                🗑️ Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Blog;
