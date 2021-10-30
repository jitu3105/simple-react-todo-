import React,{useContext,useEffect} from 'react'
import classes from './Form.module.css'
import Input from '../UI/Input'
import Button from '../UI/Button'
import Store from '../Context/Store'
import {v4 as uuid} from 'uuid'

const Form = ({input,setInput,edit,setEdit}) => {
    const context=useContext(Store)
    let temp={}
    let temp2=[]
    const SubmitHandler=(e)=>{
        e.preventDefault();
console.log('submit')
        temp={id:uuid(),task:input}
        context.add(temp);
        setInput('')
        localStorage.setItem('tasks',JSON.stringify([...context.data,temp]))
    }
    useEffect(()=>{
        if(edit){
            setInput(edit.task)
        }
    },[edit])
    const editHandler=(e)=>{
        e.preventDefault()
        temp={id:edit.id,task:input}
        temp2=context.data.filter(word=>word.id!==edit.id)
        context.update([...temp2,temp])
        setInput('')
        localStorage.setItem('tasks',JSON.stringify([...temp2,temp]))
        setEdit({})
    }
    return (
            <form className={classes.form} onSubmit={edit.id ? editHandler : SubmitHandler}>
                <Input value={input} onChange={setInput} className={classes.input} placeholder='Add a task'/>
                <Button type={'submit'} className={classes.Add}>{edit.id?'Edit':'Add'}</Button>
                {edit.id && 
                <Button type={'button'} className={classes.Add} onClick={()=>{setEdit({});setInput('')}}>Cancel</Button> 
                }
            </form>
    )
}

export default Form
