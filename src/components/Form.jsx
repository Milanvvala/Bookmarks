import { useContext } from 'react';
import { Context } from '../Context/mainContext';

const Form = (props) => {
    const { type, submit } = props
    const { handleChange, temp, createitem } = useContext(Context)
    let dis = true
    type === 'create' || type === 'login' ? dis = false : dis = (!(temp.password === temp.confirmPassword) || (temp.password === ''));
    type === 'create' ? submit = createitem : '' ;
    return (
        <>  <div style={{ maxWidth: '500px' }}>
            <form onSubmit={submit} className="m-5">
                {type === 'signup' ?
                    <><label htmlFor="name" required>Name</label>
                        <input onChange={handleChange} value={temp.name} name="name" id="name" type="text" required /></> : ''}

                {type === 'create' ?
                    <><label htmlFor="url" required>Url</label>
                        <input onChange={handleChange} value={temp.url} name="url" id="url" type="url" required /></> : ''}

                {type === 'signup' || type === 'login' ? <>
                    <label htmlFor="email" required>Email</label>
                    <div className='grid'>
                        <input onChange={handleChange} value={temp.email} name="email" id="email" type="email" required />
                    </div>
                    <div className='grid'>
                        <div>
                            <label htmlFor="password" required>Password</label>
                            <input onChange={handleChange} minLength={5} value={temp.password} name="password" id="password" type="password" required />
                        </div>
                        {type === 'signup' ? <div>
                            <label htmlFor="confirmPassword" required>Confirm Password</label>
                            <input onChange={handleChange} minLength={5} value={temp.confirmPassword} name="confirmPassword" id="confirmPassword" type="password" required /> </div> : ''}
                    </div>
                </> : ''}
                <button type="submit" disabled={dis}>Submit</button>
            </form>
        </div>
        </>
    )
}

export default Form