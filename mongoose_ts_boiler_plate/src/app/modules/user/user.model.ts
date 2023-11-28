import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import configs from '../../configs';
const UserSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      trim: true,
      required: [true, 'Id is required'],
    },

    password: {
      type: String,
      trim: true,
      required: [true, 'Password is required'],
    },
    needsPasswordChanged: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: {
        values: ['admin', 'student', 'faculty'],
        message: `{VALUE} can't be role`,
      },
      required: [true, 'Role is required'],
    },
    status: {
      type: String,
      enum: {
        values: ['in-progress', 'blocked'],
        message: `{VALUE}  can't be status`,
      },
      default: 'in-progress',
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(configs.bcrypt_solt_rounds),
  );
  next();
});

UserSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});
const User = model<TUser>('User', UserSchema);

export default User;
