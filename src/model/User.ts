import {Role} from './Role'



// a model is just an object for holding data, generally it will reflect data from our database
export class User {
    userId:number// a unique number for identification
    userName:string
    password:string 
    email:string   
    firstName:string
    lastName:string
    role:Role // their user permissions
    // user - for you can use the service
    // admin - you can ban people or add/remove movies
    gender: string;
    constructor(
        userId:number,
        userName:string,
        password:string,
        email:string,        
        firstName:string,
        lastName:string,
        role:Role,
        gender:string
        ){
            this.userId = userId              //1
            this.userName = userName          //2  
            this.password = password          //3
            this.email = email                //4   
            this.firstName = firstName        //5
            this.lastName = lastName          //6
            this.role = role                  //7
            this.gender = gender              //8 
        }
}