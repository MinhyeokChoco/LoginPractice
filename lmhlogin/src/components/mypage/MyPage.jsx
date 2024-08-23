import React from "react";

const MyPage = ({ loginInfo }) => {
    return (<>
        <h1>마이페이지</h1>
        <div>{loginInfo?.uid}</div>
    </>)
}

export default MyPage