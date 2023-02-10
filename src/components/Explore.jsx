import { useContext, useState } from 'react';
import { Context } from '../Context/mainContext';
import { Card, Modal } from "./";
import '../utils/custom.css'


export default function Explore(props) {

  const { temp, todo, setTodo, bookmarks, setBookmarks, refClick,add } = useContext(Context);
  const handleDelete = (id) => {
    console.log('delete', id)
    let newBookmarks = bookmarks.filter((e) => { return e.uID !== id })
    setBookmarks(newBookmarks)
  }; const handleUpdate = (e) => { console.log('update', e); }

  return (<>
    <button className="secondary" onClick={refClick}>+ Create</button>
    <Modal type='form' submit={add} value={'working todo'}/>
    {(todo.length === 0) && 'no todos'}
    {/* {todo.map((e) => { return <article key={e.todo}>{e.todo}</article> })} */}
    {bookmarks.map((e) => {
      return (<article key={e.uID}>{e.url}
        <div id='divi'>
          <i onClick={()=>handleUpdate(e)} className="fa-solid fa-pen-to-square" />
          <i onClick={()=>handleDelete(e.uID)} className="fa-solid fa-trash-can" />
        </div></article>)
    })}
  </>)
}
{/*
{tools.map((e) => { return ( <Card tool={e} updateTool={updateTool} />) })} 
{notes.map((note) => {return <Note key={note._id} upNote={upNote} note={note} />})}
// const addTodo = (e) => {e.preventDefault();let obj = { url: temp.url }; todos.push(obj);setTodo(todos); temp.refModal() }
// const [todos, setTodos] = useState([]); 
const newN = notes.filter((note) => { return note._id !== id }); setnotes(newN)
{
  "user": "63dcf67acd49cae5f7ffcc56",
  "url": "https://picocss.com/",
  "title": "Pico.css • Minimal CSS Framework for semantic HTML",
  "description": "Elegant styles for all native HTML elements without .classes and dark mode automatically enabled. 7.9 kB minified and gzipped!",
  "fevicon": "https://www.google.com/s2/favicons?domain=https://picocss.com/&sz=512",
  "_id": "63e522545d2bebfbc7cfffb0",
  "__v": 0
}
*/}