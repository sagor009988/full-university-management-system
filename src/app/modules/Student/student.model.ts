import { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  TGuardian,
  TLocalGuardian,
  TName,
  TStudent,
} from './student.interface';



const nameSchema = new Schema<TName>({
  firstName: {
    type: String,
    required: [true, 'first name is required'],
    trim: true,
    maxlength: [20, 'max name can not be 20'],
    validate: {
      validator: function (value: string) {
        const firstNamestr =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return firstNamestr === value;
      },
      message: '{VALUE} Faild',
    },
  },
  middleName: { type: String },
  lastName: {
    type: String,
    required: [true, 'last name is required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not correct',
    },
  },
});
const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: [true, 'father name is required'] },
  fatherOccupation: {
    type: String,
    required: [true, 'father occupation name is required'],
  },
  fatherContactNo: { type: String },
  motherName: { type: String, required: [true, 'mother name is required'] },
  motherOccupation: {
    type: String,
    required: [true, 'mother occupation is required'],
  },
  motherContactNo: { type: String },
});
const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: [true, 'localGuardian name is required'] },
  contactNo: {
    type: String,
    required: [true, 'local Guardian contactno is required'],
  },
  address: {
    type: String,
    required: [true, 'Local Guardian address is required'],
  },
});

const studentSchema = new Schema<TStudent>({
  
  user:{
    type:Schema.Types.ObjectId,
    required:[true ,'User id is required'],
    unique:true,
    ref:'UserModel'
    },
  name: {
    type: nameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['Male', 'Female'],
    },
    message: '{VALUE} is required',
  },
  dateOfBirth: { type: Date },
  email: {
    type: String,
    required: [true, 'email is required'],
    validate: {
      validator: (value: string) => validator.isEmail(value),
    },
  },
  contactNo: { type: String, required: [true, 'contact No is required'] },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    message: '{VALUE} is required',
  },
  presentAddress: {
    type: String,
    required: [true, 'present address is required'],
  },
  parmanentAddress: {
    type: String,
    required: [true, 'parmanent address is required'],
  },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
 

 
},{
  toJSON:{
    virtuals:true
  }
}
);
//virtual
studentSchema.virtual('FullName').get(function(){
  return (
    `${this.name.firstName} ${this.name.middleName}  ${this.name.lastName}`
  )
})

//query middle wire 
//get all
studentSchema.pre('find',function(next){
  this.find({isDeleted:{$ne:true}})
  next()
})

//single Student Middle Ware
studentSchema.pre('findOne',function(next){
  this.findOne({isDeleted:{$ne:true}})
  next()
})

//agregate
studentSchema.pre('aggregate',function(next){
  this.pipeline().unshift({$match:{isDeleted:{$ne:true}}})
  next()
})


// 3. Create a Model.
export const StudentModel = model<TStudent>('student', studentSchema)
