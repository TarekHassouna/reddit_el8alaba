import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../api/postsApi.js";
import "./CreatePost.css";

function CreatePost() {
  const [community, setCommunity] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    createPost({ community, title: title.trim(), body });
    navigate("/"); 
  }


  return (
    <div className="cp-page">
      <h1 className="cp-heading">Create post</h1>

      <form className="cp-card" onSubmit={handleSubmit}>
        <select
          className="cp-select"
          value={community}
          onChange={(e) => setCommunity(e.target.value)}
        >
          <option value="">Choose a community</option>
          <option value="reactjs">r/reactjs</option>
          <option value="programming">r/programming</option>
        </select>

        <div className="cp-title-wrap">
          <input
            className="cp-input"
            placeholder="Title*"
            maxLength={300}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className="cp-counter">{title.length}/300</span>
        </div>

        <textarea
          className="cp-textarea"
          placeholder="Body text (optional)"
          rows={8}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <div className="cp-actions">
          <button
            className="cp-submit"
            type="submit"
            disabled={!community || !title.trim()}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;