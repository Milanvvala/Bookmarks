import { useContext } from 'react';
import { Context } from '../Context/mainContext';
import { useNavigate } from 'react-router-dom';
import { Form } from './'

function SignUp( props ) {
  const { temp, signUpUrl } = useContext( Context )
  const signUpcredencials = temp
  let navigate = useNavigate()

  const signupSubmit = async ( event ) => {
    console.log( "signupSubmit" ) //testing
    event.preventDefault()
    const { name, email, password } = signUpcredencials

    const response = await fetch( signUpUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( { name, email, password } )
    } )
    const json = await response.json()
    console.log( json ) //testing

    if ( json.success ) {   // save the auth token to local storage and redirect
      localStorage.setItem( 'auth-token', json.authToken )
      navigate( "/explore" )
    }
    else { alert( "invelid Credencials" ) }
  }

  return (
    <>
      <Form type="signup" submit={ signupSubmit } />
    </>
  )
}

export default SignUp