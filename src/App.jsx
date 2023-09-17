import { Route, Routes } from "react-router-dom";
import Navbar from "./omponents/Navbar";
import Home from "./pages/Home";
import Upcoming from "./pages/Upcoming";
import Airing from "./pages/Airing";
import Popular from "./pages/Popular";
import AnimeLIst from "./pages/AnimeLIst";
import AnimeModal from "./omponents/AnimeModal";
import { Custom } from "./omponents/Custom";

const App = () => {
  return(
    <div className="hello">
      <div className=" h-screen w-screen flex flex-col  overflow-scroll  ">
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/upcoming" element={<Upcoming/>}/>
        <Route path="/airing" element={<Airing/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/animelist" element={<AnimeLIst/>}/>
        <Route path ="/Custom/:query" element={<Custom/>}/>
        <Route path ="/AnimeModal/:post" element={<AnimeModal/>}/>
      </Routes>
    </div>
    </div>
  )
};

export default App;
