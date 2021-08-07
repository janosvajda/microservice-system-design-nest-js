import * as mongoose from 'mongoose';

function transformValue(doc, ret: { [key: string]: any }) {
  delete ret._id;
}

function generateLink() {
  return Math.random().toString(36).replace('0.', '');
}

export const UserLinkSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    is_used: {
      type: Boolean
    },
    link: {
      type: String,
      default: generateLink(),
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
