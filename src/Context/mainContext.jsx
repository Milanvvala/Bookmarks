import { useState, useContext } from "react"
import Context from "./context"

const CoAPI = (props) => {

    const [temp, setTemp] = useState({ name: "", email: "", password: "", confirmPassword: "", url: "", id: "" })
    const Host = "http://localhost:8000/"
    const iUrl = `${Host}api/i/`
    const URL = {
        signUpUrl: `${Host}api/auth/createuser`, loginUrl: `${Host}api/auth/login`,
        createUrl: `${iUrl}createitem`, readUrl: `${iUrl}readitems`, updateUrl: `${iUrl}updateitem/${'id'}`,
        deleteUrl: `${iUrl}deleteitem/`
    }
    const handleChange = (event) => { setTemp({ ...temp, [event.target.name]: event.target.value }) }

    const [bookmarks, setBookmarks] = useState([])
    /* example object 
    { 
        url: "https://example.com/", 
        title: "Example_Title", 
        description: "Example_Description", 
        fevicon: "https://www.google.com/s2/favicons?domain=https://picocss.com/&sz=32", 
        _id: "123", 
    }  
    */

    //alert
    const [alert, setAlert] = useState(null);
    const [aStyle, setaStyle] = useState({ position: 'fixed', top: '10%', display: 'none' })
    const styles = {
        primary: { color: 'white', backgroundColor: 'blue' }, success: { color: 'white', backgroundColor: 'green' },
        warning: { color: 'black', backgroundColor: 'yellow' }, error: { color: 'white', backgroundColor: 'red' }
      }
    const showAlert = (type,massage) => {
        setAlert({type,massage})
        setaStyle({ position: 'fixed', top: '10%' })
        setTimeout(() => { setAlert(null);setaStyle({ position: 'fixed', top: '10%', display: 'none' }) }, 3000);
        temp.alertActive()
    }

    function refClick() { temp.refModal() } //temp.modal.current.click()

    // CRUD processess with API
    const header = { 'Content-Type': 'application/json', 'auth-token': localStorage.getItem("auth-token") }
    //create
    const createitem = async (url) => {
        const response = await fetch(URL.createUrl, { method: 'POST', headers: header, body: JSON.stringify({ url }) }) //api call
        //logic
        let bookmark = await response.json()
        setBookmarks(bookmarks.concat(bookmark))
    }
    //read
    const readitems = async () => {
        const response = await fetch(URL.readUrl, { method: 'GET', headers: header, }) //api call
        //logic
        const json = await response.json()
        setBookmarks(json)
    }
    //delete 
    const deleteitem = async (id) => {
        const response = await fetch(URL.deleteUrl + id, { method: 'DELETE', headers: header, }) //api call
        //logic
        const json = await response.json()
        const newBM = bookmarks.filter((bookmark) => { return bookmark._id !== id })
        setBookmarks(newBM)
    }
    return (
        <Context.Provider
            value={{ temp, setTemp, handleChange, URL, bookmarks, setBookmarks, refClick, createitem, readitems, deleteitem, alert }}
        >
            {props.children}
        </Context.Provider>
    )
}
export default CoAPI
{/*
    //update
    const updateitem = async (id, url) => {
        //api call
        const response = await fetch(URL.updateUrl, { method: 'PUT', headers: header, body: JSON.stringify({ url }),  });
        const json = await response.json(); console.log(json); let newBM = JSON.parse(JSON.stringify(bookmarks))
        //logicto edit  in client
        for (let i = 0; i < newBM.length; i++) {
            const el = newBM[i];
            if (el._id === id) { newBM[i].title = title; newBM[i].tag = tag; newBM[i].desc = desc; break; }
        }
        console.log(id, bookmarks, newBM); setBookmarks(newBM)
    }
    */
}