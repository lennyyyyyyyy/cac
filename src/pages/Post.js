import "./index.css";
import React, { useState, useEffect } from 'react';
import { config } from '../api'
import { useAuth } from '../AuthProvider'
import { useParams } from 'react-router-dom';

export default function Post() {
    const [comments, setComments] = useState(null);
    const [currVotes, setCurrVotes] = useState(null);
    const [post, setPost] = useState(null);
    const { userId } = useAuth();
    const { id } = useParams();

    const [formData, setFormData] = useState({ // temporary storage for entered data
        postid: id,
        title: "",
        body: "",
        userid: userId,
    });
    const [errors, setErrors] = useState({}); // displays errors
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(config.API_ADDR + '/getvoteable.php', {
                method: 'POST',
                body: JSON.stringify({
                    voteableid: id,
                })
            });
            const result = await response.json();
            setPost(result);
        }
        fetchPost();

        const fetchData = async () => {
            const response = await fetch(config.API_ADDR + '/getvoteables.php', {
                method: 'POST',
                body: JSON.stringify({
                    voteableid: id,
                })
            });
          const result = await response.json();
          setComments(result);
        };
    
        fetchData();

        const fetchCurrVotes = async () => {
            const response = await fetch(config.API_ADDR + '/getvotes.php', {
                method: 'POST',
                body: JSON.stringify({
                    userid: userId,
                    voteableid: id,
                })
            });
            const result = await response.json();
            setCurrVotes(result);
        }
        
        fetchCurrVotes();
    }, []); // Empty dependency array means this runs once after the component mounts

    if (!comments || !currVotes || !post || !userId || !id) {
        return <div>Loading...</div>;
    }

    const upvote = async (comment) => {
        const currCommentId = comment.id;
        const oldUserVote = currVotes[comment.id];
        let newUserVote = 0;
        
        if (oldUserVote === 1) {
            newUserVote = 0;
        }
        else if (oldUserVote === 0 || oldUserVote === -1) {
            newUserVote = 1;
        }

        let newCommentVotes = comment.votes + newUserVote - oldUserVote;
        
        const updatedComments = comments.map((p) => 
            p.id === currCommentId ? { ...p, votes: newCommentVotes } : p
        );
        setComments(updatedComments);
    
        setCurrVotes({
            ...currVotes,
            [currCommentId]: newUserVote,
        });
        
        await fetch(config.API_ADDR + '/updatevote.php', {
            method: 'POST',
            body: JSON.stringify({
                voteableid: currCommentId,
                userid: userId,
                vote: newUserVote,
            })
        });
    }

    const downvote = async (comment) => {
        const currCommentId = comment.id;
        const oldUserVote = currVotes[comment.id];
        let newUserVote = 0;
        
        if (oldUserVote === -1) {
            newUserVote = 0;
        }
        else if (oldUserVote === 0 || oldUserVote === 1) {
            newUserVote = -1;
        }

        let newCommentVotes = comment.votes + newUserVote - oldUserVote;
        
        const updatedComments = comments.map((p) => 
            p.id === currCommentId ? { ...p, votes: newCommentVotes } : p
        );
        setComments(updatedComments);
    
        setCurrVotes({
            ...currVotes,
            [currCommentId]: newUserVote,
        });
        
        await fetch(config.API_ADDR + '/updatevote.php', {
            method: 'POST',
            body: JSON.stringify({
                voteableid: currCommentId,
                userid: userId,
                vote: newUserVote,
            })
        });
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
    
        if (name === 'body' && !value) {
          error = 'Comment is required.';
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
                window.location.href = `/post/${id}`;
            }
        }
    };
    
    const validateForm = () => { // checks entire form for errors
        const newErrors = {};

        if (!formData.body) {
          newErrors.body = 'Comment is required.';
        }
    
        setErrors(newErrors);
        return newErrors;
    };
    
    const upActivated = (post) => {
        return currVotes[post.id] === 1 ? 'tree-button-activated' : 'tree-button';
    }

    const downActivated = (post) => {
        return currVotes[post.id] === -1 ? 'tree-button-activated' : 'tree-button';
    }

    let stuff = [];
    for (let i of comments) {
        const timestamp = i.time;
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');

        stuff.push(
            <div className='comment' key={i.id}>
                <div className='postvoting'>
                    <button className='postbutton' onClick={() => upvote(i)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#787878" className={upActivated(i)} viewBox="0 0 16 16">
                            <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777z"/>
                        </svg>
                    </button>
                    <p>{i.votes}</p>
                    <button className='postbutton down' onClick={() => downvote(i)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#787878" className={downActivated(i)} viewBox="0 0 16 16">
                            <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777z"/>
                        </svg>
                    </button>
                </div>
                <div className="comment-not-voting">
                    <div className="comment-top">
                        <h2 className="post-username">{i.username}</h2>
                        <h2 className='commenttime'>
                            <div>{hours + ":" + minutes}</div>
                            <div>{month + "/" + day + "/" + year}</div>
                        </h2>
                    </div>
                    <div className='commentcontent'>
                        <p>{i.body}</p>
                    </div>
                </div>
            </div>
        );
    }

    const timestamp = post.time;
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return (<>
        <div className="centered-content">
            <h1 className="page-title">
                <a href="/posts" className="backbutton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"/>
                    </svg>
                </a>
                {post.title}
            </h1>
            <div className='post no-hover special' key={Post.id}>
                <div className="post-top">
                    <h2 className="post-username">{post.username}</h2>
                    <h2 className='posttime'>
                        <div>{hours + ":" + minutes}</div>
                        <div>{month + "/" + day + "/" + year}</div>
                    </h2>
                </div>
                <div className='postcontent'>
                    <p>{post.body}</p>
                </div>
            </div>

            <form className="add-comment-form" onSubmit={handleSubmit}>
                <div className="comment-single-row">
                    <textarea
                        rows="5"
                        type="text"
                        placeholder="Share a comment"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                    />
                    <input className="comment-submit" type="submit" value="Comment"></input>
                </div>
                {errors.body && (
                    <span className="error-msg">{errors.body}</span>
                )}
            </form>

            <div className="all-comments">
                {stuff}
            </div>
        </div>
        <div className="right-semicircle-bottom-left"></div>
        <div className="left-semicircle-middle-right"></div>
        <div className="left-semicircle-bottom-right"></div>
        </>
    );
}