import { createContext, useState } from "react";
export const Context = createContext();

const CoAPI = (props) => {
    const [temp, setTemp] = useState({ name: "", email: "", password: "", confirmPassword: "", url: "" })
    const Host = "http://localhost:8000"
    const signUpUrl = `${Host}/api/auth/createuser`
    const loginUrl = `${Host}/api/auth/login`

    const handleChange = (event) => { // console.log("handleChange", event.target.value) //test
        setTemp({ ...temp, [event.target.name]: event.target.value })
    }

    const [todo, setTodo] = useState([{ todo: 'todo1' }, { todo: 'todo2' }, { todo: 'todo3' }])
    const [bookmarks, setBookmarks] = useState([{ url: 'https://example.com/', uID: 'Default_UUID_12345' },])

    function refClick() { temp.refModal() } //temp.modal.current.click()
    const add = (e) => {
        e.preventDefault(); console.log('add')
        let obj = { url: temp.url, uID: crypto.randomUUID() }
        setBookmarks(bookmarks.concat(obj))
        temp.refModal()
    }
    const handleDelete = (id) => {
        console.log('delete', id)
        let newBookmarks = bookmarks.filter((e) => { return e.uID !== id })
        setBookmarks(newBookmarks)
    }; const handleUpdate = (e) => { console.log('update', e); }


    return (
        <Context.Provider value={{ temp, setTemp, handleChange, signUpUrl, loginUrl, todo, setTodo, bookmarks, setBookmarks, refClick,
    handleDelete,handleUpdate,add }}>
            {props.children}
        </Context.Provider>
    )
}

export default CoAPI