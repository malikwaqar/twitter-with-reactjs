import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from '../../firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "Malik Waqar",
            username: "waqaristic",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://avatars1.githubusercontent.com/u/49842187?s=460&u=f40259e1e37e9346d757848196904a23dbd664da&v=4"

        });
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars1.githubusercontent.com/u/49842187?s=460&u=f40259e1e37e9346d757848196904a23dbd664da&v=4" />
                    <input onChange={ (e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's Happening?" type="text" />
                </div>
                <input onChange={ (e) => setTweetImage(e.target.value)} value={tweetImage} className="tweetBox__imageInput" placeholder="Enter image URL" type="text" />
                <Button className="tweetBox__tweetButton" type="submit" onClick={sendTweet}>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
