import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Card} from 'semantic-ui-react'


const Posts = () => {
    const [posts, setPosts] = useState([])
   
    useEffect(() => {
      axios.get("/api/posts")
        .then(res => {
          setPosts(res.data)
        })
    }, [])
  
    const renderPosts = () => {
      return posts.map(post => (
          <Posts 
          key={post.id}
          {...post}
        />
      ))
    };
  
    
    return (
      <>
        <h1>Posts</h1>
        <hr />
        <Card>
            <Card.Meta>
            {renderPosts()}
            </Card.Meta>
        </Card>
      </>
    )
  }
  



export default Posts;