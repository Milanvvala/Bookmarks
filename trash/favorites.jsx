export default function Favorites(props) { const APIurl = "https://jsonplaceholder.typicode.com/photos/10";
  useEffect(() => {fetch(APIurl).then(response => response.json()).then(json => setTools(json)) }, [])
  return (<><div className="m-5"><div className='d-none'>Favorites</div><div className="row">
        {toolsArray.map((toolElement) => {
          return ( <div className="col-md-3 mx-3" key={toolElement.id}> <ToolCard tool={toolElement} /></div>)
        })} </div></div></>)
}
/*
let s = [{ "albumId": 1, "id": 1, "title": "accusamus beatae ad facilis cum similique qui sunt", 
"url": "https://via.placeholder.com/600/92c952", "thumbnailUrl": "https://via.placeholder.com/150/92c952" }]
  // const [toolElement, setelement] = useState({title:"", description:"", id:"", path:"", fevicon:""})
*/