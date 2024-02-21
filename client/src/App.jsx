import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signout from "./Pages/Signout";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Header from "./components/header";

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
  <Route path='/'element={<Home />} />
  <Route path='/signin'element={<Signin />} />
  <Route path='/signout'element={<Signout />} />
  <Route path='/about'element={<About />} />
  <Route path='/profile'element={<Profile />} />
  </Routes>
  </BrowserRouter>;
}