const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require('../../lib/app');
const request = chai.request(app);
//const Todo = require('../../lib/model/todo-schema');

describe('todo routes', () => {

    let todoOne = {
        text: 'read Redux docs',
        completed: false
    };

    it('POST creates a new Todo item', () => {
        return request.post('/')
            .send(todoOne)
            .then(res => {
                assert.isOk(res.body._id);
                todoOne._id = res.body._id;
                todoOne.__v = res.body.__v;
                assert.deepEqual(res.body, todoOne);
            });
    });

    it('GET retrieves all the Todo items', () => {
        return request.get('/')
            .then(res => {
                assert.isArray(res.body);
            });
    });

    it('PUT updates a Todo', () => {
        return request.put(`/${todoOne._id}`)
            .send({completed: true})
            .then(res => {
                assert.equal(res.body.completed, true);
            });
    });
});