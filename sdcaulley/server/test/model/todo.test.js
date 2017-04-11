const Todo = require('../../lib/model/todo-schema');
const testInvalid = require('./test-invalid')(Todo);

describe('todo schema', () => {
    it('requires text', () => {
        return testInvalid({ completed: true});
    });
});