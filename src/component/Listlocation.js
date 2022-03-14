import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import "./Listlocation.css";
const Listlocation = (data) => {
    const [item, setItem] = useState(true);

    const handleClick = (e) => {
        setItem(!item);
        e.preventDefault();
        data.city(e.target.innerText);
        data.activate.current.focus();
    }

    return (
        <div>
             {
                data.data.map(location =>
                    <ListGroup variant="dark" key={location.id} >
                        {item && <ListGroup.Item onClick={handleClick} >{location.name}, {location.region}, {location.country}</ListGroup.Item>}
                    </ListGroup>

                )
            }
        </div>
    )
}
export default Listlocation;