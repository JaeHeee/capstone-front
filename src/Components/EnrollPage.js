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
    height: 400px;
    width: 600px;;
    background-color: #2d3e50;
    // opacity: 1;
`;

const Form = styled.form`
    height: 100%;
    display:flex;
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
        position: absolute;
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
        position: absolute;
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

const InputContainer = styled.div`
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    &:first-child {
        border-right: 1px solid gray;
    }
`;

const EnrollPage = ({submitEnroll, inputChangeForEnroll, enrollInput, isShowPopUp, changeShowPopUp,
                    errorMessage, changeShowEnroll}) => {
    return (
        <Container>
            <PopUp>
                <Form method="post" onSubmit = {submitEnroll}>
                    <InputContainer>
                        <Input type="text" name="user_name" placeholder = "이름을 입력해주세요." onChange = {inputChangeForEnroll} value = {enrollInput.user_name}/>
                        <Input type = "tel" name ="phone" maxLength = {13} placeholder = "전화번호를 입력해주세요." onChange = {inputChangeForEnroll} value = {enrollInput.phone}/>
                    </InputContainer>
                    <InputContainer>
                        <Input type = "email" name="user_id" placeholder = "이메일을 입력해주세요" onChange = {inputChangeForEnroll} value = {enrollInput.user_id}/>
                        <Input type = "password" name = "password" maxLength = {20} placeholder = "비밀번호를 입력해주세요(20자리 이하)" onChange = {inputChangeForEnroll} value = {enrollInput.password}/>
                        <Input type = "password" name = "enroll-password-check" maxLength = {20} placeholder = "비밀번호 확인" onChange = {inputChangeForEnroll} value = {enrollInput.passwordCheck}/>
                        <Input type = "button" onClick = {changeShowEnroll} value = "취소"/>
                        <Input type = "submit"  value = "가입완료"/>
                    </InputContainer>
                </Form>
            </PopUp>
            {isShowPopUp && <PopUpWindow changeShowPopUp = {changeShowPopUp} errorMessage = {errorMessage}/>}
        </Container>
    );
};

export default EnrollPage;