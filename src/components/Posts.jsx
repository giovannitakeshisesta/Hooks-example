import { useState, useEffect, useCallback } from "react"
import axios from 'axios'
import useInput from "../hooks/useInput"

const Posts = () => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState(null)
  const { value, setValue } = useInput()

  const fetchPosts = useCallback(() => {
    console.log(value)
    return axios.get('https://jsonplaceholder.typicode.com/posts')
  }, [value])

  useEffect(() => {
    console.log('useEffect')
    fetchPosts()
      .then(response => setPosts(response.data))
  }, [fetchPosts])

  useEffect(() => {
    if (posts) {
      setLoading(false)
    }
  }, [posts])

  console.log('render')

  return (
    <div>
      <h1>Posts</h1>

      <input value={value} onChange={setValue} />

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          posts && posts.map(post => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Posts