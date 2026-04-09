import { useState } from "react";
import useFetch from "./Use_fetch";

function App() {

  let [Id, setPostId] = useState();
  let [Cid, setCommentId] = useState();

  let [post] = useFetch(`https://jsonplaceholder.typicode.com/posts/${Id}`);
  let [comment] = useFetch(`https://jsonplaceholder.typicode.com/comments/${Cid}`);

  return (
    <div>

      <h2>Get Post & Comment</h2>
      
      
      <input
        type="number"
        placeholder="Enter ID"
        onChange={(e) => {setPostId(e.target.value); 
          setCommentId(e.target.value); }}
        
      />
      
      

      {post && (
        <div>
          <p>ID: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </div>
      )}

      <hr />
      {comment && (
        <div>
          <p>ID: {comment.id}</p>
          <p>Name: {comment.name}</p>
          <p>Comment: {comment.body}</p>
        </div>
      )}

    </div>
  );
}

export default App;