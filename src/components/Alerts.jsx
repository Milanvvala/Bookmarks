import { useContext } from "react"
import { useState, useRef } from "react"
import '../utils/custom.css'
import Context from '../Context/context';

export default function Alerts() {
  const [aStyle, setaStyle] = useState({ position: 'fixed', top: '10%', display: 'none' })
  const { temp } = useContext(Context)
  const { massage, type } = temp
  const styles = {
    primary: { color: 'white', backgroundColor: 'blue' }, success: { color: 'white', backgroundColor: 'green' },
    warning: { color: 'black', backgroundColor: 'yellow' }, error: { color: 'white', backgroundColor: 'red' }
  }
  const time = () => {
    setaStyle({ position: 'fixed', top: '10%' })
    setTimeout(() => { setaStyle({ position: 'fixed', top: '10%', display: 'none' }) }, 2000)
  }
  temp.alertActive = time
  const style = (s) => {
    //console.log(s)
    s == null ? styles.primary : (styles[s] == undefined ? 'invalid type' : styles[s])
    console.log(s);
  }
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  return (<>
    <div style={aStyle} id='alert'>
      <kbd style={style(type)}> <span className='closebtn' onClick={time}>&times;</span>
      {capitalize(type)} : <small>{massage}</small>
      </kbd>
      {/* {alert && <kbd style={style(type)}> {capitalize(type)}: <small>{massage}</small></kbd>} */}
    </div></>)
}
// const style = (s) => {s == null ? styles.primary : styles[s] ;styles[s] == undefined ? 'invalid type' : styles[s] ;
