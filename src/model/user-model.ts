import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    hobbies: [{
        type: Schema.Types.ObjectId,
        ref: 'Hobby'
    }]
})

export const UserModel = model('Users', UserSchema);

export interface IUser{
    name: string;
}