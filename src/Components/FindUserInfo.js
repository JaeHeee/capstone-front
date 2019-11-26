import React from "react";
import styled from "styled-components";
import PopUpWindow from "./PopUpWindow";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    display:flex;
    align-items: center;
    justify-content:center;
`;

const PopUp = styled.div`
    height: 200px;
    width: 320px;
    background-color: #2d3e50;
`;

const Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    display: block;
    margin: 0 auto 0 auto;
    padding: 0;
    border: 0;
    width: 250px;
    height: 40px;
    font-size: 12px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 5px;
    &[type = "submit"] {
        width: 100px;
        bottom: 10px;
        right: 135px;
        height: 30px;
        background-color:#36597c;
        text-align:center;
        color: white;
        font-weight: bold;
        border: none;
    }
    &[type = "button"] {
        width: 100px;
        bottom: 10px;
        right: 25px;
        height: 30px;
        background-color:#36597c;
        text-align:center;
        color: white;
        font-weight: bold;
        border: none;
    }
`;

const Title = styled.h1`
    color:white;
    opacity: 0.5;
    text-align:center;
    margin: 15px 0 20px 0;
    font-size: 20px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:last-child {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 8px;
    }
`;

const FindUserInfo = ({changeShowFindUser, findInput, inputChangeForFind, isShowPopUp, changeShowPopUp,
                        errorMessage, submitUserFind}) => {
    return (
        <Container>
            <PopUp>
                <Form method="get" onSubmit = {submitUserFind}>
                    <Title>비밀번호 찾기</Title>
                    <InputContainer>
                        <Input type="text" name= "user_name" placeholder = "이름을 입력해주세요." value = {findInput.user_name} onChange = {inputChangeForFind}/>
                        <Input type = "email" name = "user_id" placeholder = "이메일을 입력해 주세요." value = {findInput.user_id} onChange = {inputChangeForFind}/>
                    </InputContainer>
                    <InputContainer>
                        <Input type = "button" value = "취소" onClick = {changeShowFindUser}/>
                        <Input type = "submit" value = "확인"/>
                    </InputContainer>
                </Form>
                {isShowPopUp && <PopUpWindow changeShowPopUp = {changeShowPopUp} errorMessage = {errorMessage}/>}
            </PopUp>

        </Container>
    );
};

export default FindUserInfo;