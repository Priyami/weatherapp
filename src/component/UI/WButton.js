import React from 'react';
import styles from './WButton.module.css';
const WButton = props => {
    return (

        <button className={styles.button}
                type={props.type || 'button'}
                onClick={props.onClick}>
                {props.children}
        </button>

    )
}
export default WButton;