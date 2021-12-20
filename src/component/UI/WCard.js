import React from 'react';
import styles from './WCard.module.css';
const WCard = props => {
    return(
        <div className={`${styles.card} ${props.className}`}>
            {props.children}
        </div>
    )
}
export default WCard;