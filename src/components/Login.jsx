import { useContext } from 'react';
import Context from '../Context/context';
import { useNavigate } from 'react-router-dom';
import { Form } from './'
import loginimg from '../assets/loginimg.svg'

function Login( props ) {
  const { temp, URL,showAlert } = useContext( Context )
  const loginCredencials = temp
  let navigate = useNavigate()

  const loginSubmit = async ( event ) => {
    // console.log( "loginSubmit" ) //testing
    event.preventDefault()
    const { email, password } = loginCredencials

    const response = await fetch( URL.loginUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( { email, password } )
    } );
    const json = await response.json()
    // console.log( json ) //testing

    if ( json.success ) {   // save the auth token to local storage and redirect
      showAlert('success','Login Success')
      localStorage.setItem( 'auth-token', json.authToken )
      navigate( "/explore" )
    }
    else { showAlert('error','Invalid Credecials') }
  }

  return (
    <>
      <div className='grid'>
          <Form type="login" submit={ loginSubmit } />
          <img src={loginimg} href='/' />
      </div>
    </>
  )
}

export default Login
