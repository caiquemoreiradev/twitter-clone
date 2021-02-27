import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';
import firebase from 'firebase';

import ImageIcon from '@material-ui/icons/Image';
import HighlightOff from '@material-ui/icons/HighlightOff';

import db from '../../services/firebase';

import './styles.css';

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const [image, setImage] = useState(false);

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Caique Moreira',
      username: 'cmoreiradev',
      verified: true,
      text: tweetMessage,
      image: !tweetImage ? '' : tweetImage,
      avatar: 'https://avatars0.githubusercontent.com/u/56305107?s=460&u=2240a7b9b5e8499f64fb1607b42c00f0af10096a&v=4',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setTweetMessage('');
    setTweetImage('');
    setImage(false);
  }

  return (
    <div className="tweetBox__container">
      <form>
        <div className="tweetBox__input">
          <Avatar src='https://avatars0.githubusercontent.com/u/56305107?s=460&u=2240a7b9b5e8499f64fb1607b42c00f0af10096a&v=4' />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
          />
        </div>

        {image ? (
          <div className="image__container">
            <input
              type="text"
              className="tweetBox__imageInput"
              placeholder="Optional: Enter image URL"
              value={tweetImage}
              onChange={(e) => setTweetImage(e.target.value)}
            />
            <div onClick={(e) => setImage(false)} className="exit__icon">
              <HighlightOff />
            </div>
          </div>
        ) : (
            <div onClick={(e) => setImage(true)} className="image__icon">
              <ImageIcon className='icon__image' />
            </div>
          )}

        {tweetMessage && <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>}
      </form>
    </div>
  );
}

export default TweetBox;