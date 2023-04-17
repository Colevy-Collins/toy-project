const request = require("supertest")
const baseURL = "http://localhost:5500"


//regression, integration and acceptance test
describe("DELETE /clear", () => {
      it("test the error with adding empty post is caught", async () => {

        await request(baseURL).post(`/logging`).send({username: 'test', password: '123456'}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        await request(baseURL).post(`/add`).send( {content : "test1"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test2"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test3"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test4"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test5"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test6"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test7"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const deleteTest6 =  await request(baseURL).get('/clear');
        const res6 =  await request(baseURL).get(`/Test3`);
        expect(res6.body).toStrictEqual([]);

        await request(baseURL).post(`/add`).send( {content : "clear test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        });
    });
// unit test of clear
describe("DELETE /clear", () => {
      it("test the error with adding empty post is caught", async () => {

        await request(baseURL).post(`/add`).send( {content : "test1"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test2"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test3"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test4"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test5"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test6"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test7"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const deleteTest6 =  await request(baseURL).get('/clear');
        const res6 =  await request(baseURL).get(`/Test3`);
        expect(res6.body).toStrictEqual([]);

        await request(baseURL).post(`/add`).send( {content : "clear test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        });
    });
describe("DELETE /clear", () => {
      it("test the error with adding empty post is caught", async () => {

        await request(baseURL).post(`/add`).send( {content : "test1"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test2"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test3"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test4"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test5"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test6"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test7"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const deleteTest6 =  await request(baseURL).get('/clear');
        const res6 =  await request(baseURL).get(`/Test3`);
        expect(res6.body).toStrictEqual([]);

        await request(baseURL).post(`/add`).send( {content : "clear test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        });
    });
describe("DELETE /clear", () => {
      it("test the error with adding empty post is caught", async () => {

        await request(baseURL).post(`/add`).send( {content : "test1"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test2"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test3"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test4"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test5"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test6"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test7"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const deleteTest6 =  await request(baseURL).get('/clear');
        const res6 =  await request(baseURL).get(`/Test3`);
        expect(res6.body).toStrictEqual([]);

        await request(baseURL).post(`/add`).send( {content : "clear test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        });
    });
describe("DELETE /clear", () => {
      it("test the error with adding empty post is caught", async () => {

        await request(baseURL).post(`/add`).send( {content : "test1"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test2"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test3"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test4"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test5"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test6"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test7"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const deleteTest6 =  await request(baseURL).get('/clear');
        const res6 =  await request(baseURL).get(`/Test3`);
        expect(res6.body).toStrictEqual([]);

        await request(baseURL).post(`/add`).send( {content : "clear test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        });
    });
describe("DELETE /clear", () => {
      it("test the error with adding empty post is caught", async () => {

        await request(baseURL).post(`/add`).send( {content : "test1"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test2"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test3"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test4"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test5"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test6"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test7"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const deleteTest6 =  await request(baseURL).get('/clear');
        const res6 =  await request(baseURL).get(`/Test3`);
        expect(res6.body).toStrictEqual([]);

        await request(baseURL).post(`/add`).send( {content : "clear test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        });
    });
