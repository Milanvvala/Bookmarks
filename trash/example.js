  const upNote = (c) => { refB.current.click(); setnote({ id: c._id, e_title: c.title, e_desc: c.desc, e_tag: c.tag }) }
  const upCl = (e) => {
    console.log("updating", note); editNote(note.id, note.e_title, note.e_desc, note.e_tag)
    refClose.current.click(); props.showAlert("updated", "success")
  }
    {notes.map((note) => { return <Note key={note._id} upNote={upNote} note={note} /> })}
// <button style={{ display: 'none' }} data-target="modal-example" onClick={refClick} > lmd ref</button>
export function Favorites(props) { const APIurl = "https://jsonplaceholder.typicode.com/photos/10";
  useEffect(() => {fetch(APIurl).then(response => response.json()).then(json => setTools(json)) }, [])
  return (<><div className="m-5"><div className='d-none'>Favorites</div><div className="row">
        {toolsArray.map((toolElement) => {
          return ( <div className="col-md-3 mx-3" key={toolElement.id}> <ToolCard tool={toolElement} /></div>)
        })} </div></div></>)
}
// https://www.google.com/s2/favicons?domain=${domain}&sz=${size} for any fevicon
