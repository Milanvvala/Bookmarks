import { createContext, useState } from "react";
export const Context = createContext();

const CoAPI = (props) => {
    const [temp, setTemp] = useState({ name: "", email: "", password: "", confirmPassword: "", url: "", id: '' })
    const Host = "http://localhost:8000/"; const iUrl = `${Host}/api/i/`; const id = temp.id
    const URL = {
        signUpUrl: `${Host}api/auth/createuser`, loginUrl: `${Host}api/auth/login`,
        createUrl: `${iUrl}createitem`, readUrl: `${iUrl}readitems`, updateUrl: `${iUrl}updateitem/${id}`,
        deleteUrl: `${iUrl}deleteitem/${id}`
    }
    const signUpUrl = URL.signUpUrl; const loginUrl = URL.loginUrl

    const handleChange = (event) => { // console.log("handleChange", event.target.value) //test
        setTemp({ ...temp, [event.target.name]: event.target.value })
    }

    const [bookmarks, setBookmarks] = useState([{ url: "https://example.com/", title: "Example_Title", description: "Example_Description", fevicon: "https://www.google.com/s2/favicons?domain=https://picocss.com/&sz=32", _id: "123", },])

    function refClick() { temp.refModal() } //temp.modal.current.click()
    const add = (e) => {
        e.preventDefault(); console.log('add')
        let obj = { url: temp.url }
        setBookmarks(bookmarks.concat(obj))
        temp.refModal()
    }
    const handleDelete = (id) => {
        console.log('delete', id)
        let newBookmarks = bookmarks.filter((e) => { return e.uID !== id })
        setBookmarks(newBookmarks)
    }; const handleUpdate = (e) => { console.log('update', e); }


    return (
        <Context.Provider value={{ temp, setTemp, handleChange, signUpUrl, loginUrl, bookmarks, setBookmarks, refClick,
            handleDelete, handleUpdate, add
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default CoAPI
//, uID: crypto.randomUUID()
{
    /*
        //processess with api 
    const header = { 'Content-Type': 'application/json', 'auth-token': localStorage.getItem("auth-token") }
    //create
    const createitem = async (url) => {
        //api call
        const response = await fetch(URL.createUrl, { method: 'POST', headers: header, body: JSON.stringify({ url }) });
        //logic
        console.log("adding item"); let bookmark = await response.json(); setBookmarks(bookmarks.concat(bookmark))
    }
    //read
    const readitems = async () => {
        //api call
        const response = await fetch(URL.readUrl, { method: 'GET', headers: header, });
        const json = await response.json(); console.log(json); setBookmarks(json) //logic
    }
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
    //delete
    const deleteitem = async (id) => {
        //api call 
        console.log(id)
        const response = await fetch(URL.deleteUrl, { method: 'DELETE', headers: header, });
        const json = response.json(); console.log(json)
        //logic
        console.log(" deleteing item " + id); const newBM = bookmarks.filter((bookmark) => { return bookmark._id !== id }); setBookmarks(newBM)
    }

    */
}