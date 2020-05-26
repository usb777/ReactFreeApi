import { User } from "../model/User"
import { IGetUserByIdState } from "."
import { Role } from "../model/Role"
import { AnyAction } from "redux"
import { FindUserByIdTypes } from "../action-mapper/UserById-action-mappers"

/*
userId:number  //1
userName:string  //2
//password:string  we should never send a password to a user
email:string     //3
firstName:string  //4
lastName:string  //5
role:Role // their user permissions  //6

*/

export const initialState:IGetUserByIdState = {
    userById: new User(0,'','','','','',new Role(1,''),''),
    errorMessage:''
}

//we make a reduce for updating this piece of state
export const getUserByIdReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case FindUserByIdTypes.SUCCESSFUL:{
            // if you do not return a new object
            //react will not trigger a render
            return {
                ...state,
                userById: action.payload.user
            }
       }
        case FindUserByIdTypes.USER_NOT_FOUND:{
            return {
                ...state,
                errorMessage:'User not found'
            }
        }
        case FindUserByIdTypes.INTERNAL_SERVER:{
            return {
                ...state,
                errorMessage:'Please Provide an existing User Id'
            }
        }
        default:
            return state;
    }
}
