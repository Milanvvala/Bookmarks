import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Context from '../Context/context';


export default function Navbar() {
  const { showAlert } = useContext(Context)
  let location = useLocation();
  let navigate = useNavigate();
  const handleLogout = () => { // remove the auth token from local storage and redirect
    localStorage.removeItem('auth-token');
    navigate("/login");
    showAlert('success', 'Logout Successfully')
  }

  return (<>
    <nav style={{ marginBottom: '40px' }}>
      <ul><li><Link to="/"><strong>Brand</strong></Link></li></ul>
      <ul>
        {!localStorage.getItem('auth-token') ?
          <div>
            <li><Link className={`${location.pathname === "/login" ? "" : "secondary"}`} to="/login">Login</Link></li>
            <li><Link className={`${location.pathname === "/SignUP" ? "" : "secondary"}`} to="/SignUP">Signup</Link></li>
          </div> :
          <div>
            <li><Link className={`${location.pathname === "/explore" ? "" : "secondary"}`} to="/explore">explore</Link></li>
            <li><a href="#" className='outline' onClick={() => handleLogout()} role="button">Logout</a></li>
          </div>}
      </ul>
    </nav>
  </>)
}