import React from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ children, loginInfo }) => {
    const uidInput = useRef(null);
    const upwInput = useRef(null);

    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        const user = {
            uid: "hyeok",
            upw: "1234"
        }
        if (user.uid === uidInput.current.value && user.upw === upwInput.current.value) {
            loginInfo.setLoginInfo(user);
            navigate('/mypage');
        }
    }

    useEffect(() => {
        console.log(uidInput.current.value)
    }, [uidInput])

    return (
        <form onSubmit={loginHandler}>
            {children}
            <label htmlFor="">아이디</label>
            <input type="text" ref={uidInput} />
            <label htmlFor="">비밀번호</label>
            <input type="text" ref={upwInput} />
            <button>로그인</button>
        </form>
    )
}

export default LoginForm;