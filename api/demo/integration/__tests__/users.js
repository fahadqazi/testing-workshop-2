import startServer from '../start-server';
import axios from 'axios';

let server;

beforeAll(() => {
  return startServer().then(s => {
    server = s
  })
})

afterAll(done => {
  server.close(done);
})

test('can get users', () => {
    return axios
        .get('http://localhost:3001/api/')
        .then(response => {
            console.log(response.data.users)
        })
})
