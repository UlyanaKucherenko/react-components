import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import PostItem from "../../../components/Posts/PostItem/PostItem";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(setPost);
  }, [id])

  return(
    <div>
      <h2 className="title">Post # {id}</h2>
      <PostItem post={post} />
    </div>
  )
}

export default PostPage