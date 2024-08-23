import React from "react";
import { useState } from "react";
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import MyPage from "./components/mypage/MyPage";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [loginInfo, setLoginInfo] = useState(null);

  const Redirect = () => {
    if (loginInfo) return <MyPage loginInfo={loginInfo} />
    return (<Navigate to={'/login'} />)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login loginInfo={{ loginInfo, setLoginInfo }} />} />
        <Route path="/mypage" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
