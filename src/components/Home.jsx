import hero from '../assets/heroimg.svg'

export default function Home(props) {

  return (<> <header>
    <div className='grid'>
      <div> <hgroup> <h1> Welcome to my bookmarking app </h1> <h2> Save your bookmarkd on web </h2> </hgroup> </div>
      <div> <img src={hero} href='/' /> </div>
    </div>
  </header> </>)
}
