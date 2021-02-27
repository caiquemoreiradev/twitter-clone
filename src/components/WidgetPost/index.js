import React from 'react';

import './styles.css';

function WidgetPost({ category, time, title, trendingCategory, image}) {
    return (
        <div className="widget__postContainer">
            <div className="widget__postDescription">
                <div className="post__info">
                    <h5 className="category">{category}</h5>
                    <p>{time}</p>
                </div>
                <h3 className="title__post">{title}</h3>
                <p className="trending__post">Trending with <strong>{trendingCategory[0]}</strong> and <strong>{trendingCategory[1]}</strong></p>
            </div>
            <div className="image__widgetPost">
                <img src={image} alt="widget" />
            </div>
        </div>
    );
}

export default WidgetPost;