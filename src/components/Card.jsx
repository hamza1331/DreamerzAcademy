import React,{Component} from 'react'
import { connect } from "react-redux";
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { openModal} from "../store/actions/actions";
// import online from './online.jpg'
class CardTemplate extends Component {
  constructor(props){
    super(props)
  }
  handleModal(e){
    e.preventDefault()
    this.props.openModal()
  }
  handleEnroll(){
    this.props.handleEnrollButton(this.props.index,this.props.category)
  }
  
  render() {
    return (
      <div className="crd">
        <Card>
          <CardImage className="img-fluid crdimg" src={this.props.image} />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.subtitle}</CardText>
            {(this.props.isLoggedIn===true)?((this.props.enrolled)?
              (<Button disabled={'disabled'}>Enrolled</Button>):<Button onClick={this.handleEnroll.bind(this)}>Enroll Now</Button>):
              (<Button onClick={e=>this.handleModal(e)}>Login to Enroll</Button>)
            }
          </CardBody>
        </Card>
    </div>
    )
  }
}

function mapStateToProps(state){
  return({
    isLoggedIn: state.rootReducer.loggedIn
  })
}
function mapActionToProps(dispatch) {
  return ({
      openModal:()=>{
          dispatch(openModal())
      }
  })
}
export default connect(mapStateToProps,mapActionToProps)(CardTemplate)