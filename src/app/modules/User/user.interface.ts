//create a interface

import { model } from "mongoose"

export type TUser={
    id:string,
    password:string,
    needsChangePassword:boolean,
    role:'student'|'faculty'|'admin',
    status:'in-progress'|'blocked',
    isDeleted:boolean,

}

export type newUser={
    role:string;
    password:string;
    id:string
}