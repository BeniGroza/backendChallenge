import { HobbyModel, IHobby } from "../model/hobby-model"
import { getHobbyById, insertNewHobby, deleteHobby } from "../repository/hobby-repository";

export async function getHobby(hobbyId: string) {
    return await getHobbyById(hobbyId);
}

export async function createHobby(hobbyParam: IHobby) {
    const newHobby = new HobbyModel({
        passionLevel: hobbyParam.passionLevel,
        name: hobbyParam.name,
        year: hobbyParam.year
    });
    return await insertNewHobby(newHobby);
}

export async function removeHobby(hobbyId: string) {
    return await deleteHobby(hobbyId);
}