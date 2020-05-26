import { Dispatch } from "redux";
import {updateUser } from "../remote/users";
import { Role } from "../model/Role";

export const UpdateUserTypes = {
    SUCCESSFUL_USER_UPDATE : 'USER_UPDATE_SUCCESS',
    UPDATE_USER_INTERNAL_SERVER_ERROR: 'USER_UPDATE_INTERNAL_SERVER_ERROR'
}

export const UpdateUserActionMapper = (userId:number,  userName:string, password:string,firstName:string,
    lastName:string,email:string,role:Role, gender:string) => async  (dispatch:Dispatch) => 
    {
    try {
        let updatedUser = await updateUser( userId, userName, password,firstName,lastName, email, role, gender)
        dispatch({
          type:  UpdateUserTypes.SUCCESSFUL_USER_UPDATE,
          payload:{
              updatedUser
          }
        })
    }catch(e)
        {
            dispatch({
                type:UpdateUserTypes.UPDATE_USER_INTERNAL_SERVER_ERROR
            })
        } //catch
    } // update method


