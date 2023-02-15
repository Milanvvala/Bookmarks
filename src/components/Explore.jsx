import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context/context';
import { Card, Modal } from "./";
import '../utils/custom.css'

export default function Explore(props) {
  const { bookmarks, refClick, readitems, deleteitem } = useContext(Context);
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      readitems();
    } else { navigate("/login") }
  }, [])
  const handleDelete = (id) => { deleteitem(id) }
  return (<>
    <button className="contrast outline" onClick={refClick}>+ Create</button>
    <Modal />
    {(bookmarks.length === 0) && <p>No Bookmarks</p>}
    {bookmarks.map((e) => {
      return (<article key={e._id} id='card' ><a className="contrast" href={e.url} >
        <img src={e.fevicon} alt='default_alt' style={{ display: 'inline-block', width: '24px', height: '24px', marginRight: '10px' }} />
        {e.title} {e.description === null || e.description === '' ? "" : ":"} {e.description}</a>
        <div id='divi'>
          <i onClick={() => handleDelete(e._id)} className="fa-solid fa-trash-can" />
        </div>
      </article>)
    })}
  </>)
}
{/*
  const updateItem = (currentEl) => {
  //open modal // set modal value to currunt element value through setnote({ id: c._id,url:c.url})
  temp.url = currentEl.url
}
const upClick = () => {
  // updateItem(temp.url)
  //updateitem(id,url) from api with close modal with ref 
  submit = updateItem(todo)
  refClick()
}
  */
}
