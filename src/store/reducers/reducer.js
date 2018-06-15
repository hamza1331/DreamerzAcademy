import courses from '../../components/Courses'
const initialState={
    loggedIn:false,
    prog:[],
    prod:[],
    gen:[],
    photo:[],
    open:false,
    courses
}

export default (state = initialState,action)=>{
    switch(action.type){
        case 'LOGIN':
        return Object.assign({},state,{
            loggedIn:true
        })
        case 'LOGOUT':
        return Object.assign({},state,{
            loggedIn:false
        })
        case 'UPDATE_PRODUCTIVE':
        let oldData = state.prod
        oldData.push(action.payload)
        return Object.assign({},state,{
            prod:oldData
        })
        case 'UPDATE_PROGRAMMING':
        let oldData1 = state.prog
        oldData1.push(action.payload)
        return Object.assign({},state,{
            prog:oldData1
        })
        case 'UPDATE_PHOTO':
        let oldData2 = state.photo
        oldData2.push(action.payload)
        return Object.assign({},state,{
            photo:oldData2
        })
        case 'UPDATE_GENERAL':
        let oldData3 = state.gen
        oldData3.push(action.payload)
        return Object.assign({},state,{
            gen:oldData3
        })
        case 'UPDATE_ENROLL_GENERAL':
        let oldData4=state.courses
        oldData4.general[action.payload].enrolled=true
        console.log(oldData4.general[action.payload].enrolled)
        return Object.assign({},state,{
            courses:oldData4
        })
        case 'UPDATE_ENROLL_PROD':
        let oldData5=state.courses
        oldData5.prod[action.payload].enrolled=true
        console.log(oldData5.prod[action.payload].enrolled)
        return Object.assign({},state,{
            courses:oldData5
        })
        case 'UPDATE_ENROLL_PROG':
        let oldData6=state.courses
        oldData6.prog[action.payload].enrolled=true
        console.log(oldData6.prog[action.payload].enrolled)
        return Object.assign({},state,{
            courses:oldData6
        })
        case 'UPDATE_ENROLL_PHOTO':
        let oldData7=state.courses
        oldData7.photo[action.payload].enrolled=true
        console.log(oldData7.general[action.payload].enrolled)
        return Object.assign({},state,{
            courses:oldData7
        })
        case 'OPEN_MODAL':
        return Object.assign({},state,{
            open:true
        })
        case 'CLOSE_MODAL':
        console.log('in reducer of close modal...')
        return Object.assign({},state,{
            open:false
        })
        default:
        return state
    }
}