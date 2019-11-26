import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import EnrollPage from "../EnrollPage";
import FindUserInfo from "../FindUserInfo";

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const LoginContainer = styled.div``;
const Form = styled.form``;
const Input = styled.input`
    display: block;
    margin: 0 auto 0 auto;
    padding: 0;
    border: 0;
    &:not(:nth-child(3)) {
        width: 250px;
        height: 40px;
        font-size: 20px;
        border: 1px solid black;
        border-radius: 5px;
        margin-bottom: 5px;
    }
    &[type = "submit"] {
        background-color: #2d3e50;
        width: 250px;
        color: white;
        height: 30px;
        border-radius: 5px;
        margin-top: 15px;
    }
`;

const UserInformationContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 250px;
    margin-top: 60px;
    padding-top: 10px;
    border-top: solid 1px gray;
`;

const ButtonContainer = styled.div`
    text-align: center;
    color: lightgray;
    width: 100%;
    &:first-child {
        border-right: 1px white solid;
    }
`;

const Button = styled.button`
    width: 100%;
    background-color: transparent;
    border: 0;
    padding: 0;
    color: darkgray;
    font-size: 15px;
`;

const Title = styled.h1`
    text-align: center;
    position: absolute;
    top: 80px;
    color: white;
    opacity: 0.5;
`;

const LoginPresenter = ({isShowEnroll, changeShowEnroll, submitEnroll, inputChangeForEnroll, enrollInput, inputChangeForFind,
                        changeShowPopUp, isShowPopUp, errorMessage, isShowFindUser, findInput, changeShowFindUser,
                        submitUserFind}) => {
    return (
        <>
        <Container>
            <Title>캡스톤 전처리 사이트</Title>
            <LoginContainer>
                <Form action="#" method="post" className="login-information">
                    <Input type="text" name="id" placeholder="Username"/>
                    <Input type="password" name="password" placeholder="Password"/>
                    <Input type="submit" value="로그인"/>
                </Form>
                <UserInformationContainer>
                    <ButtonContainer>
                        <Button onClick = {changeShowEnroll}>회원가입</Button>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button onClick = {changeShowFindUser}>비밀번호 찾기</Button>
                    </ButtonContainer>
                </UserInformationContainer>
            </LoginContainer>
            {isShowEnroll && <EnrollPage changeShowEnroll = {changeShowEnroll} submitEnroll = {submitEnroll}
                                         inputChangeForEnroll = {inputChangeForEnroll} enrollInput = {enrollInput}
                                         changeShowPopUp = {changeShowPopUp} isShowPopUp= {isShowPopUp}
                                         errorMessage = {errorMessage} />}
            {isShowFindUser && <FindUserInfo findInput = {findInput} changeShowFindUser = {changeShowFindUser}
                                             inputChangeForFind= {inputChangeForFind} submitUserFind = {submitUserFind} isShowPopUp={isShowPopUp}
                                             errorMessage= {errorMessage} changeShowPopUp= {changeShowPopUp}/>}
        </Container>
        </>
    );
};

LoginPresenter.propTypes = {
    isShowEnroll: PropTypes.bool.isRequired,
    changeShowEnroll: PropTypes.func.isRequired,
};

export default LoginPresenter;