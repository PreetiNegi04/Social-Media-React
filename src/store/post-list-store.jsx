import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost: () =>{},
  deletePost: () => {}
});

const postListReducer = (currentList, action) => {
  let newPostList = currentList;
  if(action.type === "DELETE_POST"){
    newPostList = currentList.filter(
      post => post.id !== action.payload.postId);
  }
  else if(action.type === "ADD_POST"){
    newPostList = [action.payload, ...currentList];
  }
  else if(action.type === "ADD_INITIAL_POST"){
    console.log("post")
    newPostList = action.payload.posts;
  }
  return newPostList;
}
const PostListProvider = ({children}) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = (userId, postTitle, postContent, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload :{
        id : Date.now(),
        userId: userId,
        title: postTitle,
        body: postContent,
        reactions: reaction,
        tags: tags
      }
    })
  };
  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts
      }
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
  <PostList.Provider value={{
    postList, addInitialPost, addPost, deletePost
  }}
  >{children}</PostList.Provider>);
}

 
export default PostListProvider;