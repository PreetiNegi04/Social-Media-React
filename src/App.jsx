import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import { useState } from 'react'
import PostListProvider from './store/post-list-store'

function App() {

  const [selectTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className = "appContainer">
        <Sidebar selectedTab = {selectTab} setSelectedTab={setSelectedTab}/>
        <div className = "content">
          <Header/>
          {selectTab === "Home"? <PostList/> : <CreatePost/>}
          <Footer/>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
