import { ICreateUserState } from "."
import { Role } from "../model/Role"
import { User } from "../model/User"
import { AnyAction } from "redux"
import { CreateUserTypes } from "../action-mapper/User-create-action-mappers"

export const initialState:ICreateUserState = {
    createdUser: new User(1,'','','','','', new Role(1,''),''), //  no password
    errorMessage:''
}

//we make a reduce for creation  this piece of state
export const createUserReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case CreateUserTypes.SUCCESSFUL_USER_CREATE:{
            // if you do not return a new object
            //react will not trigger a render
            return {
                ...state,
                createdUser: action.payload.createdUser,
                errorMessage:''            }
       }
        case CreateUserTypes.CREATE_USER_INTERNAL_SERVER_ERROR:{
            return {
                ...state,
                errorMessage:'Did not create'
            }
        }
        default:
            return state;
    }
}
