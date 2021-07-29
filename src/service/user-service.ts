import { HobbyModel, IHobby } from "../model/hobby-model";
import { IUser, UserModel } from "../model/user-model";
import { getAllUsers, getUserById, insertNewUser } from "../repository/user-repository";


export async function getUser(userId: string) {
    return await getUserById(userId);
}

export async function getUsersList() {
    return await getAllUsers();
}

export async function createUser(userParam: IUser, hobbyParam: IHobby) {
    const newHobby = new HobbyModel({
        passionLevel: hobbyParam.passionLevel,
        name: hobbyParam.name,
        year: hobbyParam.year
    });
    const newUser = new UserModel({
        name: userParam.name
    })
    return await insertNewUser(newUser, newHobby);
}