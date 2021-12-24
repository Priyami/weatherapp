import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import "./Listlocation.css";
const Listlocation = (data) => {
    const [item, setItem] = useState(true);

    

    const handleClick = (e) => {
        setItem(!item);
        e.preventDefault();
        data.city(e.target.innerText);

    }

    return (
        <div>
             {
                data.data.map(location =>
                    <ListGroup variant="dark" key={location.id} >
                        {item && <ListGroup.Item onClick={handleClick} >{location.name}</ListGroup.Item>}
                    </ListGroup>

                )

            }
        </div>

    )

}
export default Listlocation;