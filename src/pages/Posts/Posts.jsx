import {useEffect, useState} from "react";
import PostItem from "../../components/Posts/PostItem/PostItem";
import RInputSearch from "../../components/common/RInputSearch/RInputSearch";
import classes from "./Posts.module.css";
import RButton from "../../components/common/RButton/RButton";
import RSelect from "../../components/common/RSelect/RSelect";

const Posts = () => {

  const multipleArr = [{"id": 1, "name": 5}, {"id": 2, "name": 10}, {"id": 3, "name": 50}]

  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [multiple, setMultiple] = useState(multipleArr)
  const [searchValue, setSearchValue] = useState("")
  const [userId, setUserId] = useState('');
  const [multipleId, setMultipleId] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((res) => {
        setPosts(res)
        setFilteredPosts(res)
      });

  }, [])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((res) => setUsers(res));

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
        <RSelect label="multiple" value={multipleId} options={multiple} onChange={e => setMultipleId(e.target.value)}/>
      </div>

      <div>
        {
          filteredPosts.map((post) =>
            <PostItem key={post.id} post={post} />
          )}
      </div>
    </div>
  )
}

export default Posts