
export default function Card(props) {
    return (<><article id={e._id}>
        <header style={{ padding: 0, overflow: 'hidden', marginBottom: '10px' }}>
            <img src={e.fevicon} className="card-img-top" alt="default_alt" />
        </header>
        <hgroup> <h5>{e.title}</h5> <p>{e.description}</p> </hgroup>
        <footer > <a href={e.path}>visit</a> <div>
            <i className="fa-solid fa-trash-can" ></i>
            <i className="fa-solid fa-pen-to-square" ></i>
        </div> </footer>
    </article></>)
}