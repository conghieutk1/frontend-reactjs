import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./TableManage.scss";
import * as actions from "../../../store/actions";
// import {
//     getAllUsers,
//     createNewUserByReact,
//     deleteUserByReact,
//     editUserByReact,
// } from "../../services/userService";
// import ModalUser from "./ModalUser";
// import ModalEditUser from "./ModalEditUser";
// import { emitter } from "../../utils/emitter";

class TableManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersRedux: [],
        };
    }

    componentDidMount() {
        this.props.fetchUsersRedux();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers,
            });
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteAUserRedux(user.id);
    };
    handleEditUser = (user) => {
        this.props.handleEditUserFromParentKey(user);
    };
    render() {
        // console.log("check  all users: ", this.props.listUsers);
        // console.log("check  state: ", this.state.usersRedux);
        let arrUsers = this.state.usersRedux;
        return (
            <table id="TableManage">
                <tbody>
                    <tr>
                        <th>Email</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>Phone number</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                    {arrUsers &&
                        arrUsers.length > 0 &&
                        arrUsers.map((item, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.roleId}</td>
                                        <td>{item.phonenumber}</td>
                                        <td>{item.positionId}</td>
                                        <td>
                                            <button
                                                className="btn-edit"
                                                onClick={() =>
                                                    this.handleEditUser(item)
                                                }
                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button
                                                className="btn-delete"
                                                onClick={() =>
                                                    this.handleDeleteUser(item)
                                                }
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            );
                        })}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManage);
