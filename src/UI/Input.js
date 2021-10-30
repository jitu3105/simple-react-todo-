import React from 'react'
import classes from './Input.module.css'
const Input = ({placeholder,value,onChange,className}) => {
    return (
        <input className={`${classes.input} ${className}`} value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder}/>
    )
}

export default Input
