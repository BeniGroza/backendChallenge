import { Schema, model } from 'mongoose'

const HobbySchema = new Schema({
    passionLevel: {
        type: String,
        required: true,
        enum: ["Low", "High", "Medium", "Very-High"]
    },
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})

export const HobbyModel = model('Hobby', HobbySchema);

export interface IHobby{
    passionLevel: string;
    name: string;
    year?: number;
}