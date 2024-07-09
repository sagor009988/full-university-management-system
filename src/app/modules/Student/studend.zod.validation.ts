import { z } from 'zod';

const nameSchema = z.object({
  firstName: z.string()
    .trim()
    .max(20, 'max name can not be 20')
    .refine((value) => {
      const firstNamestr = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      return firstNamestr === value;
    }, { message: 'First name must be capitalized and properly formatted' }),
  middleName: z.string().optional(),
  lastName: z.string()
    .refine(value => /^[A-Za-z]+$/.test(value), { message: '{VALUE} is not correct' }),
});

const guardianSchema = z.object({
  fatherName: z.string().nonempty('father name is required'),
  fatherOccupation: z.string().nonempty('father occupation name is required'),
  fatherContactNo: z.string(),
  motherName: z.string().nonempty('mother name is required'),
  motherOccupation: z.string().nonempty('mother occupation is required'),
  motherContactNo: z.string(),
});

const localGuardianSchema = z.object({
  name: z.string().nonempty('localGuardian name is required'),
  contactNo: z.string().nonempty('local Guardian contactno is required'),
  address: z.string().nonempty('Local Guardian address is required'),
});

const studenValidationSchema = z.object({
  id: z.string().nonempty('ID is required'),
 
  name: nameSchema,
  gender: z.enum(['Male', 'Female']),
  dateOfBirth: z.string(),
  email: z.string()
    .nonempty('email is required')
    .email('Invalid email format'),
  contactNo: z.string().nonempty('contact No is required'),
  emergencyContactNo: z.string().nonempty('emergency contact No is required'),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
  presentAddress: z.string().nonempty('present address is required'),
  parmanentAddress: z.string().nonempty('permanent address is required'),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: z.string().optional(),
 isDeleted:z.boolean()
});

export const StudentZodValidationSchema = studenValidationSchema;