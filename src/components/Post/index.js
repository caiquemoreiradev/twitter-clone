import React, { forwardRef } from 'react';

import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

import './styles.css';

const Post = forwardRef(({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
        <div className="post__container" ref={ref}>
            <div className="post__avatar">
                <Avatar className='avatar__post' src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName}
                            <span className='post__headerSpecial'>
                                {verified && <VerifiedUserIcon className='post__badge' />}
                                @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                {!image ? (
                 <div></div>
                ) : (
                <img src={image} alt="Post"/>
                )}
                <div className="post__footer">
                    <ChatBubbleOutlineIcon className='icon__footer' fontSize='small' />
                    <RepeatIcon className='icon__footer' fontSize='small' />
                    <FavoriteBorderIcon className='icon__footer' fontSize='small' />
                    <PublishIcon className='icon__footer' fontSize='small' />
                </div>
            </div>
        </div>
    );
});

export default Post;