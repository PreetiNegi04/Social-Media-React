import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  //const {addPost} = useContext(PostList);

  return (
    <Form method = "POST" className="createPost">

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter your UserID here</label>
        <input type="text" 
        className="form-control" id="userId" 
        placeholder="Your User Id" 
        name = "userId"/>
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" 
        className="form-control" 
        id="title" placeholder="How are you feeling today..." 
        name = "title"/>
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <input type="text" 
        rows = "4" 
        className="form-control" 
        id="body" 
        placeholder="Tell us more about it" 
        name = "body"/>
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of Reactions</label>
        <input type="text" 
        className="form-control" 
        id="reactions" 
        placeholder="How many people reacted to this post" 
        name = "reactions"/>
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your tags here</label>
        <input type="text" 
        className="form-control" 
        id="tags" 
        placeholder="Please enter tags using space" name = "tags"/>
      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </Form>
  );
}

export async function createPostAction(data){
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
fetch("https://dummyjson.com/posts/add",{
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(postData)
  });
  
  return redirect("/");
};
export default CreatePost;