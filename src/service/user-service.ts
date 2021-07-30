import { HobbyModel, IHobby } from "../model/hobby-model";
import { IUser, UserModel } from "../model/user-model";
import { insertNewHobby } from "../repository/hobby-repository";
import { getAllUsers, getUserById, insertNewUser, addHobbiesToUser } from "../repository/user-repository";


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
    const newUser: any = new UserModel({
        name: userParam.name
    })
    newUser.hobbies = [newHobby];
    await insertNewHobby(newHobby);
    return await insertNewUser(newUser);
}

export async function updateHobbies(id: any, hobbies: IHobby[]) {
    const user: any = await getUserById(id);

    hobbies.forEach(async element => {
        const newHobby = new HobbyModel({
            passionLevel: element.passionLevel,
            name: element.name,
            year: element.year
        });
        user.hobbies.push(newHobby);
        await insertNewHobby(newHobby);
    });

    return await addHobbiesToUser(id, user);
}