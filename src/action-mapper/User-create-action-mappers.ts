import { Dispatch } from "redux";
import {createUser } from "../remote/users";
import { Role } from "../model/Role";

export const CreateUserTypes = {
    SUCCESSFUL_USER_CREATE : 'USER_CREATE_SUCCESS',
    CREATE_USER_INTERNAL_SERVER_ERROR: 'USER_CREATE_INTERNAL_SERVER_ERROR'
}

export const CreateUserActionMapper = (userId:number,  userName:string, password:string,firstName:string,
    lastName:string,email:string,role:Role, gender:string) => async  (dispatch:Dispatch) => 
    {
    try {                      
         let createdUser = await createUser(userId, userName, password, firstName, lastName, email, role, gender)
           dispatch({
            type:  CreateUserTypes.SUCCESSFUL_USER_CREATE,
            payload:{
                     createdUser
                    }
                    })
        }
        catch(e)
        {
            dispatch({ type: CreateUserTypes.CREATE_USER_INTERNAL_SERVER_ERROR   })
        } //catch
    } // create method


