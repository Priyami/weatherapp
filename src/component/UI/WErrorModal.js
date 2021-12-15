import React from 'react';
import WCard from '../UI/WCard';
import WButton from '../UI/WButton';
import styles from './WErrorModal.module.css';
const WErrorModal = props => {
    return (
        <div>
            <div className= {styles.backdrop} onClick = {props.onConfirm}/>
            <WCard className = {styles.modal}>
                <header className = {styles.header}>
                    <p>
                        {props.title}
                    </p>
                </header>
                <p className = {styles.content}>
                    {props.message}
                </p>
                <footer className = {styles.actions}>
                    <WButton onClick = {props.onConfirm}>Okay</WButton>
                </footer>
            </WCard>
        </div>
    )
}
export default WErrorModal;