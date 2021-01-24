import { Avatar } from '@material-ui/core';
import React from 'react' ;
import ThumbUpIcon from "@material-ui/icons/ThumbUp" ;
import ChatBubbleOutlineIcon  from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe" ;
import {ExpandMoreOutlined} from "@material-ui/icons" ;
import AccountCircleIcon from "@material-ui/icons/AccountCircle" ;
import "./Post.css" ;
function Post({profilepic, image , timestamp , username , message}) {
    return (
        <div className="post">
            <div className="post__top">
                {console.log(profilepic)} 

                <Avatar src={profilepic} className="post__avatar" />
                <div className="post__topinfo">
                    <h3>{username}</h3>
                  <p>{new Date(timestamp?.toDate()).toUTCString()} </p> 
                </div>

            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>

                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>

                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>

                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                    
                </div>

            </div>

        </div>
    )
}

export default Post
