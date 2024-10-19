import "./index.css";
import React, { useState, useEffect } from 'react';

export default function Posts() {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('http://localhost:8000/getvoteables.php', {
                method: 'POST',
                body: JSON.stringify({
                    postid: 0,
                })
            });
          const result = await response.json();
          setPosts(result);
        };
    
        fetchData();
    }, []); // Empty dependency array means this runs once after the component mounts

    if (!posts) {
        return <div>Loading...</div>;
    }

    let stuff = [];
    for (let i of posts) {
        stuff.push(
            <div className='post' key={i.id}>
                <div className='postvoting'>
                    <button>Upvote</button>
                    <p>{i.votes}</p>
                    <button>Downvote</button>
                </div>
                <div className='postcontent'>
                    <a href={`./post/${i.id}`}><h1>{i.title}</h1></a>
                    <h2>{i.time}</h2>
                    <p>{i.body}</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            {stuff}
        </div>
    );
}