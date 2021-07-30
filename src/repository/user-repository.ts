import { UserModel } from "../model/user-model"

export async function getUserById(userId: string) {
    return await UserModel.findById(userId).populate('hobbies');
}

export async function getAllUsers() {
    return await UserModel.find().populate('hobbies');
}

export async function insertNewUser(newUser: any) {
    return await newUser.save();
}

export async function addHobbiesToUser(id: any, user: any) {
    user.save();
    return await UserModel.findById(id).populate('hobbies');
}