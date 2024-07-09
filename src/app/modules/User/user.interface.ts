//create user interface

export type TUser={
    id:string,
    password:string,
    needPassWordChange:boolean,
    role:'student'|'faculty'|'admin',
    status:'in-progress'|'blocked',
    isDeleted:boolean
};

