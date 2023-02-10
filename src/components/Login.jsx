import { useContext } from 'react';
import { Context } from '../Context/mainContext';
import { useNavigate } from 'react-router-dom';
import { Form } from './'

function Login( props ) {
  const { temp, loginUrl } = useContext( Context )
  const loginCredencials = temp
  let navigate = useNavigate()

  const loginSubmit = async ( event ) => {
    console.log( "loginSubmit" ) //testing
    event.preventDefault()
    const { email, password } = loginCredencials

    const response = await fetch( loginUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( { email, password } )
    } );
    const json = await response.json()
    console.log( json )

    if ( json.success ) {   // save the auth token to local storage and redirect
      localStorage.setItem( 'auth-token', json.authToken )
      navigate( "/explore" )
    }
    else { alert( "invelid Credencials" ) }
  }

  return (
    <>
      <div style={ { display: 'flex', justifyContent: 'center' } }>
        <article>
          <Form type="login" submit={ loginSubmit } />
        </article>
      </div>
    </>
  )
}

export default Login
