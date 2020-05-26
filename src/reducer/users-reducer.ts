import { IUsersState } from ".";  // index.ts
import { AnyAction } from "redux";
import { usersTypes } from "../action-mapper/Users-action-mappers";


const initialState:IUsersState = 
{
    allUsers:[],
    errorMessage:''
}
    
export const usersReducer = (state = initialState, action:AnyAction ) =>
{
    switch (action.type) 
    {
        case usersTypes.GET_ALL_USERS:{   // Good
            return {
                ...state, // spread Operator
                allUsers:action.payload.usersArray
            }
        }  
        case usersTypes.FAILED_TO_RETRIEVE_USERS:{    //  Bad
            return {                           
                ...state,
                errorMessage:'Failed to Retrieve Users'
            }
        } 
        default:
            return state;
    }
}