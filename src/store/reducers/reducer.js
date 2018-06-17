import courses from '../../components/Courses'
const initialState={
    loggedIn:false,
    prog:[],
    prod:[],
    gen:[],
    photo:[],
    progCourses:[],
    genCourses:[],
    prodCourses:[],
    photoCourses:[],
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
        return Object.assign({},state,{
            courses:oldData7
        })
        case 'OPEN_MODAL':
        return Object.assign({},state,{
            open:true
        })
        case 'CLOSE_MODAL':
        return Object.assign({},state,{
            open:false
        })
        case 'UPDATE_PROG_COURSES':
        let oldData8=state.progCourses
        state.courses.prog.map(course=>{
            if(course.ID===action.payload)
                oldData8.push(course)
        })
        return Object.assign({},state,{
            progCourses:oldData8
        })
        case 'UPDATE_GEN_COURSES':
        let oldData9=state.genCourses
        // oldData9.push( state.courses.general.filter(data=>{
        //     return data.ID===action.payload
        // }))
        state.courses.general.map((course)=>{
            if(course.ID===action.payload){
                oldData9.push(course)
            }
        })
        return Object.assign({},state,{
            genCourses:oldData9
        })
        case 'UPDATE_PHOTO_COURSES':
        let oldData10=state.photoCourses
        state.courses.photo.map((course=>{
            if(course.ID===action.payload){
                oldData10.push(course)
            }
        }))
        return Object.assign({},state,{
            photoCourses:oldData10
        })
        case 'UPDATE_PROD_COURSES':
        let oldData11=state.prodCourses
        state.courses.prod.map(course=>{
            if(course.ID===action.payload)
                oldData11.push(course)
        })
        return Object.assign({},state,{
            prodCourses:oldData11
        })
        case 'RESET_GEN_COURSE':
        return Object.assign({},state,{
            genCourses:[]
        })
        case 'RESET_PROG_COURSE':
        return Object.assign({},state,{
            progCourses:[]
        })
        case 'RESET_PHOTO_COURSE':
        return Object.assign({},state,{
            photoCourses:[]
        })
        case 'RESET_PROD_COURSE':
        return Object.assign({},state,{
            prodCourses:[]
        })
        default:
        return state
    }
}