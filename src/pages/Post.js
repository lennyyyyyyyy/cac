import "./index.css";
import React, { useState, useEffect } from 'react';

export default function Post() {
    const [comments, setComments] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('http://localhost:8000/getvoteables.php', {
                method: 'POST',
                body: JSON.stringify({
                    postid: 1,
                })
            });
          const result = await response.json();
          setComments(result);
        };
    
        fetchData();
    }, []); // Empty dependency array means this runs once after the component mounts

    if (!comments) {
        return <div>Loading...</div>;
    }

    let stuff = [];
    for (let i of comments) {
        stuff.push(
            <div className='post' key={i.id}>
                <div className='postvoting'>
                    <button>Upvote</button>
                    <p>{i.votes}</p>
                    <button>Downvote</button>
                </div>
                <div className='postcontent'>
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