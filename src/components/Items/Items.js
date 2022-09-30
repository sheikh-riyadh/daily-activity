import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Items = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    /* Here is set time */
    const [time, setTime] = useState(0)


    /* Here is set break time */
    const [breakTime, setBreakTime] = useState(0)



    /* Local storage */
    const getLocalStorage = () => {
        let time = 0;

        const savedTime = localStorage.getItem('time');
        if (savedTime) {
            return time = JSON.parse(savedTime)
        }
        else {
            return time;
        }
    }

    /* Set break time to local store and  */
    const setLocalStorage = (result) => {
        let time = getLocalStorage()
        time = result;
        localStorage.setItem('time', JSON.stringify(time))
        setBreakTime(result)
    }

    /* setLocalStorage() */
    useEffect(() => {
        const result = getLocalStorage()
        setBreakTime(result)
    }, [])


    /* Get time */
    const addItemsHandler = (activityTime) => {
        const newTime = time + parseInt(activityTime);
        setTime(newTime)
    }


    /* Notification toast */
    const notify = () => {
        toast("Activity has been completed", { position: "top-center" })
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
                                <span onClick={() => setLocalStorage(10)}>10</span>
                                <span onClick={() => setLocalStorage(30)}>30</span>
                                <span onClick={() => setLocalStorage(50)}>50</span>
                                <span onClick={() => setLocalStorage(5)}>5</span>
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
                                <p>{breakTime} <span>Minute</span></p>
                            </div>
                        </div>
                        <button onClick={notify}>Acticity Completed</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Items;