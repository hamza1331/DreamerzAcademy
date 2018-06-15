import React, { Component } from 'react'
import online from './online.jpg'
import { connect } from "react-redux";
import './Home.css'
import firebase from 'firebase'
import { login } from "../store/actions/actions";
import { RingLoader } from 'react-spinners';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pwd: '',
            loading: false
        }
    }
    componentWillMount() {
        if (!firebase.apps.length) {
            let config = {
                apiKey: "AIzaSyDevJziMzAlMpErfarI9Q1DcBGU6JF-EF8",
                authDomain: "explorefirebase-80b58.firebaseapp.com",
                databaseURL: "https://explorefirebase-80b58.firebaseio.com",
                projectId: "explorefirebase-80b58",
                storageBucket: "explorefirebase-80b58.appspot.com",
                messagingSenderId: "994024778201"
            };
            firebase.initializeApp(config);
        }
    }
    handleHomeLink(e) {
        e.preventDefault();
        this.props.history.push('/')
    }
    handleCatalogLink(e) {
        e.preventDefault();
        this.props.history.push('/catalog')
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleRegister(e) {
        e.preventDefault()
        this.setState({
            loading:true
        })
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pwd).then(() => {
            console.log('user created succesfully')

            this.setState({
                email: '',
                pwd: '',
                loading:false
            })
            this.props.login()
            this.props.history.push('/catalog')
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            this.setState({
                email: '',
                pwd: ''
            })
            alert(errorMessage)
        });
    }
    handleLogin(e) {
        e.preventDefault()
        this.setState({
            loading:true
        })
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pwd).then(() => {
            this.setState({
                email: '',
                pwd: '',
                loading:false
            })
            this.props.login()
            this.props.history.push('/catalog')
        }).catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            alert(errorMessage)
        });
    }
    render() {
        return (
            <div className='container'>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a onClick={(e) => this.handleHomeLink(e)} className="navbar-brand" href="#">DevAcademy</a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a onClick={(e) => this.handleCatalogLink(e)} href="#"><span className="glyphicon"></span> COURSE CATALOG</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-md-4">
                        <img id='course' src={online} alt="image not fount" />
                    </div>
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="col-md-5 frm">
                                <form class="form-horizontal">
                                    <div className="form-group">
                                        <label className="control-label col-sm-2" for="email">Email:</label>
                                        <div className="col-sm-10">
                                            <input
                                                type="email"
                                                value={this.state.email}
                                                onChange={(e) => this.handleChange(e)}
                                                className="form-control"
                                                name='email'
                                                id="email"
                                                placeholder="Enter email"
                                                autoComplete='off'
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2" for="pwd">Password:</label>
                                        <div className="col-sm-10">
                                            <input
                                                type="password"
                                                onChange={(e) => this.handleChange(e)}
                                                value={this.state.pwd}
                                                className="form-control"
                                                name='pwd'
                                                id="pwd"
                                                placeholder="Enter password" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                            <div style={{ display: 'inline', marginRight: '18px' }} onClick={(e) => this.handleRegister(e)} className="btn btn-info btn-lg">REGISTER</div>
                                            <div style={{ display: 'inline' }} className="btn btn-primary btn-lg" onClick={e => this.handleLogin(e)}>LOGIN</div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                <RingLoader
                    color={'#123abc'}
                    loading={this.state.loading}
                />
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return ({
    })
}
function mapActionToProps(dispatch) {
    return ({
        login: () => {
            dispatch(login())
        }
    })
}
export default connect(mapStateToProps, mapActionToProps)(Home)
