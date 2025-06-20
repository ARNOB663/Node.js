//user interface 
export interface IUser {
    firstName : string,
    lastName:string,
    email:string,
    password:string,
    role:'USER' | 'ADMIN' | 'SUPERADMIN',
    age:number
}