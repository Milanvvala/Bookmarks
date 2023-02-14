import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function Navbar() {
  let location = useLocation();
  let navigate = useNavigate();
  const handleLogout = () => { 
    localStorage.removeItem('auth-token'); 
    navigate("/login"); 
  }

  return (<>
    <nav style={{ marginBottom: '40px' }}>
      <ul><li><Link to="/"><strong>Brand</strong></Link></li></ul>
      <ul>
        <li><Link className={`${location.pathname === "/explore" ? "" : "secondary"}`} to="/explore">explore</Link></li>
        {!localStorage.getItem('auth-token') ? <div>
          <li><Link className={`${location.pathname === "/login" ? "" : "secondary"}`} to="/login">Login</Link></li>
          <li><Link className={`${location.pathname === "/SignUP" ? "" : "secondary"}`} to="/SignUP">Signup</Link></li>
        </div> : <div> <a href="#" className='secondary' onClick={()=>handleLogout()} role="button">Logout</a></div>}
      </ul>
    </nav>
  </>)
}