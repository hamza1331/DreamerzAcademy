import React, { Component } from 'react'
import { connect } from "react-redux";
import CardTemplate from './Card'
import './Catalog.css'
import firebase from 'firebase';
import ModalTemplate from './Modal';
import {
  updateGeneral, updateProductive, updateProgramming, updatePhoto, logout, updateEnrollStatusGeneral,
  updateEnrollStatusProd, updateEnrollStatusPhoto, updateEnrollStatusProg, openModal
} from "../store/actions/actions";
class Catalog extends Component {
  constructor(props) {
    super(props)
    this.handleSignout = this.handleSignout.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.handleHomeLink= this.handleHomeLink.bind(this)
    this.handleMyCoursesLink = this.handleMyCoursesLink.bind(this)
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
  handleSignout() {
    firebase.auth().signOut().then(() => {
      this.props.logout()
    })
  }
  handleModal() {
    this.props.openModal()
  }
  handleEnrollButton(index, category) {
    if (category === 'general') {
      let idOfCourse = this.props.courses.general[index].ID
      this.props.updateGeneral(idOfCourse)
      this.handleFirebaseWrite();
      this.props.updateEnrollStatusGeneral(index)
    }
    else if (category === 'prod') {
      let idOfCourseSelected = this.props.courses.prod[index].ID;
      this.props.updateProductive(idOfCourseSelected);
      this.handleFirebaseWrite();
      this.props.updateEnrollStatusProd(index)
    }
    else if (category === 'photo') {
      let idOfCourse = this.props.courses.photo[index].ID
      this.props.updatePhoto(idOfCourse)
      this.handleFirebaseWrite();
      this.props.updateEnrollStatusPhoto(index)
    }
    else if (category === 'prog') {
      let idOfCourse = this.props.courses.prog[index].ID
      this.props.updateProgram(idOfCourse)
      this.handleFirebaseWrite();
      this.props.updateEnrollStatusProg(index)
    }
  }
  handleFirebaseWrite() {
    let firebaseRefId = firebase.auth().currentUser.uid
    let firebaseRef = firebase.database().ref('courses').child(firebaseRefId)
    let finalData = {
      prod: this.props.prod,
      prog: this.props.prog,
      gen: this.props.gen,
      photo: this.props.photo
    }
    firebaseRef.set(finalData).then(() => {
      console.log('Succussfull...')
    }).catch(error => {
      console.log(error)
    })

  }
  handleMyCoursesLink(e){
    e.preventDefault()
    this.props.history.push('/mycourses')
  }
  render() {
    return (
      <div className='container'>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a onClick={this.handleHomeLink} className="navbar-brand">DevAcademy</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
             {(this.props.isLoggedIn)&& <li><a onClick={this.handleMyCoursesLink}><span className="glyphicon"></span> MY COURSES</a></li>}
              {(this.props.isLoggedIn) && <button onClick={this.handleSignout} className="btn btn-danger navbar-btn">LOG OUT</button>}
              {(!this.props.isLoggedIn) && <button onClick={this.handleModal} className="btn btn-primary navbar-btn">LOGIN</button>}
            </ul>
          </div>
        </nav>
        <h2>GENERAL</h2>
        <div className="row">
          {this.props.courses.general.map((course, index) => {
            return <span key={index}> <div className="col-md-3">
              <CardTemplate title={course.title}
                category='general'
                key={index}
                image={course.image}
                subtitle={course.subtitle}
                enrolled={course.enrolled}
                handleEnrollButton={this.handleEnrollButton.bind(this)}
                index={index}
              />
            </div>
              <div className="col-md-1">
              </div>
            </span>
          })}
        </div>
        <hr className='style16' />
        <div className="row">
          <h2>PROGRAMMING</h2>
          {this.props.courses.prog.map((course, index) => {
            return <span key={index}> <div className="col-md-3">
              <CardTemplate title={course.title}
                key={index}
                category='prog'
                image={course.image}
                subtitle={course.subtitle}
                handleEnrollButton={this.handleEnrollButton.bind(this)}
                index={index}
              />
            </div>
              <div className="col-md-1">
              </div>
            </span>
          })}
        </div>
        <hr className='style16' />
        <div className="row">
          <h2>PRODUCTIVITY</h2>
          {this.props.courses.prod.map((course, index) => {
            return <span key={index}> <div className="col-md-3">
              <CardTemplate title={course.title}
                key={index}
                category='prod'
                image={course.image}
                subtitle={course.subtitle}
                handleEnrollButton={this.handleEnrollButton.bind(this)}
                index={index}
              />
            </div>
              <div className="col-md-1">
              </div>
            </span>
          })}
        </div>
        <hr className='style16' />
        <div className="row">
          <h2>PHOTOGRAPHY</h2>
          {this.props.courses.photo.map((course, index) => {
            return <span key={index}> <div className="col-md-3">
              <CardTemplate title={course.title}
                key={index}
                category='photo'
                image={course.image}
                subtitle={course.subtitle}
                handleEnrollButton={this.handleEnrollButton.bind(this)}
                index={index}
              />
            </div>
              <div className="col-md-1">
              </div>
            </span>
          })}
        </div>
        <ModalTemplate />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return ({
    isLoggedIn: state.rootReducer.loggedIn,
    prod: state.rootReducer.prod,
    prog: state.rootReducer.prog,
    gen: state.rootReducer.gen,
    photo: state.rootReducer.photo,
    courses: state.rootReducer.courses
  })
}

function mapActionsToProps(dispatch) {
  return ({
    updatePhoto: (courseId) => {
      dispatch(updatePhoto(courseId))
    },
    updateGeneral: (courseId) => {
      dispatch(updateGeneral(courseId))
    },
    updatePhoto: (courseId) => {
      dispatch(updatePhoto(courseId))
    },
    openModal: () => {
      dispatch(openModal())
    },
    updateProductive: (courseId) => {
      dispatch(updateProductive(courseId))
    },
    updateProgram: (courseId) => {
      dispatch(updateProgramming(courseId))
    },
    logout: () => {
      dispatch(logout())
    },
    updateEnrollStatusGeneral: (index) => {
      dispatch(updateEnrollStatusGeneral(index))
    },
    updateEnrollStatusPhoto: (index) => {
      dispatch(updateEnrollStatusPhoto(index))
    },
    updateEnrollStatusProd: (index) => {
      dispatch(updateEnrollStatusProd(index))
    },
    updateEnrollStatusProg: (index) => {
      dispatch(updateEnrollStatusProg(index))
    },
  })
}
export default connect(mapStateToProps, mapActionsToProps)(Catalog)
