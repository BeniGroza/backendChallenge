import { Express } from "express"
import { UserModel } from "../model/user-model"
import { createUser, getUser, getUsersList, updateHobbies } from "../service/user-service";

export function registerUserRoute(app: Express): void {
    app.get('/user/:id', async (req, res) => {
        try {
            const user = await getUser(req.params.id);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ error: err })
        }
    })

    app.get('/user', async (req, res) => {
        try {
            const users = await getUsersList();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ error: err })
        }
    })

    app.post('/user', (req, res) => {
        createUser({ name: req.body.name }, req.body.hobbies).then((data: any) => {
            res.status(201).send({ status: 'user created', ...data });
        }).catch((err: Error) => {
            res.status(500).send({ error: err });
        })
    })

    app.put('/user/:id', (req, res) => {
        updateHobbies(req.params.id, req.body.hobbies).then((data: any) => {
            res.status(201).send({ status: 'new user data', ...data });
        }).catch((err: Error) => {
            res.status(500).send({ error: err });
        })
    })

    // app.delete('/user/:id', async (req, res) => {
    //     try {
    //         const removedHobby = await UserModel.deleteOne({ _id: req.params.id });
    //         res.status(200).json(removedHobby);
    //     } catch (err) {
    //         res.status(500).json({ error: err })
    //     }
    // })
}