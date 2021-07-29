import { HobbyModel } from "../model/hobby-model"

export async function getHobbyById(hobbyId: string) {
    return await HobbyModel.findById(hobbyId);
}

export async function insertNewHobby(newHobby: any) {
    return newHobby.save();
}

export async function deleteHobby(hobbyId: string) {
    return await HobbyModel.deleteOne({ _id: hobbyId });
}