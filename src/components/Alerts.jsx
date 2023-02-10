import { useState } from "react"
import '../utils/custom.css'

export default function Alerts(props) {
  const { massage, type } = props
  const [alert, setalert] = useState({ position: 'fixed', top: '10%', display: 'none' })

  const time = () => {
    setalert({ position: 'fixed', top: '10%' })
    setTimeout(() => { setalert({ position: 'fixed', top: '10%', display: 'none' }) }, 2000)
  }

  const styles = {
    primary: { color: 'white', backgroundColor: 'blue' }, success: { color: 'white', backgroundColor: 'green' },
    warning: { color: 'black', backgroundColor: 'yellow' }, error: { color: 'white', backgroundColor: 'red' }
  }

  const style = (s) => {//console.log(s)
    s == null ? styles.primary : (styles[s] == undefined ? 'invalid type' : styles[s])
    //s==null||s=='primary'?styles.primary:'';s=='success'?styles.success:'';s=='warning'?styles.warning:'';s=='error'?styles.error: ''; 
  }

  return (<>
    <button onClick={time}>Alert</button><div style={alert} id='alert'>
      <kbd style={style(type)}> <span className='closebtn' onClick={time}>&times;</span>
        {type}<small>{massage}</small>
      </kbd>
    </div></>)
}
// const style = (s) => {s == null ? styles.primary : styles[s] ;styles[s] == undefined ? 'invalid type' : styles[s] ;
