import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])



    const addItemsHandler = (time) => {
        console.log(time)
    }
    return (
        <div className='items-main-container'>
            <div className='items-container'>
                {
                    items.map((item) => <Item key={item.id} item={item} addItemsHandler={addItemsHandler}></Item>)
                }
            </div>

            <div className="items-info">
                <div>
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
                </div>
            </div>
        </div>
    );
};

export default Items;