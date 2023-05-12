import React, { useEffect, useState } from "react";
import SharedPostCard from "../SharedPostCard";

function SharedPostsList({posts, fetchType}) {
  const [postsList, setPostsList] = useState([]);

  useEffect(()=>{
    if(posts){
      setPostsList(posts);
    }
  },[posts]);

  return (
    <div>
        {postsList.length ? [...postsList].reverse().map((post) => {
          return <SharedPostCard key={post.id} post={post} fetchType={fetchType}/>;
        }) : <h5>No shared posts yet...</h5>}
    </div>
  );
}

export default SharedPostsList;
