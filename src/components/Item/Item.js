import React from 'react';
import './Item.css'

const Item = ({ item, addItemsHandler }) => {
    const { img, activityName, description, time } = item;
    return (
        <div className='item-container'>
            <img src={img} alt="ActivityImage" />
            <h3>{activityName}</h3>
            <p>{description.length < 150 ? description : description.slice(0, 150)}</p>
            <h4>Time: {time}</h4>
            <button className='button' onClick={() => addItemsHandler(time)}>Add to list</button>
        </div>
    );
};

export default Item;