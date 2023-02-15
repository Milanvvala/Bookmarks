import { useContext } from "react"
import '../utils/custom.css'
import Context from '../Context/context';

export default function Alerts() {
  const { alert, aStyle, setaStyle } = useContext(Context)
  const styles = {
    default: { color: 'black', backgroundColor: 'white' },
    primary: { color: 'white', backgroundColor: 'blue' }, success: { color: 'white', backgroundColor: 'green' },
    warning: { color: 'black', backgroundColor: 'yellow' }, error: { color: 'white', backgroundColor: 'red' }
  }
  const style = (s) => {
    const result = (s == null ? styles.primary : styles[s])
    return result
    // s == null ? styles.primary : (styles[s] == undefined ? styles['default'] : styles[s])
  }

  const capitalize = (word) => {
    if (!(word === null || word === undefined)) {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  }
  const closeBtn =()=> {
    setaStyle({ })
  }

  return (<>
    {alert && <div style={aStyle} id='alert'>
      <kbd style={style(alert.type)}>
        <span className='closebtn' onClick={closeBtn}>&times;</span>
        {capitalize(alert.type)} : <small>{alert.massage}</small>
      </kbd>
    </div>}</>)
}
// const style = (s) => {s == null ? styles.primary : styles[s] ;styles[s] == undefined ? 'invalid type' : styles[s] ;
