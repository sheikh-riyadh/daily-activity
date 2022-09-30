import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {

    const [items, setItems] = useState([])
    let sum = 0;

    useEffect(() => {
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])



    const [time, setTime] = useState(0)


    const addItemsHandler = (activityTime) => {
        const newTime = time + parseInt(activityTime);
        setTime(newTime)
    }
    return (
        <div>
            <div className='items-main-container'>
                <div className='items-container'>
                    {
                        items.map((item) => <Item key={item.id} item={item} addItemsHandler={addItemsHandler}></Item>)
                    }
                </div>

                <div className="items-info">
                    <div className='position'>
                        <div className="person-container">
                            <img src="images/person.jpg" alt="person" />
                            <div>
                                <p>Sheikh Riyadh</p>
                                <span><i className="fa-solid fa-location-dot"></i> Puran Dhaka</span>
                            </div>
                        </div>

                        <div className="person-info">
                            <div>
                                <span>60kg</span>
                                <p>Weight</p>
                            </div>
                            <div>
                                <span>5.8</span>
                                <p>Hight</p>
                            </div>
                            <div>
                                <span>23 years</span>
                                <p>Age</p>
                            </div>
                        </div>
                        <div>
                            <h4>Add a Break</h4>
                            <div className='break-container'>
                                <a href="/30">30</a>
                                <a href="/10">10</a>
                                <a href="/50">50</a>
                                <a href="/5">5</a>
                            </div>
                        </div>
                        <div>
                            <h4>Activity details</h4>
                            <div className='activity'>
                                <p>Activities time</p>
                                <p>{time} <span>hrs</span></p>
                            </div>
                            <div className='break-time'>
                                <p>Break time</p>
                                <p>0 <span>Minute</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;