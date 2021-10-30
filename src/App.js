import classes from './App.module.css';
import { useState, useEffect } from 'react'
import Form from './Components/Form'
import List from './Components/List'
import Store from './Context/Store'

function App() {
  let temp = []
  const initData = JSON.parse(localStorage.getItem('tasks'))
  const [input, setInput] = useState('');
  const [edit, setEdit] = useState({});
  const [data, setData] = useState([]);
  const addHandler = (dta) => {
    setData([...data, dta]);
  }
  const updateHandler = (dta) => {
    temp = [...dta]
    setData(temp);
  }
  useEffect(() => {
    if (initData) {
      setData([...initData]);
    }

  }, [])
  return (
    <Store.Provider value={{ data, add: addHandler, update: updateHandler }}>
      <div className={classes.App}>
        <Form edit={edit} input={input} setEdit={setEdit} setInput={setInput} />
        <List edit={edit} setInput={setInput} setEdit={setEdit} />
      </div>
    </Store.Provider>
  );
}

export default App;
