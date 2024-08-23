import React from "react";
import LoginForm from "./LoginForm";

const Login = ({ loginInfo }) => {
    return (
        <LoginForm loginInfo={loginInfo}>
            <div>
                여기는 로그인 화면
            </div>
        </LoginForm>
    )
}

export default Login;

// 리듀서랑 콘텍스트 써서 회원가입이랑 로그인