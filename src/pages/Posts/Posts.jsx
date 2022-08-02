import {useEffect, useState} from "react";
import PostItem from "../../components/Posts/PostItem/PostItem";
import RInputSearch from "../../components/common/RInputSearch/RInputSearch";
import classes from "./Posts.module.css";


const Posts = () => {

  const [posts, setPosts] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const filterPosts = posts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()))

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(setPosts);
  }, [])


  return (
    <div>
      <h2>Posts</h2>
      <div className={classes.filters}>
        <RInputSearch
          onChange={(e) => {setSearchValue(e.target.value)}}
          value={searchValue}
          placeholder="search..."
        />
        <div>count Comments</div>
        <div>current posts user</div>
      </div>
      <div>
        {filterPosts.map((post) =>
          <PostItem key={post.id} post={post}/>
        )}
      </div>
    </div>
  )
}

export default Posts