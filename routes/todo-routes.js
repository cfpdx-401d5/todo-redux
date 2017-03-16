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
        Todo.findByIdAndRemove(req.params.id)
            .then(deleted => res.send({deleted: !!deleted}))
            .catch(next);
    });

module.exports = router;


// ADD_TODO - solicit text for new todo and add to end of array
// DELETE_TODO - remove a todo
// EDIT_TODO - supply a new "text" for a todo
// COMPLETE_TODO - mark a todo as complete
// COMPLETE_ALL - mark all of the todos as complete
// CLEAR_COMPLETED - remove all completed todos from the array