
//create user schema
import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import config from "../../config";

const UserSchema:Schema=new Schema<TUser>({
    id:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    needPassWordChange:{type:Boolean,default:true},
    role:{type:String,
      enum:(['student','faculty','admin']),
      required:true
    },
    status:{type:String,
      enum:(['in-progress','blocked']),
      default:'in-progress'
    },
    isDeleted:{
      type:Boolean,
      default:false
    }
},
{
  timestamps:true
}
);


//pre middle wire
UserSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password as string,
    Number(config.bcrypt_salt_rounds),
  );
  next()
});

//post middle wire
UserSchema.post('save', function (doc, next) {
  this.password = '';
  next();
});



//create model based on this Schema

export const UserModel=model<TUser>('user',UserSchema);
