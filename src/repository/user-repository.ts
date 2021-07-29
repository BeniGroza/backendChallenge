import { IUser, UserModel } from "../model/user-model"

export async function getUserById(userId: string) {
    return await UserModel.findById(userId);
}

export async function getAllUsers() {
    return await UserModel.find();
}

export async function insertNewUser(newUser: any, userHobby: any) {
    newUser.hobbies.push(userHobby);
    return newUser.save();
}