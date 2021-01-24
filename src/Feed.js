import React , {useState , useEffect } from 'react'
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post" ;
import "./Feed.css" ;
import db from "./firebase" ;

function Feed() {
    const [posts, setPosts] = useState([]) ;

   useEffect(() => {
       db.collection("posts").orderBy('timestamp' , 'desc')
       .onSnapshot((snapshot) => {
           setPosts(snapshot.docs.map(doc => ({ id: doc.id , data: doc.data() })));

            
       })
   } , [])


    

    return (
        <div className="feed">
           <StoryReel />
           <MessageSender /> 
           
           { posts.map( (post) => (
               
               <Post 
               key={post.id}
               profilepic={post.data.profilepic}
               message={post.data.message}
               timestamp={post.data.timestamp}
               username={post.data.username}
               image={post.data.image}
               /> 

               
             
              
           )) }
           
           

        

        </div>
    )
}

export default Feed
