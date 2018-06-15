import React, { Component } from 'react'
import { connect } from "react-redux";
class MyCourses extends Component {
  constructor(props) {
    super(props)
    this.state = {
       }
  }
  
  render() {
    return (
      <div className='container'>
          Hello from My Courses..
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
    
  })
}
export default connect(mapStateToProps, mapActionToProps)(MyCourses)