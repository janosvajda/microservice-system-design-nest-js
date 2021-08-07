import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { IUser } from '../interfaces/user.interface';

const SALT_ROUNDS = 10;

function transformValue(doc, ret: { [key: string]: any }) {
  delete ret._id;
  delete ret.password;
}

export interface IUserSchema extends mongoose.Document {
  email: string;
  password: string;
  is_confirmed: boolean;
  comparePassword: (password: string) => Promise<Boolean>
  getEncryptedPassword: (password: string) => Promise<string>;
};

export const UserSchema = new mongoose.Schema<IUserSchema>(
  {
    email: {
      type: String
    },
    is_confirmed: {
      type: Boolean,
      required: [true, 'Confirmed can not be empty'],
    },
    password: {
      type: String,
      required: [true, 'Password can not be empty'],
      minlength: [6, 'Password should include at least 6 chars'],
    },
  },
  {
    toObject: {
      virtuals: true,
      versionKey: false,
      transform: transformValue,
    },
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: transformValue,
    },
  },
);

