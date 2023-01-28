import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import "./Login.scss";
import { FormattedMessage } from "react-intl";
import { divide } from "lodash";
// import { userService } from "../../services";
import { handeLoginApi } from "../../services/userService";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isShowPassword: true,
        };
        this.btnLogin = React.createRef();
    }

    handleOnChangeUser = (event) => {
        this.setState({
            username: event.target.value,
        });
    };
    handleOnChangePass = (event) => {
        this.setState({
            password: event.target.value,
        });
    };
    handeLogin = async () => {
        console.log(this.state.username);
        console.log(this.state.password);

        try {
            await handeLoginApi(this.state.username, this.state.password);
        } catch (e) {
            console.log(e);
        }
    };
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        });
    };
    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group input-login">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your username"
                                value={this.state.username}
                                onChange={(event) =>
                                    this.handleOnChangeUser(event)
                                }
                            />
                        </div>
                        <div className="col-12 form-group input-login">
                            <label>Password</label>
                            <div className="custom-input-password">
                                <input
                                    type={
                                        this.state.isShowPassword
                                            ? "text"
                                            : "password"
                                    }
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={this.state.password}
                                    onChange={(event) =>
                                        this.handleOnChangePass(event)
                                    }
                                />
                                <span
                                    onClick={() =>
                                        this.handleShowHidePassword()
                                    }
                                >
                                    <i
                                        className={
                                            this.state.isShowPassword
                                                ? "far fa-eye"
                                                : "far fa-eye-slash"
                                        }
                                    ></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-12">
                            <button
                                className="btn-login"
                                onClick={() => {
                                    this.handeLogin();
                                }}
                            >
                                Login
                            </button>
                        </div>
                        <div className="col-12">
                            <span className="fogot-password">
                                Forgot your password?
                            </span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <span className="text-other-login">
                                Or login with:
                            </span>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) =>
            dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
