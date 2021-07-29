import { Express } from "express"
import { createHobby, getHobby, removeHobby } from "../service/hobby-service";

export function registerHobbyRoute(app: Express): void {
    app.get('/hobby/:id', async (req, res) => {
        try {
            const foundHobby = await getHobby(req.params.id);
            res.status(200).json(foundHobby);
        } catch (err) {
            res.status(500).json({ error: err })
        }
    })

    app.post('/hobby', (req, res) => {
        createHobby(req.body).then((data: any) => {
            res.status(201).send({ status: 'hobby created', ...data });
        }).catch((err: Error) => {
            res.status(500).send({ error: err });
        })
    })

    // app.put('/hobby/:id', (req, res) => {
    //     res.send('updated hobby with id:' + req.params.id);
    // })

    app.delete('/hobby/:id', async (req, res) => {
        try {
            const removedHobby = await removeHobby(req.params.id);
            res.status(200).json(removedHobby);
        } catch (err) {
            res.status(500).json({ error: err })
        }
    })
}