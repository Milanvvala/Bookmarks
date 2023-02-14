import { Route, Routes } from "react-router-dom";
import { Navbar, Home, Login, SignUp, Alerts, Explore, Footer, BuildWith } from './components'
import CoAPI from './Context/mainContext';

function App() {

  return (
    <div className="container">
      <CoAPI>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/buildwith" element={<BuildWith />} />
        </Routes>
      </CoAPI>
      <Footer />
      <Alerts type='error ' massage='this is an Error'/>
    </div>
  )
}
// https://www.google.com/s2/favicons?domain=${domain}&sz=${size} for any fevicon
export default App