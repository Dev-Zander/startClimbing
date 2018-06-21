let initialState = {
     guestCount:0,
     time:0,
     firstName:'',
     lastName:'',
     middleInt:'',
     emailAddress:'',
     phoneNumber: '',
     ageCheck:'',
     lawViolation: '',
     tosAcknoledgeMent:''
    }




let NEW_GUEST_COUNT = 'NEW_GUEST_COUNT'
let NEW_TIME = 'NEW_TIME'
let NEW_FIRST_NAME = 'NEW_FIRST_NAME'
let NEW_LAST_NAME = 'NEW_LAST_NAME'
let NEW_MIDDLE_INITIAL = 'NEW_MIDDLE_INITIAL'
let NEW_EMAIL = 'NEW_EMAIL'
let NEW_PHONE = 'NEW_PHONE'
let NEW_AGECHECK = 'NEW_AGECHECK'
let NEW_LAW_VIOLATION = 'NEW_LAW_VIOLATION'
let NEW_TOS = 'NEW_TOS'



export default function reducer(state = initialState, action){
    switch(action.type){
        case NEW_GUEST_COUNT:
        let newTotalGuest = Object.assign({}, state, {guestCount : action.payload})
        return newTotalGuest    
        case NEW_TIME:
        let newTime = Object.assign({}, state, {time:action.payload})  
        return newTime
        case NEW_FIRST_NAME:
        let newFirstName = Object.assign({},state, {firstName: action.payload})
        return newFirstName
        case NEW_LAST_NAME:
        let newLastName = Object.assign({}, state, {lastName: action.payload})
        return newLastName
        case NEW_MIDDLE_INITIAL:
        let newMiddleInitial = Object.assign({}, state, {middleInt: action.payload})
        return newMiddleInitial
        case NEW_EMAIL:
        let newEmail = Object.assign({}, state, {emailAddress: action.payload})
        return newEmail
        case NEW_PHONE:
        let newPhone = Object.assign({}, state, {phoneNumber: action.payload})
        return newPhone
        case NEW_AGECHECK:
        let newAge = Object.assign({}, state, {ageCheck: action.payload})
        return newAge
        case NEW_LAW_VIOLATION:
        let newLaw = Object.assign({}, state, {lawViolation: action.payload})
        return newLaw
        case NEW_TOS:
        let newTos = Object.assign({}, state, {tosAcknoledgeMent: action.payload})
        return newTos
default:
    return state
    }
}


export function NewGuestCount(value){
    return {
        type: NEW_GUEST_COUNT,
        payload: value
    }
} 
export function NewTime(value){
    return{
        type: NEW_TIME,
        payload: value
    }
}
export function NewFirstName(value){
    return {
        type: NEW_FIRST_NAME,
        payload: value
    }
}
export function NewLastName(value){
    return {
        type:NEW_LAST_NAME,
        payload:value
    }
}
export function NewMiddleInitial(value){
    return {
        type: NEW_MIDDLE_INITIAL,
        payload:value
    }
}
export function NewEmail(value){
    return {
        type: NEW_EMAIL,
        payload:value
    }
}
export function NewPhone(value){
    return {
        type: NEW_PHONE,
        payload:value
    }
}
export function NewAge(value){
    return {
        type: NEW_AGECHECK,
        payload:value
    }
}
export function NewLaw(value){
    return {
        type: NEW_LAW_VIOLATION,
        payload:value
    }
}
export function NewTos(value){
    return {
        type: NEW_TOS,
        payload:value
    }
}



