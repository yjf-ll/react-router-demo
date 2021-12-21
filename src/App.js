import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";
import Home from './view/Home'
import About from './view/About'
import Profile from './view/Profile'
import Unknown from './view/Unknown'
import Item from "./view/Item";


function Main() {
  return (
    <div>
      <h2>app-main</h2>
      <Link to="/home">home</Link> | {" "}
      <Link to="/about">about</Link> | {" "}
      <Link to="/profile">profile</Link>
      <Outlet/>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}>
            <Route index element={
              <div>请选择发票选项</div>
            } />
            <Route path=":itemId" element={<Item/>}/>
          </Route>
          {/*<Route path="/about/:invoiceId" element={<Item />} />*/}
          <Route path="/profile" element={<Profile/>}/>
        </Route>
        <Route path="*" element={<Unknown/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App