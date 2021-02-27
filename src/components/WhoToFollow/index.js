import React from 'react';

import './styles.css';
import { Button, Avatar } from '@material-ui/core';

function WhoToFollow({ image, name, username }) {
    return (
        <div className="whoFollow__container">
            <Avatar src={image} />
            <div className="profile__infos">
                <h5>{name}</h5>
                <p>{username}</p>
            </div>
                <Button className='whoFollow__followButton'>Follow</Button>
        </div>
    );
}

export default WhoToFollow;