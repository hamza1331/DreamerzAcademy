import React from 'react';
import Modal from 'react-responsive-modal';
import { connect } from "react-redux";
import { closeModal, login } from "../store/actions/actions";
import './Modal.css'
import { RingLoader } from "react-spinners";
import firebase from 'firebase'
class ModalTemplate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pw: '',
            loading:false
        }
    }


    onCloseModal() {
        this.props.closeModal()
    }
    onCloseModalWithLogin(){
        this.props.closeModal()
        this.props.login()
        this.props.history.push('/catalog')
        this.props.history.push('/catalog')
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister(e) {
        this.setState({
            loading:true
        })
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pw).then(() => {
            console.log('user created succesfully')

            this.setState({
                email: '',
                pw: '',
                loading:false
            })
            this.onCloseModalWithLogin()
        }).catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // let errorMessage = error.message;
            // ...
            // alert(errorMessage)
        });
    }
    handleLogin(e) {
        e.preventDefault()
        this.setState({
            loading:true
        })
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pw).then(() => {
            this.setState({
                email: '',
                pw: '',
                loading:false
            })
            this.onCloseModalWithLogin()
        }).catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code
            console.log(error.message)
            // let errorMessage = error.message;
            // ...
            // alert(errorMessage)
        });
    }
    render() {
        return (
            <div>
                <Modal open={this.props.open} onClose={() => this.onCloseModal()} little><br /><br />
                    <div className="wrapper">
                        <form className="form-signin">
                            <h2 className="form-signin-heading">Please login</h2>
                            <input value={this.state.email} onChange={e => this.handleChange(e)} type="email" autoComplete='off' className="form-control inp" name="email" placeholder="Email Address" required="" autoFocus={true} />
                            <input value={this.state.pw} onChange={e => this.handleChange(e)} type="password" className="form-control inp" name="pw" placeholder="Password" />

                            <button onClick={e => this.handleLogin(e)} className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                            <button onClick={e => this.handleRegister(e)} className="btn btn-lg btn-info btn-block" type="submit">REGISTER</button>
                        </form>
                        <RingLoader loading={this.state.loading} color={'#123abc'}/>
                    </div>
                </Modal>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return ({
        open: state.rootReducer.open
    })
}
function mapActionToProps(dispatch) {
    return ({
        closeModal: () => {
            dispatch(closeModal())
        },
        login: () => {
            dispatch(login())
        }
    })
}
export default connect(mapStateToProps, mapActionToProps)(ModalTemplate)