export interface UserList {
        
    id:number,
    creation:string,
    nombre:string,
    apellido:string,
    email:string,
    password:string,
    telefono:number,
    _links:{
        self:{
            href:string
        },
        usuarios:{
            href:string
        }
    }
      
}
