import { name } from 'file-loader';
import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';


const Listlocation = (data) => {
    console.log(data,"Listlocation")
    console.log(data.data[0], "First name");
    
    return (
        <div>
               
                {
                     <ListGroup variant="flush">
                     <ListGroup.Item></ListGroup.Item>
                     <ListGroup.Item></ListGroup.Item>
                     <ListGroup.Item></ListGroup.Item>
                     <ListGroup.Item></ListGroup.Item>
                   </ListGroup>
                }
        </div>
    )

}
export default Listlocation;