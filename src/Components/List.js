import React, { useContext } from 'react'
import Button from '../UI/Button'
import Store from '../Context/Store'
import classes from './List.module.css'

const List = ({edit,setEdit}) => {
    let temp = []
    const tasks = useContext(Store);
    const deleteHandler = (id) => {
        temp = tasks.data.filter(word => word.id !== id)
        tasks.update(temp)
        localStorage.setItem('tasks', JSON.stringify(temp))
    }
    const editHandler = (id) => {
        temp = tasks.data.filter(word => word.id === id)[0]
        console.log(temp)
        setEdit(temp);
        // localStorage.setItem('tasks', JSON.stringify(temp))
    }
    return (
        <div className={classes.ListContainer}>
            
            {!tasks.data.length  &&
                <div className={classes.ListItem}>
                    <p>Please add a task</p>
                </div>
            }
            {tasks && tasks.data.map(tsk =>
                <div key={tsk.id} className={classes.ListItem}>
                    <p>{tsk.task}</p>
                    <div className={classes.Actions}>
                        <Button className={classes.edit} onClick={() => { editHandler(tsk.id) }}>Edit</Button>
                        <Button className={classes.del} onClick={() => { deleteHandler(tsk.id) }}>delete</Button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default List
