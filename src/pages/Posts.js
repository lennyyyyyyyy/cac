import "./index.css";
import React, { useState, useEffect } from 'react';
import { config } from '../api'
import { useAuth } from '../AuthProvider'

export default function Posts() {
    const [posts, setPosts] = useState(null);
    const [currVotes, setCurrVotes] = useState(null);
    const { userId } = useAuth();

    const [formData, setFormData] = useState({ // temporary storage for entered data
        postid: 0,
        title: "",
        body: "",
        userid: userId,
    });
    const [errors, setErrors] = useState({}); // displays errors
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(config.API_ADDR + '/getvoteables.php', {
                method: 'POST',
                body: JSON.stringify({
                    voteableid: 0,
                })
            });
        const result = await response.json();
        setPosts(result);
        };
    
        fetchData();

        const fetchCurrVotes = async () => {
            const response = await fetch(config.API_ADDR + '/getvotes.php', {
                method: 'POST',
                body: JSON.stringify({
                    userid: userId,
                    voteableid: 0,
                })
            });
            const result = await response.json();
            setCurrVotes(result);
        }
        
        fetchCurrVotes();
    }, []); // Empty dependency array means this runs once after the component mounts

    if (!posts || !currVotes || !userId) {
        return <div>Loading...</div>;
    }

    const upvote = async (post) => {

        const currPostId = post.id;
        const oldUserVote = currVotes[post.id];
        let newUserVote = 0;
        
        if (oldUserVote === 1) {
            newUserVote = 0;
        }
        else if (oldUserVote === 0 || oldUserVote === -1) {
            newUserVote = 1;
        }

        let newPostVotes = post.votes + newUserVote - oldUserVote;
        
        const updatedPosts = posts.map((p) => 
            p.id === currPostId ? { ...p, votes: newPostVotes } : p
        );
        setPosts(updatedPosts);
    
        setCurrVotes({
            ...currVotes,
            [currPostId]: newUserVote,
        });
        
        await fetch(config.API_ADDR + '/updatevote.php', {
            method: 'POST',
            body: JSON.stringify({
                voteableid: currPostId,
                userid: userId,
                vote: newUserVote,
            })
        });
    }

    const downvote = async (post) => {
        const currPostId = post.id;
        const oldUserVote = currVotes[post.id];
        let newUserVote = 0;
        
        if (oldUserVote === -1) {
            newUserVote = 0;
        }
        else if (oldUserVote === 0 || oldUserVote === 1) {
            newUserVote = -1;
        }

        let newPostVotes = post.votes + newUserVote - oldUserVote;
        
        const updatedPosts = posts.map((p) => 
            p.id === currPostId ? { ...p, votes: newPostVotes } : p
        );
        setPosts(updatedPosts);
    
        setCurrVotes({
            ...currVotes,
            [currPostId]: newUserVote,
        });
        
        await fetch(config.API_ADDR + '/updatevote.php', {
            method: 'POST',
            body: JSON.stringify({
                voteableid: currPostId,
                userid: userId,
                vote: newUserVote,
            })
        });
    }

    const upActivated = (post) => {
        return currVotes[post.id] === 1 ? 'tree-button-activated' : 'tree-button';
    }

    const downActivated = (post) => {
        return currVotes[post.id] === -1 ? 'tree-button-activated' : 'tree-button';
    }


    const handleChange = (e) => { // called when one field is changed
        const { name, value } = e.target;
    
        setFormData({ // updates temporary storage
          ...formData,
          [name]: value,
        });
    
        if (submitted) {
          validateField(name, value);
        }
    };

    const validateField = (name, value) => { // checks for errors for one field at a time
        let error = '';
    
        if (name === 'title' && !value) {
            error = 'Title is required.';
        }

        if (name === 'body' && !value) {
          error = 'Post is required.';
        }

        setErrors((prevErrors) => ({ // Update error state for the specific field
          ...prevErrors,
          [name]: error,
        }));
    };

    const handleSubmit = async (e) => { // called when entire form is submitted
        e.preventDefault();
        setSubmitted(true);
    
        const newErrors = validateForm();
    
        if (Object.keys(newErrors).length === 0) {
            const response = await fetch(config.API_ADDR + '/addvotable.php', {
                method: 'POST',
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (result) {
                window.location.href = `/posts`;
            }
        }
    };
    
    const validateForm = () => { // checks entire form for errors
        const newErrors = {};

        if (!formData.title) {
            newErrors.title = 'Title is required.';
          }

        if (!formData.body) {
          newErrors.body = 'Post is required.';
        }
    
        setErrors(newErrors);
        return newErrors;
    };


    let stuff = [];
    for (let i of posts) {
        const timestamp = i.time;
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');

        stuff.push(
            <div className='post' key={i.id}>
                <div className='postvoting'>
                    <button className='postbutton' onClick={() => upvote(i)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#787878" className={upActivated(i)} viewBox="0 0 16 16">
                            <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777z"/>
                        </svg>
                    </button>
                    <p>{i.votes}</p>
                    <button className='postbutton down' onClick={() => downvote(i)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#787878" className={downActivated(i)} viewBox="0 0 16 16">
                            <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777z"/>
                        </svg>
                    </button>
                </div>
                <a className="post-not-voting" href={`./post/${i.id}`}>
                    <div className="post-top">
                        <h2 className="post-username">{i.username}</h2>
                        <h2 className='posttime'>
                            <div>{hours + ":" + minutes}</div>
                            <div>{month + "/" + day + "/" + year}</div>
                        </h2>
                    </div>
                    <div className='postcontent'>
                        <div className="posttitle">{i.title}</div>
                        <p>{i.body}</p>
                    </div>
                </a>
            </div>
        );
    }

    return (
        <>
            <div className="centered-content">
                <h1 className="page-title">Forum</h1>
                <form className="add-comment-form" onSubmit={handleSubmit}>
                    <div className="comment-single-row">
                        <input className="comment-textbox"
                            type="text"
                            placeholder="Title of post"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.title && (
                        <span className="error-msg">{errors.title}</span>
                    )}
                    <div className="comment-single-row">
                        <textarea
                            rows="5"
                            type="text"
                            placeholder="Body of post"
                            name="body"
                            value={formData.body}
                            onChange={handleChange}
                        />
                        <input className="comment-submit" type="submit" value="Share"></input>
                    </div>
                    {errors.body && (
                        <span className="error-msg">{errors.body}</span>
                    )}
                </form>
                {stuff}
            </div>
            <div className="right-semicircle-bottom-left fun-pink"></div>
            <div className="left-semicircle-middle-right fun-green"></div>
            <div className="left-semicircle-lower-right fun-yellow"></div>
        </>
    );
}