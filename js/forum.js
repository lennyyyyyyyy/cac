loggedin = $("#loggedin").val();

function activatePosts() {
    $(".post").each((i, post) => { // for each post
        post = $(post);
        currState = 0;
        postid = post.find(".postid").val();
        votes = parseInt(post.find(".votes").val()); // number of total votes
        vote = parseInt(post.find(".vote").val()); // vote of current user
        function setVoteState(state) { // set user vote and change button colors
            if (state == 1) {
                post.find(".upvote svg").attr("fill", "var(--bs-primary)");
                post.find(".downvote svg").attr("fill", "var(--bs-gray)");
            } else if (state == 0) {
                post.find(".upvote svg").attr("fill", "var(--bs-gray)");
                post.find(".downvote svg").attr("fill", "var(--bs-gray)");
            } else if (state == -1) {
                post.find(".upvote svg").attr("fill", "var(--bs-gray)");
                post.find(".downvote svg").attr("fill", "var(--bs-danger)");
            }
            currState = state;
        }
        function updateVotes(newState) { // update the total vote count on database
            $.ajax({
                type: "POST",
                url: "updatevote.php",
                data: {
                    postid: postid,
                    newvote: newState,        
                },
                success: (data) => {
                    console.log(data);
                }
            })
            votes += newState - currState;
            post.find("span").text(votes);
        }
        setVoteState(vote);
        post.find(".upvote").click(() => {
            if (loggedin) {
                console.log("upvoted");
                if (currState == 1) { // if already upvoted, remove upvote
                    updateVotes(0);
                    setVoteState(0);
                } else { // if not upvoted, upvote
                    updateVotes(1);
                    setVoteState(1);
                }
            }
        })
        post.find(".downvote").click(() => {
            if (loggedin) {
                console.log("downvoted");
                if (currState == -1) { // if already downvoted, remove downvote
                    updateVotes(0);
                    setVoteState(0);
                } else { // if not downvoted, downvote
                    updateVotes(-1);
                    setVoteState(-1);
                }
            }
        })
    })
}

activatePosts();