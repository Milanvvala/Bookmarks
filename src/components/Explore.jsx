import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context/mainContext';
import { Card, Modal } from "./";
import '../utils/custom.css'

export default function Explore(props) {

  const { bookmarks, setBookmarks, refClick, readitems } = useContext(Context);
  let submit = 'create'
  let navigate = useNavigate();
  const handleDelete = (id) => {
    console.log('delete', id)
    let newBookmarks = bookmarks.filter((e) => { return e._id !== id })
    setBookmarks(newBookmarks)
  }; 
  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      readitems();
    } else { navigate("/login") }
  }, [])

  return (<>
    <button className="secondary" onClick={refClick}>+ Create</button>
    <Modal type='form' submit={submit} />
    {(bookmarks.length === 0) && <p>No Bookmarks</p>}
    {/* {todo.map((e) => { return <article key={e.todo}>{e.todo}</article> })} */}
    {bookmarks.map((e) => {
      return (<article key={e._id} id='card' ><a className="contrast" href={e.url} >
        <img src={e.fevicon} alt='default_alt' style={{ display: 'inline-block', width: '24px', height: '24px', marginRight: '10px' }} />
        {e.title} : {e.description}</a>
        <div id='divi'>
          {/* <i onClick={() => handleUpdate(e)} className="fa-solid fa-pen-to-square" /> */}
          <i onClick={() => handleDelete(e._id)} className="fa-solid fa-trash-can" />
        </div>
      </article>)
    })}
  </>)
}
{
  /*
  const updateItem = (currentEl) => {
  refClick()
  //open modal // set modal value to currunt element value through setnote({ id: c._id,url:c.url})
  temp.url = currentEl.url
}
const upClick = () => {
  // updateItem(temp.url)
  //updateitem(id,url) from api with close modal with ref 
  refClick()
  submit = updateItem(todo)
}
  */
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
 const tb = [{ url: "https://picocss.com/", title: "1-Pico.css • Minimal CSS Framework for semantic HTML",
    description: "Elegant styles for all native HTML elements without .classes and dark mode automatically enabled. 7.9 kB minified and gzipped!", fevicon: "https://www.google.com/s2/favicons?domain=https://picocss.com/&sz=32", _id: "63e522545d2bebfbc7cfffb0",},
    { url: "https://picocss.com/", title: "2_Pico.css • Minimal CSS Framework for semantic HTML",
    description: "Elegant styles for all native HTML elements without .classes and dark mode automatically enabled. 7.9 kB minified and gzipped!", fevicon: "https://www.google.com/s2/favicons?domain=https://picocss.com/&sz=64", _id: "63e522545d2bebfbc7cfffb1",},
    { url: "https://picocss.com/", title: "3_Pico.css • Minimal CSS Framework for semantic HTML",
    description: "Elegant styles for all native HTML elements without .classes and dark mode automatically enabled. 7.9 kB minified and gzipped!", fevicon: "https://www.google.com/s2/favicons?domain=https://picocss.com/&sz=128", _id: "63e522545d2bebfbc7cfffb2",}
  ]
*/}