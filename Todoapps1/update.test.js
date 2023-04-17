const request = require("supertest")
const baseURL = "http://localhost:5500"


//regression, integration and acceptance test
describe("POST /update", () => {
    const newTodo = {
        content : "test0",
        date : "",
        tag: "Standard Task"
    }
    beforeAll(async () => {
        await request(baseURL).post(`/logging`).send({username: 'test', password: '123456'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');

    })
    afterAll(async () => {
        const res = await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res.body.content).toBe("this has been updated");
        await request(baseURL).get(`/delete/` + res.body._id);
        const res2 =  await request(baseURL).get(`/Test2`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res2.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send( {content : "update test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    })
    it("update the post added to the post database", async () => {
        const res = await request(baseURL).get(`/Test`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res.body.content).toBe(newTodo.content);
        await request(baseURL).post(`/update`).send({_id : res.body._id, content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const res2 =  await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res2.body.content).toBe("this has been updated");
    });
});

// // unit test of update

//     describe("POST /update", () => {
//         const newTodo = {
//             content : "test0",
//             date : "",
//         }
//         beforeAll(async () => {
//             await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
//         })
//         afterAll(async () => {
//             const res = await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res.body.content).toBe("this has been updated");
//             await request(baseURL).get(`/delete/` + res.body._id);
//             const res2 =  await request(baseURL).get(`/Test2`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res2.body).toStrictEqual({});
    
//             await request(baseURL).post(`/add`).send( {content : "update test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//         })
//         it("update the post added to the post database", async () => {
//             const res = await request(baseURL).get(`/Test`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res.body.content).toBe(newTodo.content);
//             await request(baseURL).post(`/update`).send({_id : res.body._id, content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             const res2 =  await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res2.body.content).toBe("this has been updated");
//         });
//     });

//     describe("POST /update", () => {
//         const newTodo = {
//             content : "test0",
//             date : "",
//         }
//         beforeAll(async () => {
//             await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
//         })
//         afterAll(async () => {
//             const res = await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res.body.content).toBe("this has been updated");
//             await request(baseURL).get(`/delete/` + res.body._id);
//             const res2 =  await request(baseURL).get(`/Test2`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res2.body).toStrictEqual({});
    
//             await request(baseURL).post(`/add`).send( {content : "update test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//         })
//         it("update the post added to the post database", async () => {
//             const res = await request(baseURL).get(`/Test`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res.body.content).toBe(newTodo.content);
//             await request(baseURL).post(`/update`).send({_id : res.body._id, content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             const res2 =  await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res2.body.content).toBe("this has been updated");
//         });
//     });

//     describe("POST /update", () => {
//         const newTodo = {
//             content : "test1",
//             date : "",
//         }
//         beforeAll(async () => {
//             await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
//         })
//         afterAll(async () => {
//             const res = await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res.body.content).toBe("this has been updated");
//             await request(baseURL).get(`/delete/` + res.body._id);
//             const res2 =  await request(baseURL).get(`/Test2`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res2.body).toStrictEqual({});
    
//             await request(baseURL).post(`/add`).send( {content : "update test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//         })
//         it("update the post added to the post database", async () => {
//             const res = await request(baseURL).get(`/Test`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res.body.content).toBe(newTodo.content);
//             await request(baseURL).post(`/update`).send({_id : res.body._id, content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             const res2 =  await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res2.body.content).toBe("this has been updated");
//         });
//     });

//     describe("POST /update", () => {
//         const newTodo = {
//             content : "test3",
//             date : "",
//         }
//         beforeAll(async () => {
//             await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
//         })
//         afterAll(async () => {
//             const res = await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res.body.content).toBe("this has been updated");
//             await request(baseURL).get(`/delete/` + res.body._id);
//             const res2 =  await request(baseURL).get(`/Test2`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res2.body).toStrictEqual({});
    
//             await request(baseURL).post(`/add`).send( {content : "update test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//         })
//         it("update the post added to the post database", async () => {
//             const res = await request(baseURL).get(`/Test`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res.body.content).toBe(newTodo.content);
//             await request(baseURL).post(`/update`).send({_id : res.body._id, content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             const res2 =  await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res2.body.content).toBe("this has been updated");
//         });
//     });

//     describe("POST /update", () => {
//         const newTodo = {
//             content : "test4",
//             date : "",
//         }
//         beforeAll(async () => {
//             await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
//         })
//         afterAll(async () => {
//             const res = await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res.body.content).toBe("this has been updated");
//             await request(baseURL).get(`/delete/` + res.body._id);
//             const res2 =  await request(baseURL).get(`/Test2`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res2.body).toStrictEqual({});
    
//             await request(baseURL).post(`/add`).send( {content : "update test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//         })
//         it("update the post added to the post database", async () => {
//             const res = await request(baseURL).get(`/Test`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res.body.content).toBe(newTodo.content);
//             await request(baseURL).post(`/update`).send({_id : res.body._id, content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             const res2 =  await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
//             expect(res2.body.content).toBe("this has been updated");
//         });
//     });

