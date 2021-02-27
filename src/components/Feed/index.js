import React, { useState, useEffect } from 'react';

import './styles.css';
import TweetBox from '../TweetBox';
import Post from '../Post';
import FlipMove from 'react-flip-move';

import db from '../../services/firebase';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => doc.data()
                ))
            ))
    }, []);

    return (
        <div className="feed__container">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <FlipMove>
                {posts.map(post => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
            </FlipMove>

        </div>
    );
}

export default Feed;