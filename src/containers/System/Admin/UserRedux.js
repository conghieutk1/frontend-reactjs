import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserRedux.scss";
import { LANGUAGES } from "../../../utils";
import { getAllCodeService } from "../../../services/userService";
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
        };
    }

    async componentDidMount() {
        try {
            let res = await getAllCodeService("gender");
            if (res && res.errCode === 0) {
                this.setState({
                    genderArr: res.data,
                });
            }
            res = await getAllCodeService("position");
            if (res && res.errCode === 0) {
                this.setState({
                    positionArr: res.data,
                });
            }
            res = await getAllCodeService("role");
            if (res && res.errCode === 0) {
                this.setState({
                    roleArr: res.data,
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let genders = this.state.genderArr;
        let language = this.props.language;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        return (
            <div className="user-redux-container">
                <div className="title">User Redux</div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <div className="label-adduser col-12">
                                <FormattedMessage id="manage-user.add" />
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.email" />
                                </label>
                                <input className="form-control" type="email" />
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.password" />
                                </label>
                                <input
                                    className="form-control"
                                    type="password"
                                />
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.firstname" />
                                </label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.lastname" />
                                </label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.phonenumber" />
                                </label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-9">
                                <label>
                                    <FormattedMessage id="manage-user.address" />
                                </label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.gender" />
                                </label>
                                <select className="form-control">
                                    {genders &&
                                        genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.position" />
                                </label>
                                <select className="form-control">
                                    {positions &&
                                        positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.role" />
                                </label>
                                <select className="form-control">
                                    {roles &&
                                        roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.image" />
                                </label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary">
                                    <FormattedMessage id="manage-user.save" />
                                </button>
                            </div>
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
