import './App.css';
// const { BrowserRouter } = require("react-router-dom");
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from './views/About';
import Home from './views/Home';
import Users from './views/Users';
import UserDetail from './views/UserDetail';
import NotFound from './views/NotFound'
import Layout from './views/Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 아무 path 없으면 레이아웃 자동 만들어줌 */}
        <Route element={<Layout/>}>
          {/* 최초 슬래시로 갔을 때 */}
          <Route index element={<Home/>}/> 
          <Route path="about" element={<About/>}/>
          <Route path="user" element={<Users/>}/>
          <Route path="user/:id" element={<UserDetail/>}/>
          {/* 예외페이지 처리 */}
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
