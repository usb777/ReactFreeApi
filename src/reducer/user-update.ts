import { IUpdateUserState } from "."
import { Role } from "../model/Role"
import { User } from "../model/User"
import { AnyAction } from "redux"
import { UpdateUserTypes } from "../action-mapper/User-update-action-mappers"

export const initialState:IUpdateUserState = {
    updatedUser: new User(0,'','','','','', new Role(1,''),''), //  no password
    errorMessage:''
}

//we make a reduce for updating this piece of state
export const updateUserReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case UpdateUserTypes.SUCCESSFUL_USER_UPDATE:{
            // if you do not return a new object
            //react will not trigger a render
            return {
                ...state,
                updatedUser: action.payload.updatedUser,
                errorMessage:''            }
       }
        case UpdateUserTypes.UPDATE_USER_INTERNAL_SERVER_ERROR:{
            return {
                ...state,
                errorMessage:'Did not update'
            }
        }
        default:
            return state;
    }
}
