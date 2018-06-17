import React, { Component } from 'react'
import { connect } from "react-redux";
import firebase from 'firebase'
import CardTemplate from './Card'
import {
  updateGenCourses, updatePhotoCourses, updateProdCourses, updateProgCourses,
  resetGenCourses,resetPhotoCourses,resetProdCourses,resetProgCourses
} from "../store/actions/actions";
class MyCourses extends Component {
  constructor(props) {
    super(props)
    this.handleHomeLink = this.handleHomeLink.bind(this)
    this.handleCatalogLink = this.handleCatalogLink.bind(this)
  }
  firebaseInstance() {
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
  componentDidMount() {
    this.firebaseInstance()
    let uid = firebase.auth().currentUser.uid
    let firebaseRef = firebase.database().ref('courses').child(uid)
    firebaseRef.once('value', snap => {
      let data = snap.val()
      if (data.photo) {
        this.props.resetPhotoCourses()
        data.photo.forEach(element => {
          this.props.updatePhotoCourses(element)
        });
        this.props.history.push('/mycourses')
      }
      if (data.gen) {
        this.props.resetGenCourses()
        data.gen.forEach(element => {
          this.props.updateGenCourses(element)
        })
        this.props.history.push('/mycourses')
      }
      if (data.prod) {
        this.props.resetProdCourses()
        data.prod.forEach(element => {
          this.props.updateProdCourses(element)
        })
        this.props.history.push('/mycourses')
      }
      if (data.prog) {
        this.props.resetProgCourses()
        data.prog.forEach(element => {
          this.props.updateProgCourses(element)
        })
        this.props.history.push('/mycourses')
      }
    })
  }
  handleHomeLink(e) {
    e.preventDefault();
    this.props.history.push('/')
  }
  handleCatalogLink(e) {
    e.preventDefault();
    this.props.history.push('/catalog')
  }
  render() {
    return (
      <div className='container'>
        <div>
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <a onClick={this.handleHomeLink} className="navbar-brand">DreamerzAcademy</a>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li><a onClick={this.handleCatalogLink}><span className="glyphicon"></span> COURSE CATALOG</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <br />
        <h2>GENERAL</h2>
        <div className="row">
          {this.props.genCourses.map((course, index) => {
            return <span key={index}>
              <div className="col-md-3">
                <CardTemplate
                  title={course.title}
                  key={index}
                  image={course.image}
                  subtitle={course.subtitle}
                />
              </div>
              <div className="col-md-1">
              </div>
            </span>
          })}
    </div>
        <hr className='style16' />
        <h2>PHOTOGRAPHY</h2>
        <div className="row">
          {this.props.photoCourses.map((course, index) => {
            return <span key={index}>
              <div className="col-md-3">
                <CardTemplate
                  title={course.title}
                  key={index}
                  image={course.image}
                  subtitle={course.subtitle}
                />
              </div>
              <div className="col-md-1">
              </div>
            </span>
          })}
    </div>
        <hr className='style16' />
        <h2>PROGRAMMING</h2>
        <div className="row">
          {this.props.progCourses.map((course, index) => {
            return <span key={index}>
              <div className="col-md-3">
                <CardTemplate
                  title={course.title}
                  key={index}
                  image={course.image}
                  subtitle={course.subtitle}
                />
              </div>
              <div className="col-md-1">
              </div>
            </span>
          })}
    </div>
        <hr className='style16' />
        <h2>PRODUCTIVITY</h2>
        <div className="row">
          {this.props.prodCourses.map((course, index) => {
            return <span key={index}>
              <div className="col-md-3">
                <CardTemplate
                  title={course.title}
                  key={index}
                  image={course.image}
                  subtitle={course.subtitle}
                />
              </div>
              <div className="col-md-1">
              </div>
            </span>
          })}
    </div>
        <hr className='style16' />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return ({
    progCourses: state.rootReducer.progCourses,
    genCourses: state.rootReducer.genCourses,
    prodCourses: state.rootReducer.prodCourses,
    photoCourses: state.rootReducer.photoCourses
  })
}
function mapActionToProps(dispatch) {
  return ({
    updatePhotoCourses: (id) => {
      dispatch(updatePhotoCourses(id))
    },
    updateProgCourses: (id) => {
      dispatch(updateProgCourses(id))
    },
    updateGenCourses: (id) => {
      dispatch(updateGenCourses(id))
    },
    updateProdCourses: (id) => {
      dispatch(updateProdCourses(id))
    },
    resetGenCourses:()=>{
      dispatch(resetGenCourses())
    },
    resetProgCourses:()=>{
      dispatch(resetProgCourses())
    },
    resetProdCourses:()=>{
      dispatch(resetProdCourses())
    },
    resetPhotoCourses:()=>{
      dispatch(resetPhotoCourses())
    },
  })
}
export default connect(mapStateToProps, mapActionToProps)(MyCourses)