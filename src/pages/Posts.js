import "./index.css";
import React, { useState, useEffect } from 'react';

export default function Posts() {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('/php/getuserinfo.php');
          const result = await response.json();
          setPosts(result);
        };
    
        fetchData();
    }, []); // Empty dependency array means this runs once after the component mounts

    return (<>
        {JSON.stringify(posts)}
        <div class='post'>
            <div class='postvoting'>
                <button>Upvote</button>
                <p>0</p>
                <button>Downvote</button>
            </div>
            <div class='postcontent'>
                <h1>Title of the post</h1>
                <h2>Date of the post</h2>
                <p>Body of the post</p>
            </div>
        </div>
    </>);
}