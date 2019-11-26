import React, {Component} from "react";
import LoginPresenter from "./LoginPresenter";
import axios from "axios";

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowEnroll: false,
            isShowFindUser: false,
            isShowPopUp: false,
            errorMessage: "",
            enrollInput: {user_name: "", phone: "", user_id: "", password: "", passwordCheck: ""},
            findInput: {user_name: "", user_id: ""},
        }
    }

    /* 회원가입 페이지 띄우고 내리기*/
    changeShowEnroll = () => {
        this.setState({enrollInput: {user_name: "", phone: "", user_id: "", password: "", passwordCheck: ""}});
        this.setState({isShowEnroll: !this.state.isShowEnroll});
    };

    /* 비밀번호 찾기 페이지 띄우고 내리기 */
    changeShowFindUser = () => {
        this.setState({findInput: {user_name: "", user_id: ""}});
        this.setState({isShowFindUser: !this.state.isShowFindUser});
    };

    /* 팝업 경고창 띄우고 내리기*/
    changeShowPopUp = () => {
        this.setState({isShowPopUp: !this.state.isShowPopUp});
    };

    /* 회원가입 페이지에서 가입 버튼 눌렀을 때 */
    /** 아이디 중복체크, 이미 가입되어있을경우 가입 불가 메시지 창*/
    submitEnroll = (event) => {
        const {enrollInput:{user_name, phone, user_id, password, passwordCheck}} = this.state;
        /* 회원가입 페이지의 항목중 하나라도 누락 되었을 때 */
        if (user_name.length === 0 || phone.length === 0 || user_id.length === 0 || password.length === 0 || passwordCheck.length ===0) {
            event.preventDefault();
            this.setState({errorMessage: "모든 항목을 입력해 주세요."});
            this.changeShowPopUp();
        }
        /* 회원가입 페이지의 비밀번호와 비밀번호 확인란이 일치하지 않을 떄*/
        else if(password !== passwordCheck) {
            event.preventDefault();
            this.setState({errorMessage: "비밀번호가 일치하지 않습니다."});
            this.changeShowPopUp();
        }
        /* 모든 조건이 만족 되었을때 */
        else {
            /*django 서버로 데이터 전송*/
            axios.post('http://127.0.0.1:8000/api/home',{user_name,phone,user_id,password});
            alert("회원가입 완료 \n입력하신 메일을 확인해 주세요.");
            window.location.reload();
            event.preventDefault();
        }
    };

    /* 비밀번호 찾기에서 확인 버튼을 눌렀을 때*/
    /** 가입되어 있지 않은 경우 찾을 수 없는 정보 메세지 창*/
    submitUserFind = (event) => {
        const {findInput: {user_name, user_id}} = this.state;
        /* 비밀번호 찾기 페이지에서 한 항목이라도 누락 되어있을 경우 */
        if (user_name.length === 0 || user_id.length === 0) {
            event.preventDefault();
            this.setState({errorMessage: "모든 항목을 입력해주세요"});
            this.changeShowPopUp();
            console.log(this.state.isShowPopUp);
        }
        /* 모든 조건이 만족 되었을 때 */
        else {
            alert("입력하신 메일로 임시 비밀번호를 전송했습니다.");
        }
    };

    /* 회원가입시 전화번호 하이픈 자동 추가 */
    insertHyphen = (value) => {
        let number = value.replace(/[^0-9]/g, "");
        let phone = "";

        if (number.length < 4) {
            return number;
        } else if(number.length < 7) {
            phone += number.substr(0, 3);
            phone += "-";
            phone += number.substr(3);
        } else if(number.length < 11) {
            phone += number.substr(0, 3);
            phone += "-";
            phone += number.substr(3, 3);
            phone += "-";
            phone += number.substr(6);
        } else {
            phone += number.substr(0, 3);
            phone += "-";
            phone += number.substr(3, 4);
            phone += "-";
            phone += number.substr(7);
        }
        return phone;
    };

    /* 회원 가입 페이지와 비밀번호 찾기 페이지 input 요소 입력시 state 값 update*/
    inputChangeForEnroll = (event) => {
        const {target:{name, value}} = event;
        const inputValue = value;
        console.log(name);
        switch (name) {
            case "user_name":
                this.setState((prev) => {
                    return {
                        enrollInput: {...prev.enrollInput, user_name:inputValue}
                    }
                });
                break;
            case "phone":

                this.setState((prev) => {
                    return {
                        enrollInput: {...prev.enrollInput, phone:this.insertHyphen(inputValue)}
                    }
                });
                break;
            case "user_id":
                this.setState((prev) => {
                    return {
                        enrollInput: {...prev.enrollInput, user_id:inputValue}
                    }
                });
                break;
            case "password":
                this.setState((prev) => {
                    return {
                        enrollInput: {...prev.enrollInput, password:inputValue}
                    }
                });
                break;
            case "enroll-password-check":
                this.setState((prev) => {
                    return {
                        enrollInput: {...prev.enrollInput, passwordCheck:inputValue}
                    }
                });
                break;
            default:
                break;
        }
    };

    inputChangeForFind = (event) => {
        const {target: {name, value}} = event;
        const inputValue = value;
        switch (name) {
            case "user_name":
                this.setState((prev) => {
                    return {
                        findInput: {...prev.findInput, user_name: inputValue}
                    }
                });
                break;
            case "user_id":
                this.setState((prev) => {
                    return {
                        findInput: {...prev.findInput, user_id: inputValue}
                    }
                });
                break;
            default:
                break;
        }
        console.log(this.state.findInput);
    };

    render() {
        const {isShowEnroll, isShowPopUp, enrollInput, errorMessage, isShowFindUser, findInput} = this.state;
        return (
            <LoginPresenter isShowEnroll = {isShowEnroll} changeShowEnroll = {this.changeShowEnroll}
                            submitEnroll = {this.submitEnroll}
                            inputChangeForEnroll = {this.inputChangeForEnroll} enrollInput = {enrollInput}
                            inputChangeForFind = {this.inputChangeForFind}
                            changeShowPopUp = {this.changeShowPopUp} isShowPopUp = {isShowPopUp}
                            errorMessage = {errorMessage} isShowFindUser = {isShowFindUser}
                            findInput = {findInput} changeShowFindUser = {this.changeShowFindUser}
                            submitUserFind = {this.submitUserFind}
            />
        );
    }
}

export default LoginContainer;