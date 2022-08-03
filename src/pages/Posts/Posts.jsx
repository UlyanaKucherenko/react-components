import {useEffect, useState} from "react";
import PostItem from "../../components/Posts/PostItem/PostItem";
import RInputSearch from "../../components/common/RInputSearch/RInputSearch";
import classes from "./Posts.module.css";
import RButton from "../../components/common/RButton/RButton";
import RSelect from "../../components/common/RSelect/RSelect";


const Posts = () => {

  const [posts, setPosts] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [userId, setUserId] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((res) => {
        setPosts(res)
        setFilteredPosts(res)
      });

  }, [])


  const handleChange = () => {

    setFilteredPosts(posts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase()) && post.userId === userId
    }))
  };

  return (
    <div>
      <h2>Posts</h2>
      <div className={classes.filters}>
        <RInputSearch
          onChange={(e) => {setSearchValue(e.target.value)}}
          value={searchValue}
          placeholder="search..."
        />

        <RSelect label="users" value={userId} onChange={
          (e) => {setUserId(e.target.value)}}/>
        <RButton text="filter" onClick={handleChange} color="primary" size="md"/>
      </div>
      <div>
        {
          filteredPosts.map((post) =>
            <PostItem key={post.id} post={post}/>
          )}
      </div>
    </div>
  )
}

export default Posts