export function login() {
    return dispatch => {
        dispatch({
            type: 'LOGIN'
        })
    }
}
export function closeModal() {
    return dispatch => {
        dispatch({
            type: 'CLOSE_MODAL'
        })
    }
}
export function openModal() {
    return dispatch => {
        dispatch({
            type: 'OPEN_MODAL'
        })
    }
}
export function logout() {
    return dispatch => {
        dispatch({
            type: 'LOGOUT'
        })
    }
}
export function updateProductive(courseId) {
    return dispatch => {
        dispatch({
            type: 'UPDATE_PRODUCTIVE',
            payload: courseId
        })
    }
}
export function updateGeneral(courseId) {
    return dispatch => {
        dispatch({
            type: 'UPDATE_GENERAL',
            payload: courseId
        })
    }
}

export function updateProgramming(courseId) {
    return dispatch => {
        dispatch({
            type: 'UPDATE_PROGRAMMING',
            payload: courseId
        })
    }
}

export function updatePhoto(courseId) {
    return dispatch => {
        dispatch({
            type: 'UPDATE_PHOTO',
            payload: courseId
        })
    }
}
export function updateEnrollStatusGeneral(index){
    return dispatch=>{
        dispatch({
            type:'UPDATE_ENROLL_GENERAL',
            payload:index
        })
    }
}
export function updateEnrollStatusProd(index){
    console.log('in updateEnrollStatusProd action...')
    return dispatch=>{
        dispatch({
            type:'UPDATE_ENROLL_PROD',
            payload:index
        })
    }
}
export function updateEnrollStatusProg(index){
    return dispatch=>{
        dispatch({
            type:'UPDATE_ENROLL_PROG',
            payload:index
        })
    }
}
export function updateEnrollStatusPhoto(index){
    return dispatch=>{
        dispatch({
            type:'UPDATE_ENROLL_PHOTO',
            payload:index
        })
    }
}