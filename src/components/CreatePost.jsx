import { useRef, useContext } from "react";
import {PostList} from "../store/post-list-store"
const CreatePost = () => {
  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postContent = postContentElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postContentElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    
    addPost(userId, postTitle, postContent, reactions, tags);
  };

  return (
    <form className="createPost" onSubmit = {handleSubmit}>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter your UserID here</label>
        <input type="text" className="form-control" id="userId" placeholder="Your User Id" ref = {userIdElement}/>
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" className="form-control" id="title" placeholder="How are you feeling today..." ref = {postTitleElement}/>
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <input type="text" rows = "4" className="form-control" id="body" placeholder="Tell us more about it" ref = {postContentElement}/>
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of Reactions</label>
        <input type="text" className="form-control" id="reactions" placeholder="How many people reacted to this post" ref = {reactionsElement}/>
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your tags here</label>
        <input type="text" className="form-control" id="tags" placeholder="Please enter tags using space" ref = {tagsElement}/>
      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  );
}

export default CreatePost;