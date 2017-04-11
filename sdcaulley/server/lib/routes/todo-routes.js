const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Todo = require('../model/todo-schema');

router
    .post('/', bodyParser, (req, res, next) => {
        new Todo(req.body).save()
        .then(todo => {
            res.send(todo);
        })
        .catch(next);
    })
    .get('/', (req, res, next) => {
        Todo.find()
        .lean()
        .then(todos => res.send(todos))
        .catch(next);
    })
    .put('/:id', bodyParser, (req, res, next) => {
        Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        .then(todo => res.send(todo))
        .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        const id = req.params.id;
        Todo.findByIdAndRemove(id)
            .then(deleted => res.send({deleted: !!deleted, id: id}))
            .catch(next);
    });

module.exports = router;