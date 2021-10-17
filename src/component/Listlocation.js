import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import "./Listlocation.css";


const Listlocation = (data) => {
    console.log(data,"Listlocation")
    return (
            <div>
                {
                    data.data.map(location =>
                    <ListGroup variant="dark" key={location.id}>
                        <ListGroup.Item>{location.name}</ListGroup.Item>     
                   </ListGroup>
                     )       
                              
                }
        </div>
    )

}
export default Listlocation;