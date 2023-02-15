import { Link } from 'react-router-dom'

export default function Footer() {
    return (<>
        <footer style={{ display: 'flex', justifyContent: 'space-between', marginTop:'50px' }} className='grid'>
            <div><p>
                <Link to="/buildwith"> BuildWIth </Link>
                | <Link to="/login"> Privacy Policy </Link>
                | <Link to="/SignUP"> Terms & Conditions </Link>
            </p></div>
            <div> <p>© 2020 Copyright: <a target="_blank" href="/">Example.com</a></p> </div>
        </footer>
    </>)
}
