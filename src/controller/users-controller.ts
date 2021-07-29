import { Express } from "express"
import { UserModel } from "../model/user-model"
import { createUser, getUser, getUsersList } from "../service/user-service";

export function registerUserRoute(app: Express): void {
    app.get('/user/:id', async (req, res) => {
        try {
            const foundHobby = await getUser(req.params.id);
            res.status(200).json(foundHobby);
        } catch (err) {
            res.status(500).json({ error: err })
        }
    })

    app.get('/user', async (req, res) => {
        try {
            const foundHobby = await getUsersList();
            res.status(200).json(foundHobby);
        } catch (err) {
            res.status(500).json({ error: err })
        }
    })

    app.post('/user', (req, res) => {
        createUser({name: req.body.name}, {...req.body.hobbies}).then((data: any) => {
            res.status(201).send({ status: 'user created', ...data });
        }).catch((err: Error) => {
            res.status(500).send({ error: err });
        })
    })

    // app.put('/user/:id', (req, res) => {
    //     res.send('update user with id:' + req.params.id);
    // })

    // app.delete('/user/:id', async (req, res) => {
    //     try {
    //         const removedHobby = await UserModel.deleteOne({ _id: req.params.id });
    //         res.status(200).json(removedHobby);
    //     } catch (err) {
    //         res.status(500).json({ error: err })
    //     }
    // })
}