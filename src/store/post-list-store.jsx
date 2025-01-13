import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
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
  return newPostList;
}
const PostListProvider = ({children}) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
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
    postList: postList,
    addPost: addPost,
    deletePost: deletePost
  }}
  >{children}</PostList.Provider>);
}

const DEFAULT_POST_LIST = [{
  id : '1',
  title: 'Going to Mumbai',
  body: 'Leaving to Mumbai this evening, will have so much fun',
  reactions : 5,
  userId: 'user-8',
  tags: ['vacation', 'mumbai', 'enjoying']
}];
 
export default PostListProvider;