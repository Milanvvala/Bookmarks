
export default function Card(props) {
    const deleteClick = (event) => { event.preventDefault() } // console.log("delete Click", e._id) //testing
    const editClick = () => { } // console.log("update click") //testing
    const e = {
        _id: '123', fevicon: 'https://picsum.photos/id/123/900/600',
        title: 'title', description: 'desc', path: 'http://example.com/'
    }
    return (<><article id={e._id}>
        <header style={{ padding: 0, overflow: 'hidden', marginBottom: '10px' }}>
            <img src={e.fevicon} className="card-img-top" alt="default_alt" />
        </header>
        <hgroup> <h5>{e.title}</h5> <p>{e.description}</p> </hgroup>
        <footer > <a href={e.path}>visit</a> <div>
            <i className="fa-solid fa-trash-can" onClick={deleteClick}></i>
            <i className="fa-solid fa-pen-to-square" onClick={editClick}></i>
        </div> </footer>
    </article></>)
}