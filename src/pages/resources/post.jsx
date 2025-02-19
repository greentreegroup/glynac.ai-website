import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For getting post ID from the URL

export function PostDetail() {
  const { postId } = useParams(); // Get post ID from the URL
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0); // Track likes for the post
  const [newComment, setNewComment] = useState(""); // Track new comment input
  const [comments, setComments] = useState([]); // Store comments for the post
  const [postLiked, setPostLiked] = useState(false); // Track post like state

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    if (savedPosts) {
      const selectedPost = savedPosts.find((p) => p.id === parseInt(postId)); // Find the post by ID
      setPost(selectedPost);
      setLikes(selectedPost.likes || 0); // Set initial likes from saved post
      setComments(selectedPost.comments || []); // Set comments from saved post
    }
  }, [postId]);

  // Save the updated post (with likes and comments) to localStorage
  useEffect(() => {
    if (post) {
      const updatedPost = { ...post, likes, comments };
      const savedPosts = JSON.parse(localStorage.getItem("posts"));
      const updatedPosts = savedPosts.map((p) => (p.id === post.id ? updatedPost : p));
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
    }
  }, [likes, comments, post]);

  // Handle liking the post
  const handleLikePost = () => {
    if (postLiked) {
      setLikes(likes - 1); // Reset likes
    } else {
      setLikes(likes + 1); // Increment likes
    }
    setPostLiked(!postLiked); // Toggle liked state
  };

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newCommentObj = {
      id: comments.length + 1,
      text: newComment,
      likes: 0,
      replies: [],
    };
    setComments([...comments, newCommentObj]);
    setNewComment(""); // Reset the input field
  };

  // Handle liking a comment
  const handleLikeComment = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        comment.likes = comment.likes === 0 ? 1 : 0; // Toggle like
      }
      return comment;
    });
    setComments(updatedComments);
  };

  // Handle reply submission for a comment
  const handleReplySubmit = (commentId, replyText) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const newReply = {
          id: comment.replies.length + 1,
          text: replyText,
          likes: 0,
          replies: [], // Replies can be nested indefinitely
        };
        comment.replies.push(newReply);
      }
      return comment;
    });
    setComments(updatedComments);
  };

  // Handle liking a reply
  const handleLikeReply = (commentId, replyId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const updatedReplies = comment.replies.map((reply) => {
          if (reply.id === replyId) {
            reply.likes = reply.likes === 0 ? 1 : 0; // Toggle like
          }
          return reply;
        });
        comment.replies = updatedReplies;
      }
      return comment;
    });
    setComments(updatedComments);
  };

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
              <div className="flex items-center mt-4 space-x-4">
                <button
                  onClick={handleLikePost}
                  className={`flex items-center ${postLiked ? "text-red-600" : "text-black"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={postLiked ? "red" : "none"} // Fill red if liked
                    stroke="black" // Ensure stroke is black
                    className={`w-6 h-6 stroke-2`}
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                  {likes} Likes
                </button>
                <button
                  onClick={() => document.getElementById("commentSection").scrollIntoView()}
                  className="flex items-center text-black"
                >
                  💬 {comments.length} Comments
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 text-lg text-gray-800 leading-relaxed">
            <p>{post.content}</p>
          </div>
        </div>

        {/* Comment Section */}
        <div id="commentSection" className="bg-white p-6 rounded-lg shadow-lg mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Comments</h3>
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full mt-4 p-3 bg-blue-600 text-white rounded-lg"
            >
              Submit Comment
            </button>
          </form>

          {/* Display Comments */}
          <div className="mt-6 space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-100 p-4 rounded-lg">
                <div
                  onClick={() => document.getElementById(`replyForm-${comment.id}`).scrollIntoView()}
                  className="cursor-pointer"
                >
                  <p>{comment.text}</p>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <button onClick={() => handleLikeComment(comment.id)} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={comment.likes === 1 ? "red" : "none"} // Fill red if liked
                      stroke="black" // Ensure stroke is black
                      className="w-6 h-6 stroke-2"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                    {comment.likes} Likes
                  </button>
                  <button
                    onClick={() => document.getElementById(`replyForm-${comment.id}`).scrollIntoView()}
                    className="flex items-center"
                  >
                    💬 Reply
                  </button>
                </div>

                {/* Nested Replies */}
                <div className="mt-4 space-y-4 ml-6">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="bg-gray-200 p-4 rounded-lg">
                      <p>{reply.text}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <button onClick={() => handleLikeReply(comment.id, reply.id)} className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={reply.likes === 1 ? "red" : "none"} // Fill red if liked
                            stroke="black" // Ensure stroke is black
                            className="w-6 h-6 stroke-2"
                          >
                            <path
                              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            />
                          </svg>
                          {reply.likes} Likes
                        </button>
                      </div>
                    </div>
                  ))}
                  {/* Reply Form */}
                  <form
                    id={`replyForm-${comment.id}`}
                    onSubmit={(e) => {
                      e.preventDefault();
                      const replyText = e.target.replyText.value;
                      handleReplySubmit(comment.id, replyText);
                      e.target.reset(); // Clear input after submitting
                    }}
                    className="mt-4"
                  >
                    <textarea
                      name="replyText"
                      placeholder="Write a reply..."
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full mt-4 p-3 bg-green-600 text-white rounded-lg"
                    >
                      Submit Reply
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
