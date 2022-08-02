import {useEffect, useState} from "react";
import PostItem from "../../components/Posts/PostItem/PostItem";


const Posts = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(setPosts);
  }, [])


  return (
    <div>
      <h2>Posts</h2>
      <div>
        {posts.map((post) =>
          <PostItem key={post.id} post={post}/>
        )}
      </div>
    </div>
  )
}

export default Posts