import React from 'react'
import styles from './Button.module.css'

const Button = ({ children, ...props }) => {
    return (
    <Button  disabled className={styles.button}>{children}</Button>;
    
    );

};


export default Button