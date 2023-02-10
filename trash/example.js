{
  /* 
const u = {
  "success": true,
  "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkY2Y2N2FjZDQ5Y2FlNWY3ZmZjYzU2In0sImlhdCI6MTY3NTQyNTQwMn0.zgykjLrHdhl7fE7I6-k8RpB7KJy4GiJbIDDmvvlDMZQ",
  "user": {
    "name": "name_",
    "email": "e@mail.io",
    "password": "$2a$10$7CRL4VExacjYSblMQ0z6sOx9R7HfuzhubuBr5ybw2RdJaPEG4SXCe",
    "_id": "63dcf67acd49cae5f7ffcc56",
    "date": "2023-02-03T11:56:42.052Z",
    "__v": 0
  }
}
password = pass_
const uf = {
  "success": true,
  "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkY2Y2N2FjZDQ5Y2FlNWY3ZmZjYzU2In0sImlhdCI6MTY3NTQyNzA1Nn0.4j20LqOmWD_GSsyQKHe-PuiLm301s6kx_BJIBX_ufSk",
  "user": {
    "_id": "63dcf67acd49cae5f7ffcc56",
    "name": "name_",
    "email": "e@mail.io",
    "password": "$2a$10$7CRL4VExacjYSblMQ0z6sOx9R7HfuzhubuBr5ybw2RdJaPEG4SXCe",
    "date": "2023-02-03T11:56:42.052Z",
    "__v": 0
  }
}
// authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkZDE3OWFmNTJhZGQ3YmRiOWNmZmNhIn0sImlhdCI6MTY3NTQzMzg4Mn0.BCHU-on4WKrB5Slq8EoO9OCfIBez8F0QIym3-BObnmA",
// email: "new@mail.co"
// name: "new_name"
// password: "$2a$10$LgXI6kuZ5mQKxZF2cNz7auYVGPm0cO6XUbRUXYJv7bFeHRaG5YODK"
*/
}
export default function AddNote(props) {
  const addcl = (e) => { addNote(note.title, note.desc, note.tag)
    setnote({ title: "", desc: "", tag: "" });props.showAlert("added S", "success")}
  return (<form>
    <label>Title</label> <input value={note.title} />
    <label>Description</label> <input value={note.desc} />
    <label>Tag</label> <input value={note.tag} />
    <button disabled={note.title.length < 5 || note.desc.length < 5} onClick={addcl} >Submit</button>
  </form>)
}
export function Notes(props) { const { notes, getNotes, editNote } = co;

  useEffect(() => { if (localStorage.getItem('token')) { getNotes(); } else { navigate("/login") } }, [])
  const [note, setnote] = useState({ id: "", e_title: "", e_desc: "", e_tag: "" })
  const refB = useRef(); const refClose = useRef();
  const upNote = (c) => {refB.current.click();setnote({ id: c._id, e_title: c.title, e_desc: c.desc, e_tag: c.tag })}
  const upCl = (e) => {console.log("updating", note); editNote(note.id, note.e_title, note.e_desc, note.e_tag)
    refClose.current.click(); props.showAlert("updated", "success") }

  return (<><AddNote /><button type="button" ref={refB} data-bs-toggle="modal" data-bs-target="#exampleModal">B</button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog"> <div className="modal-content"> <div className="modal-footer">
          <button ref={refClose}>Close</button>
          <button onClick={upCl}>Update Note</button>
        </div></div></div></div><h3>Your Notes</h3>
      {notes.length === 0 && 'no notes'}
      {notes.map((note) => { return <Note key={note._id} upNote={upNote} note={note} /> })}
    </>)
}
export default function Note(props) {    
    return (<><h5 >{note.title}</h5> <p>{note.desc}</p>
            <i onClick={() => { deleteNote(note._id) }}></i>
            <i onClick={() => { upNote(note) }}></i> </>)
}