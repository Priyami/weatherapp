import React, { useState } from 'react';
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
                    <ul key={location.id} className='list-style'  >
                        {item && <li onClick={handleClick} >{location.name}, {location.region}, {location.country}</li>}
                    </ul>

                )
            }
        </div>
    )
}
export default Listlocation;