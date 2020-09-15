import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars1.githubusercontent.com/u/49842187?s=460&u=f40259e1e37e9346d757848196904a23dbd664da&v=4" />
                    <input placeholder="What's Happening?" type="text" />
                </div>
                <input className="tweetBox__imageInput" placeholder="Enter image URL" type="text" />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
