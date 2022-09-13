import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/userSlice";
// import List from "../../pages/List";

const Oauth2Handler = (props) => {
    const dispatch = useDispatch();

    // 인가코드
    let code = new URL(window.location.href).searchParams.get("code");

    React.useEffect(async () => {
        await dispatch(userActions.kakaoLogin(code));
    }, []);

    return null;
};

export default Oauth2Handler;