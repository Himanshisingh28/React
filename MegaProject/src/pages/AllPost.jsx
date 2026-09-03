import React, {useState, useEffect} from 'react'
import appwriteservice from "../appwrite/config";
import { Container, PostCard } from '../components';


function AllPost () {
      const [posts, setPosts] = useState([])
      useEffect(()=>{},[])
      appwriteservice.getPost([]).then((posts)=> {
            if (posts){
                  setPosts(posts.documents)
            }
      })
  return (
    <div className='w-full py-8'>
      <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div
                            key={post.$id}
                            className="p-2 w-full sm:w-1/2 lg:w-1/4"
                        >
                            <PostCard
                                $id={post.$id}
                                title={post.title}
                                featureImage={post.featureImage}
                            />
                        </div>
                    ))}
                </div>
            </Container>
    </div>
  )
}

export default AllPost
