import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For getting post ID from the URL

export function PostDetail() {
  const { postId } = useParams(); // Get post ID from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    if (savedPosts) {
      const selectedPost = savedPosts.find((p) => p.id === parseInt(postId)); // Find the post by ID
      setPost(selectedPost);
    }
  }, [postId]);

  if (!post) return <div>Loading...</div>; // Show loading if post is not found

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 space-y-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex">
            <img
              src={post.image}
              alt={post.title}
              className="w-32 h-32 object-cover rounded-lg mr-6"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>By {post.author} | {post.date}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-lg text-gray-800 leading-relaxed">
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
