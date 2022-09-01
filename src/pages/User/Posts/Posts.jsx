import {useEffect, useState} from "react";

import PostItem from "../../../components/Posts/PostItem/PostItem";
import RInputSearch from "../../../components/ui/RInputSearch/RInputSearch";
import RButton from "../../../components/ui/RButton/RButton";
import RSelect from "../../../components/ui/RSelect/RSelect";

import classes from "./Posts.module.css";

const Posts = () => {

  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [userId, setUserId] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((res) => {
        console.log('res=>', res)
        setPosts(res)
        setFilteredPosts(res)
      });

  }, [])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((res) => {
        console.log('res=>', res)
        setUsers(res)
      });

  }, [])


  const onFilterClick = () => {
    setFilteredPosts(posts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase()) && post.userId === userId
    }))
  };

  return (
    <div>
      <h2>Posts</h2>
      <div className={classes.filters}>
        <RInputSearch
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
          value={searchValue}
          placeholder="search..."
        />
        <RSelect label="users" value={userId} options={users} onChange={(e) => {
          setUserId(e.target.value)
        }}/>
        <RButton text="filter" onClick={onFilterClick} color="primary" size="md"/>
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