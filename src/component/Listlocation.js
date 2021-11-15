import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import "./Listlocation.css";

const Listlocation = (data) => {
    const [item, setItem] = useState('');
    console.log(data.data,"Listlocation")
    
    const handleClick = (e) => {
        e.preventDefault();
        setItem(e.target.innerText);
        console.log("clicked Item", e.target.innerText);
        
    }
    console.log("item", item);
    return (
            <div>
                {
                    data.data.map(location =>
                    <ListGroup variant="dark" key={location.id}>
                        <ListGroup.Item  onClick={handleClick}>{location.name}</ListGroup.Item>     
                   </ListGroup>
                     )       
                              
                }
        </div>
    )

}
export default Listlocation;