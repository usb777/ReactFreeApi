import { combineReducers } from "redux";
import { User } from "../model/User";
import { usersReducer } from "./users-reducer";
import { getUserByIdReducer}  from "./FindUserByIdReducer"
import { updateUserReducer } from "./user-update";
import { createUserReducer } from "./user-create";

export interface IUsersState{
    allUsers:User[]
    errorMessage:string
}


export interface IGetUserByIdState {
	userById: User;
	errorMessage: string;
}

export interface IUpdateUserState {
	updatedUser: User;
	errorMessage: string;
}


export interface ICreateUserState {
   createdUser: User;
   errorMessage: string;
}



//define all of the pieces of state
export interface IState{   
    allUsers:IUsersState,
    userById:IGetUserByIdState,
    updatedUser: IUpdateUserState,
    createdUser: ICreateUserState
}

//turn all individual pieces of state into a single state
export const state = combineReducers<IState>({
   
    allUsers: usersReducer,
    userById: getUserByIdReducer,
    updatedUser:  updateUserReducer,
    createdUser: createUserReducer
})