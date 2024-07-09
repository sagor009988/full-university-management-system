import { z } from "zod";

const userValidationSchema=z.object({
   
   
    

})

export const UserZodValidation=userValidationSchema


// const userValidationSchema=z.object({
//     id:z.string({ invalid_type_error: "id must be a string"}),
//     password:z.string().max(20,{message:'password is more then 20 characters'}),
//     needsChangePassword:z.boolean().optional().default(true),
//     role:z.enum(['student','faculty','admin']),
//     status:z.enum(['in-progress','blocked']).default('in-progress'),
//     isDeleted:z.boolean().optional().default(false),

// })