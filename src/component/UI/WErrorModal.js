import React from 'react';
import WCard from '../UI/WCard';
import WButton from '../UI/WButton';
import styles from './WErrorModal.module.css';
const WErrorModal = props => {
    return (
        <div>
            <div/>
            <WCard>
                <header className = {styles.header}>
                    <h3>
                        {props.title}
                    </h3>
                </header>
                <p className = {styles.content}>
                    {props.message}
                </p>
                <footer className = {styles.actions}>
                    <WButton>Okay</WButton>
                </footer>
            </WCard>
        </div>
    )
}
export default WErrorModal;