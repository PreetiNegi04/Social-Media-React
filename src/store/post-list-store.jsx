import { createContext } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {}
});

const addPost = () => {};
const deletePost = () => {};

const postListReducer = (currentList, action) => {
  return currentList;
}
const PostListProvider = ({children}) => {
  const [postList, dipatchPostList] = useReducer(
    postListReducer,[]);

  return <PostList.Provider value={{
    postList: postList,
    addPost: addPost,
    deletePost: deletePost
  }}
  >{children}</PostList.Provider>;
}

const DEFAULT_POST_LIST = [{
  id : '1',
  title: '',
  body: '',
  reactions : 0,
  userId: '',
  tags: []
}];
 
export default PostListProvider;