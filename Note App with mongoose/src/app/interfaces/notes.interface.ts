import Types from 'mongoose'

export interface INote {

  title: string;
  content?: string;
  catagory?: 'personal' | 'work' | 'other';
  pinned?: boolean;
  tags?: {
    label: string;
    color?: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
  user: Types.ObjectId,
}