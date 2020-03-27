module.exports = data => {
    let express = require('express');
    let router = express.Router();

    router.get('/', (req, res) => {
        res.json(data);
    });

    router.get('/:id', (req, res) => {
        let id = req.params.id;
        res.json(data.find(k => k.id === Number(id)));
    });

    router.post('/', (req, res) => {
        const reducer = (acc, curr) => Math.max(acc, curr);
        let nextId = data.map(el => el.id).reduce(reducer) + 1;
        let kitten = {
            id: nextId,
            name : req.body.name,
            hobbies : [] // Empty hobby array
        };
    });

    router.post('/:id/hobbies', (req, res) => {
        const kitten = data.find(k => k.id === Number(id));
        kitten.hobbies.push(req.body.hobby);
        res.json(kitten);
    });

    return router;
};